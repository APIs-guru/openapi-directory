var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var PullsListPathParams = /** @class */ (function (_super) {
    __extends(PullsListPathParams, _super);
    function PullsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], PullsListPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], PullsListPathParams.prototype, "repo", void 0);
    return PullsListPathParams;
}(SpeakeasyBase));
export { PullsListPathParams };
export var PullsListDirectionEnum;
(function (PullsListDirectionEnum) {
    PullsListDirectionEnum["Asc"] = "asc";
    PullsListDirectionEnum["Desc"] = "desc";
})(PullsListDirectionEnum || (PullsListDirectionEnum = {}));
export var PullsListSortEnum;
(function (PullsListSortEnum) {
    PullsListSortEnum["Created"] = "created";
    PullsListSortEnum["Updated"] = "updated";
    PullsListSortEnum["Popularity"] = "popularity";
    PullsListSortEnum["LongRunning"] = "long-running";
})(PullsListSortEnum || (PullsListSortEnum = {}));
export var PullsListStateEnum;
(function (PullsListStateEnum) {
    PullsListStateEnum["Open"] = "open";
    PullsListStateEnum["Closed"] = "closed";
    PullsListStateEnum["All"] = "all";
})(PullsListStateEnum || (PullsListStateEnum = {}));
var PullsListQueryParams = /** @class */ (function (_super) {
    __extends(PullsListQueryParams, _super);
    function PullsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base" }),
        __metadata("design:type", String)
    ], PullsListQueryParams.prototype, "base", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], PullsListQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=head" }),
        __metadata("design:type", String)
    ], PullsListQueryParams.prototype, "head", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], PullsListQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], PullsListQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], PullsListQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], PullsListQueryParams.prototype, "state", void 0);
    return PullsListQueryParams;
}(SpeakeasyBase));
export { PullsListQueryParams };
var PullsListRequest = /** @class */ (function (_super) {
    __extends(PullsListRequest, _super);
    function PullsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsListPathParams)
    ], PullsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsListQueryParams)
    ], PullsListRequest.prototype, "queryParams", void 0);
    return PullsListRequest;
}(SpeakeasyBase));
export { PullsListRequest };
var PullsListResponse = /** @class */ (function (_super) {
    __extends(PullsListResponse, _super);
    function PullsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PullsListResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PullsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.PullRequestSimple }),
        __metadata("design:type", Array)
    ], PullsListResponse.prototype, "pullRequestSimples", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], PullsListResponse.prototype, "validationError", void 0);
    return PullsListResponse;
}(SpeakeasyBase));
export { PullsListResponse };
