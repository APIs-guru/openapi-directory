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
var ReposListForUserPathParams = /** @class */ (function (_super) {
    __extends(ReposListForUserPathParams, _super);
    function ReposListForUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], ReposListForUserPathParams.prototype, "username", void 0);
    return ReposListForUserPathParams;
}(SpeakeasyBase));
export { ReposListForUserPathParams };
export var ReposListForUserDirectionEnum;
(function (ReposListForUserDirectionEnum) {
    ReposListForUserDirectionEnum["Asc"] = "asc";
    ReposListForUserDirectionEnum["Desc"] = "desc";
})(ReposListForUserDirectionEnum || (ReposListForUserDirectionEnum = {}));
export var ReposListForUserSortEnum;
(function (ReposListForUserSortEnum) {
    ReposListForUserSortEnum["Created"] = "created";
    ReposListForUserSortEnum["Updated"] = "updated";
    ReposListForUserSortEnum["Pushed"] = "pushed";
    ReposListForUserSortEnum["FullName"] = "full_name";
})(ReposListForUserSortEnum || (ReposListForUserSortEnum = {}));
export var ReposListForUserTypeEnum;
(function (ReposListForUserTypeEnum) {
    ReposListForUserTypeEnum["All"] = "all";
    ReposListForUserTypeEnum["Owner"] = "owner";
    ReposListForUserTypeEnum["Member"] = "member";
})(ReposListForUserTypeEnum || (ReposListForUserTypeEnum = {}));
var ReposListForUserQueryParams = /** @class */ (function (_super) {
    __extends(ReposListForUserQueryParams, _super);
    function ReposListForUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], ReposListForUserQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ReposListForUserQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ReposListForUserQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ReposListForUserQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], ReposListForUserQueryParams.prototype, "type", void 0);
    return ReposListForUserQueryParams;
}(SpeakeasyBase));
export { ReposListForUserQueryParams };
var ReposListForUserRequest = /** @class */ (function (_super) {
    __extends(ReposListForUserRequest, _super);
    function ReposListForUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListForUserPathParams)
    ], ReposListForUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListForUserQueryParams)
    ], ReposListForUserRequest.prototype, "queryParams", void 0);
    return ReposListForUserRequest;
}(SpeakeasyBase));
export { ReposListForUserRequest };
var ReposListForUserResponse = /** @class */ (function (_super) {
    __extends(ReposListForUserResponse, _super);
    function ReposListForUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposListForUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReposListForUserResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposListForUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.MinimalRepository }),
        __metadata("design:type", Array)
    ], ReposListForUserResponse.prototype, "minimalRepositories", void 0);
    return ReposListForUserResponse;
}(SpeakeasyBase));
export { ReposListForUserResponse };
