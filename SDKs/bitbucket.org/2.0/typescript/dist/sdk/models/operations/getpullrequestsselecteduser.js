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
var GetPullrequestsSelectedUserPathParams = /** @class */ (function (_super) {
    __extends(GetPullrequestsSelectedUserPathParams, _super);
    function GetPullrequestsSelectedUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=selected_user" }),
        __metadata("design:type", String)
    ], GetPullrequestsSelectedUserPathParams.prototype, "selectedUser", void 0);
    return GetPullrequestsSelectedUserPathParams;
}(SpeakeasyBase));
export { GetPullrequestsSelectedUserPathParams };
export var GetPullrequestsSelectedUserStateEnum;
(function (GetPullrequestsSelectedUserStateEnum) {
    GetPullrequestsSelectedUserStateEnum["Merged"] = "MERGED";
    GetPullrequestsSelectedUserStateEnum["Superseded"] = "SUPERSEDED";
    GetPullrequestsSelectedUserStateEnum["Open"] = "OPEN";
    GetPullrequestsSelectedUserStateEnum["Declined"] = "DECLINED";
})(GetPullrequestsSelectedUserStateEnum || (GetPullrequestsSelectedUserStateEnum = {}));
var GetPullrequestsSelectedUserQueryParams = /** @class */ (function (_super) {
    __extends(GetPullrequestsSelectedUserQueryParams, _super);
    function GetPullrequestsSelectedUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], GetPullrequestsSelectedUserQueryParams.prototype, "state", void 0);
    return GetPullrequestsSelectedUserQueryParams;
}(SpeakeasyBase));
export { GetPullrequestsSelectedUserQueryParams };
var GetPullrequestsSelectedUserSecurity = /** @class */ (function (_super) {
    __extends(GetPullrequestsSelectedUserSecurity, _super);
    function GetPullrequestsSelectedUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetPullrequestsSelectedUserSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetPullrequestsSelectedUserSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetPullrequestsSelectedUserSecurity.prototype, "apiKey", void 0);
    return GetPullrequestsSelectedUserSecurity;
}(SpeakeasyBase));
export { GetPullrequestsSelectedUserSecurity };
var GetPullrequestsSelectedUserRequest = /** @class */ (function (_super) {
    __extends(GetPullrequestsSelectedUserRequest, _super);
    function GetPullrequestsSelectedUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPullrequestsSelectedUserPathParams)
    ], GetPullrequestsSelectedUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPullrequestsSelectedUserQueryParams)
    ], GetPullrequestsSelectedUserRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPullrequestsSelectedUserSecurity)
    ], GetPullrequestsSelectedUserRequest.prototype, "security", void 0);
    return GetPullrequestsSelectedUserRequest;
}(SpeakeasyBase));
export { GetPullrequestsSelectedUserRequest };
var GetPullrequestsSelectedUserResponse = /** @class */ (function (_super) {
    __extends(GetPullrequestsSelectedUserResponse, _super);
    function GetPullrequestsSelectedUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPullrequestsSelectedUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPullrequestsSelectedUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetPullrequestsSelectedUserResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedPullrequests)
    ], GetPullrequestsSelectedUserResponse.prototype, "paginatedPullrequests", void 0);
    return GetPullrequestsSelectedUserResponse;
}(SpeakeasyBase));
export { GetPullrequestsSelectedUserResponse };
