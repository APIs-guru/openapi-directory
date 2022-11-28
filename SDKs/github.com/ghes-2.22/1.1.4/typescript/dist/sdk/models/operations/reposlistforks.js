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
var ReposListForksPathParams = /** @class */ (function (_super) {
    __extends(ReposListForksPathParams, _super);
    function ReposListForksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposListForksPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposListForksPathParams.prototype, "repo", void 0);
    return ReposListForksPathParams;
}(SpeakeasyBase));
export { ReposListForksPathParams };
export var ReposListForksSortEnum;
(function (ReposListForksSortEnum) {
    ReposListForksSortEnum["Newest"] = "newest";
    ReposListForksSortEnum["Oldest"] = "oldest";
    ReposListForksSortEnum["Stargazers"] = "stargazers";
    ReposListForksSortEnum["Watchers"] = "watchers";
})(ReposListForksSortEnum || (ReposListForksSortEnum = {}));
var ReposListForksQueryParams = /** @class */ (function (_super) {
    __extends(ReposListForksQueryParams, _super);
    function ReposListForksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ReposListForksQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ReposListForksQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ReposListForksQueryParams.prototype, "sort", void 0);
    return ReposListForksQueryParams;
}(SpeakeasyBase));
export { ReposListForksQueryParams };
var ReposListForksRequest = /** @class */ (function (_super) {
    __extends(ReposListForksRequest, _super);
    function ReposListForksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListForksPathParams)
    ], ReposListForksRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListForksQueryParams)
    ], ReposListForksRequest.prototype, "queryParams", void 0);
    return ReposListForksRequest;
}(SpeakeasyBase));
export { ReposListForksRequest };
var ReposListForksResponse = /** @class */ (function (_super) {
    __extends(ReposListForksResponse, _super);
    function ReposListForksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposListForksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReposListForksResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposListForksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReposListForksResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.MinimalRepository }),
        __metadata("design:type", Array)
    ], ReposListForksResponse.prototype, "minimalRepositories", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScimError)
    ], ReposListForksResponse.prototype, "scimError", void 0);
    return ReposListForksResponse;
}(SpeakeasyBase));
export { ReposListForksResponse };
