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
var EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams, _super);
    function EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" }),
        __metadata("design:type", String)
    ], EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams.prototype, "enterprise", void 0);
    return EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams;
}(SpeakeasyBase));
export { EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams };
var EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails = /** @class */ (function (_super) {
    __extends(EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails, _super);
    function EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary" }),
        __metadata("design:type", Boolean)
    ], EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails.prototype, "primary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails.prototype, "value", void 0);
    return EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails;
}(SpeakeasyBase));
export { EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails };
var EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups = /** @class */ (function (_super) {
    __extends(EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups, _super);
    function EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups.prototype, "value", void 0);
    return EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups;
}(SpeakeasyBase));
export { EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups };
var EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName = /** @class */ (function (_super) {
    __extends(EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName, _super);
    function EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=familyName" }),
        __metadata("design:type", String)
    ], EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName.prototype, "familyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=givenName" }),
        __metadata("design:type", String)
    ], EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName.prototype, "givenName", void 0);
    return EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName;
}(SpeakeasyBase));
export { EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName };
var EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody = /** @class */ (function (_super) {
    __extends(EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody, _super);
    function EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails", elemType: EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails }),
        __metadata("design:type", Array)
    ], EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups", elemType: EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups }),
        __metadata("design:type", Array)
    ], EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName)
    ], EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemas" }),
        __metadata("design:type", Array)
    ], EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody.prototype, "schemas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userName" }),
        __metadata("design:type", String)
    ], EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody.prototype, "userName", void 0);
    return EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody;
}(SpeakeasyBase));
export { EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody };
var EnterpriseAdminProvisionAndInviteEnterpriseUserRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminProvisionAndInviteEnterpriseUserRequest, _super);
    function EnterpriseAdminProvisionAndInviteEnterpriseUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams)
    ], EnterpriseAdminProvisionAndInviteEnterpriseUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody)
    ], EnterpriseAdminProvisionAndInviteEnterpriseUserRequest.prototype, "request", void 0);
    return EnterpriseAdminProvisionAndInviteEnterpriseUserRequest;
}(SpeakeasyBase));
export { EnterpriseAdminProvisionAndInviteEnterpriseUserRequest };
var EnterpriseAdminProvisionAndInviteEnterpriseUserResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminProvisionAndInviteEnterpriseUserResponse, _super);
    function EnterpriseAdminProvisionAndInviteEnterpriseUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminProvisionAndInviteEnterpriseUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminProvisionAndInviteEnterpriseUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScimEnterpriseUser)
    ], EnterpriseAdminProvisionAndInviteEnterpriseUserResponse.prototype, "scimEnterpriseUser", void 0);
    return EnterpriseAdminProvisionAndInviteEnterpriseUserResponse;
}(SpeakeasyBase));
export { EnterpriseAdminProvisionAndInviteEnterpriseUserResponse };
