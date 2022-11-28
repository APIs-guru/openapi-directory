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
var EnterpriseAdminCreateUserRequestBody = /** @class */ (function (_super) {
    __extends(EnterpriseAdminCreateUserRequestBody, _super);
    function EnterpriseAdminCreateUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], EnterpriseAdminCreateUserRequestBody.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], EnterpriseAdminCreateUserRequestBody.prototype, "login", void 0);
    return EnterpriseAdminCreateUserRequestBody;
}(SpeakeasyBase));
export { EnterpriseAdminCreateUserRequestBody };
var EnterpriseAdminCreateUserRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminCreateUserRequest, _super);
    function EnterpriseAdminCreateUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EnterpriseAdminCreateUserRequestBody)
    ], EnterpriseAdminCreateUserRequest.prototype, "request", void 0);
    return EnterpriseAdminCreateUserRequest;
}(SpeakeasyBase));
export { EnterpriseAdminCreateUserRequest };
var EnterpriseAdminCreateUserResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminCreateUserResponse, _super);
    function EnterpriseAdminCreateUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminCreateUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminCreateUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SimpleUser)
    ], EnterpriseAdminCreateUserResponse.prototype, "simpleUser", void 0);
    return EnterpriseAdminCreateUserResponse;
}(SpeakeasyBase));
export { EnterpriseAdminCreateUserResponse };
