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
var ScimProvisionAndInviteUserPathParams = /** @class */ (function (_super) {
    __extends(ScimProvisionAndInviteUserPathParams, _super);
    function ScimProvisionAndInviteUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ScimProvisionAndInviteUserPathParams.prototype, "org", void 0);
    return ScimProvisionAndInviteUserPathParams;
}(SpeakeasyBase));
export { ScimProvisionAndInviteUserPathParams };
var ScimProvisionAndInviteUserRequestBodyEmails = /** @class */ (function (_super) {
    __extends(ScimProvisionAndInviteUserRequestBodyEmails, _super);
    function ScimProvisionAndInviteUserRequestBodyEmails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary" }),
        __metadata("design:type", Boolean)
    ], ScimProvisionAndInviteUserRequestBodyEmails.prototype, "primary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ScimProvisionAndInviteUserRequestBodyEmails.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ScimProvisionAndInviteUserRequestBodyEmails.prototype, "value", void 0);
    return ScimProvisionAndInviteUserRequestBodyEmails;
}(SpeakeasyBase));
export { ScimProvisionAndInviteUserRequestBodyEmails };
var ScimProvisionAndInviteUserRequestBodyName = /** @class */ (function (_super) {
    __extends(ScimProvisionAndInviteUserRequestBodyName, _super);
    function ScimProvisionAndInviteUserRequestBodyName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=familyName" }),
        __metadata("design:type", String)
    ], ScimProvisionAndInviteUserRequestBodyName.prototype, "familyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formatted" }),
        __metadata("design:type", String)
    ], ScimProvisionAndInviteUserRequestBodyName.prototype, "formatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=givenName" }),
        __metadata("design:type", String)
    ], ScimProvisionAndInviteUserRequestBodyName.prototype, "givenName", void 0);
    return ScimProvisionAndInviteUserRequestBodyName;
}(SpeakeasyBase));
export { ScimProvisionAndInviteUserRequestBodyName };
var ScimProvisionAndInviteUserRequestBody = /** @class */ (function (_super) {
    __extends(ScimProvisionAndInviteUserRequestBody, _super);
    function ScimProvisionAndInviteUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], ScimProvisionAndInviteUserRequestBody.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ScimProvisionAndInviteUserRequestBody.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails", elemType: ScimProvisionAndInviteUserRequestBodyEmails }),
        __metadata("design:type", Array)
    ], ScimProvisionAndInviteUserRequestBody.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalId" }),
        __metadata("design:type", String)
    ], ScimProvisionAndInviteUserRequestBody.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups" }),
        __metadata("design:type", Array)
    ], ScimProvisionAndInviteUserRequestBody.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", ScimProvisionAndInviteUserRequestBodyName)
    ], ScimProvisionAndInviteUserRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemas" }),
        __metadata("design:type", Array)
    ], ScimProvisionAndInviteUserRequestBody.prototype, "schemas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userName" }),
        __metadata("design:type", String)
    ], ScimProvisionAndInviteUserRequestBody.prototype, "userName", void 0);
    return ScimProvisionAndInviteUserRequestBody;
}(SpeakeasyBase));
export { ScimProvisionAndInviteUserRequestBody };
var ScimProvisionAndInviteUserRequest = /** @class */ (function (_super) {
    __extends(ScimProvisionAndInviteUserRequest, _super);
    function ScimProvisionAndInviteUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScimProvisionAndInviteUserPathParams)
    ], ScimProvisionAndInviteUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ScimProvisionAndInviteUserRequestBody)
    ], ScimProvisionAndInviteUserRequest.prototype, "request", void 0);
    return ScimProvisionAndInviteUserRequest;
}(SpeakeasyBase));
export { ScimProvisionAndInviteUserRequest };
var ScimProvisionAndInviteUserResponse = /** @class */ (function (_super) {
    __extends(ScimProvisionAndInviteUserResponse, _super);
    function ScimProvisionAndInviteUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScimProvisionAndInviteUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ScimProvisionAndInviteUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScimError)
    ], ScimProvisionAndInviteUserResponse.prototype, "scimError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScimUser)
    ], ScimProvisionAndInviteUserResponse.prototype, "scimUser", void 0);
    return ScimProvisionAndInviteUserResponse;
}(SpeakeasyBase));
export { ScimProvisionAndInviteUserResponse };
