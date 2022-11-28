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
var GetTeamsUsernameFollowingPathParams = /** @class */ (function (_super) {
    __extends(GetTeamsUsernameFollowingPathParams, _super);
    function GetTeamsUsernameFollowingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], GetTeamsUsernameFollowingPathParams.prototype, "username", void 0);
    return GetTeamsUsernameFollowingPathParams;
}(SpeakeasyBase));
export { GetTeamsUsernameFollowingPathParams };
var GetTeamsUsernameFollowingSecurity = /** @class */ (function (_super) {
    __extends(GetTeamsUsernameFollowingSecurity, _super);
    function GetTeamsUsernameFollowingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetTeamsUsernameFollowingSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetTeamsUsernameFollowingSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamsUsernameFollowingSecurity.prototype, "apiKey", void 0);
    return GetTeamsUsernameFollowingSecurity;
}(SpeakeasyBase));
export { GetTeamsUsernameFollowingSecurity };
var GetTeamsUsernameFollowingRequest = /** @class */ (function (_super) {
    __extends(GetTeamsUsernameFollowingRequest, _super);
    function GetTeamsUsernameFollowingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsUsernameFollowingPathParams)
    ], GetTeamsUsernameFollowingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsUsernameFollowingSecurity)
    ], GetTeamsUsernameFollowingRequest.prototype, "security", void 0);
    return GetTeamsUsernameFollowingRequest;
}(SpeakeasyBase));
export { GetTeamsUsernameFollowingRequest };
var GetTeamsUsernameFollowingResponse = /** @class */ (function (_super) {
    __extends(GetTeamsUsernameFollowingResponse, _super);
    function GetTeamsUsernameFollowingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamsUsernameFollowingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamsUsernameFollowingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamsUsernameFollowingResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedUsers)
    ], GetTeamsUsernameFollowingResponse.prototype, "paginatedUsers", void 0);
    return GetTeamsUsernameFollowingResponse;
}(SpeakeasyBase));
export { GetTeamsUsernameFollowingResponse };
