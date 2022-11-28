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
var EnterpriseAdminUpdateUsernameForUserPathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdateUsernameForUserPathParams, _super);
    function EnterpriseAdminUpdateUsernameForUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdateUsernameForUserPathParams.prototype, "username", void 0);
    return EnterpriseAdminUpdateUsernameForUserPathParams;
}(SpeakeasyBase));
export { EnterpriseAdminUpdateUsernameForUserPathParams };
var EnterpriseAdminUpdateUsernameForUserRequestBody = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdateUsernameForUserRequestBody, _super);
    function EnterpriseAdminUpdateUsernameForUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdateUsernameForUserRequestBody.prototype, "login", void 0);
    return EnterpriseAdminUpdateUsernameForUserRequestBody;
}(SpeakeasyBase));
export { EnterpriseAdminUpdateUsernameForUserRequestBody };
var EnterpriseAdminUpdateUsernameForUser202ApplicationJson = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdateUsernameForUser202ApplicationJson, _super);
    function EnterpriseAdminUpdateUsernameForUser202ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdateUsernameForUser202ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdateUsernameForUser202ApplicationJson.prototype, "url", void 0);
    return EnterpriseAdminUpdateUsernameForUser202ApplicationJson;
}(SpeakeasyBase));
export { EnterpriseAdminUpdateUsernameForUser202ApplicationJson };
var EnterpriseAdminUpdateUsernameForUserRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdateUsernameForUserRequest, _super);
    function EnterpriseAdminUpdateUsernameForUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminUpdateUsernameForUserPathParams)
    ], EnterpriseAdminUpdateUsernameForUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EnterpriseAdminUpdateUsernameForUserRequestBody)
    ], EnterpriseAdminUpdateUsernameForUserRequest.prototype, "request", void 0);
    return EnterpriseAdminUpdateUsernameForUserRequest;
}(SpeakeasyBase));
export { EnterpriseAdminUpdateUsernameForUserRequest };
var EnterpriseAdminUpdateUsernameForUserResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdateUsernameForUserResponse, _super);
    function EnterpriseAdminUpdateUsernameForUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdateUsernameForUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminUpdateUsernameForUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminUpdateUsernameForUser202ApplicationJson)
    ], EnterpriseAdminUpdateUsernameForUserResponse.prototype, "enterpriseAdminUpdateUsernameForUser202ApplicationJsonObject", void 0);
    return EnterpriseAdminUpdateUsernameForUserResponse;
}(SpeakeasyBase));
export { EnterpriseAdminUpdateUsernameForUserResponse };
