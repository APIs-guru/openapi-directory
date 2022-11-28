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
var GetUsersUsernameMembersPathParams = /** @class */ (function (_super) {
    __extends(GetUsersUsernameMembersPathParams, _super);
    function GetUsersUsernameMembersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], GetUsersUsernameMembersPathParams.prototype, "username", void 0);
    return GetUsersUsernameMembersPathParams;
}(SpeakeasyBase));
export { GetUsersUsernameMembersPathParams };
var GetUsersUsernameMembersSecurity = /** @class */ (function (_super) {
    __extends(GetUsersUsernameMembersSecurity, _super);
    function GetUsersUsernameMembersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetUsersUsernameMembersSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetUsersUsernameMembersSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetUsersUsernameMembersSecurity.prototype, "apiKey", void 0);
    return GetUsersUsernameMembersSecurity;
}(SpeakeasyBase));
export { GetUsersUsernameMembersSecurity };
var GetUsersUsernameMembersRequest = /** @class */ (function (_super) {
    __extends(GetUsersUsernameMembersRequest, _super);
    function GetUsersUsernameMembersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersUsernameMembersPathParams)
    ], GetUsersUsernameMembersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersUsernameMembersSecurity)
    ], GetUsersUsernameMembersRequest.prototype, "security", void 0);
    return GetUsersUsernameMembersRequest;
}(SpeakeasyBase));
export { GetUsersUsernameMembersRequest };
var GetUsersUsernameMembersResponse = /** @class */ (function (_super) {
    __extends(GetUsersUsernameMembersResponse, _super);
    function GetUsersUsernameMembersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersUsernameMembersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersUsernameMembersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetUsersUsernameMembersResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetUsersUsernameMembersResponse.prototype, "user", void 0);
    return GetUsersUsernameMembersResponse;
}(SpeakeasyBase));
export { GetUsersUsernameMembersResponse };
