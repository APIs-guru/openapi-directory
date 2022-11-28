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
var ScimSetInformationForProvisionedUserPathParams = /** @class */ (function (_super) {
    __extends(ScimSetInformationForProvisionedUserPathParams, _super);
    function ScimSetInformationForProvisionedUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ScimSetInformationForProvisionedUserPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scim_user_id" }),
        __metadata("design:type", String)
    ], ScimSetInformationForProvisionedUserPathParams.prototype, "scimUserId", void 0);
    return ScimSetInformationForProvisionedUserPathParams;
}(SpeakeasyBase));
export { ScimSetInformationForProvisionedUserPathParams };
var ScimSetInformationForProvisionedUserRequestBodyEmails = /** @class */ (function (_super) {
    __extends(ScimSetInformationForProvisionedUserRequestBodyEmails, _super);
    function ScimSetInformationForProvisionedUserRequestBodyEmails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary" }),
        __metadata("design:type", Boolean)
    ], ScimSetInformationForProvisionedUserRequestBodyEmails.prototype, "primary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ScimSetInformationForProvisionedUserRequestBodyEmails.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ScimSetInformationForProvisionedUserRequestBodyEmails.prototype, "value", void 0);
    return ScimSetInformationForProvisionedUserRequestBodyEmails;
}(SpeakeasyBase));
export { ScimSetInformationForProvisionedUserRequestBodyEmails };
var ScimSetInformationForProvisionedUserRequestBodyName = /** @class */ (function (_super) {
    __extends(ScimSetInformationForProvisionedUserRequestBodyName, _super);
    function ScimSetInformationForProvisionedUserRequestBodyName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=familyName" }),
        __metadata("design:type", String)
    ], ScimSetInformationForProvisionedUserRequestBodyName.prototype, "familyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formatted" }),
        __metadata("design:type", String)
    ], ScimSetInformationForProvisionedUserRequestBodyName.prototype, "formatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=givenName" }),
        __metadata("design:type", String)
    ], ScimSetInformationForProvisionedUserRequestBodyName.prototype, "givenName", void 0);
    return ScimSetInformationForProvisionedUserRequestBodyName;
}(SpeakeasyBase));
export { ScimSetInformationForProvisionedUserRequestBodyName };
var ScimSetInformationForProvisionedUserRequestBody = /** @class */ (function (_super) {
    __extends(ScimSetInformationForProvisionedUserRequestBody, _super);
    function ScimSetInformationForProvisionedUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], ScimSetInformationForProvisionedUserRequestBody.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ScimSetInformationForProvisionedUserRequestBody.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails", elemType: ScimSetInformationForProvisionedUserRequestBodyEmails }),
        __metadata("design:type", Array)
    ], ScimSetInformationForProvisionedUserRequestBody.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalId" }),
        __metadata("design:type", String)
    ], ScimSetInformationForProvisionedUserRequestBody.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups" }),
        __metadata("design:type", Array)
    ], ScimSetInformationForProvisionedUserRequestBody.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", ScimSetInformationForProvisionedUserRequestBodyName)
    ], ScimSetInformationForProvisionedUserRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemas" }),
        __metadata("design:type", Array)
    ], ScimSetInformationForProvisionedUserRequestBody.prototype, "schemas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userName" }),
        __metadata("design:type", String)
    ], ScimSetInformationForProvisionedUserRequestBody.prototype, "userName", void 0);
    return ScimSetInformationForProvisionedUserRequestBody;
}(SpeakeasyBase));
export { ScimSetInformationForProvisionedUserRequestBody };
var ScimSetInformationForProvisionedUserRequest = /** @class */ (function (_super) {
    __extends(ScimSetInformationForProvisionedUserRequest, _super);
    function ScimSetInformationForProvisionedUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScimSetInformationForProvisionedUserPathParams)
    ], ScimSetInformationForProvisionedUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ScimSetInformationForProvisionedUserRequestBody)
    ], ScimSetInformationForProvisionedUserRequest.prototype, "request", void 0);
    return ScimSetInformationForProvisionedUserRequest;
}(SpeakeasyBase));
export { ScimSetInformationForProvisionedUserRequest };
var ScimSetInformationForProvisionedUserResponse = /** @class */ (function (_super) {
    __extends(ScimSetInformationForProvisionedUserResponse, _super);
    function ScimSetInformationForProvisionedUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScimSetInformationForProvisionedUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ScimSetInformationForProvisionedUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScimError)
    ], ScimSetInformationForProvisionedUserResponse.prototype, "scimError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScimUser)
    ], ScimSetInformationForProvisionedUserResponse.prototype, "scimUser", void 0);
    return ScimSetInformationForProvisionedUserResponse;
}(SpeakeasyBase));
export { ScimSetInformationForProvisionedUserResponse };
