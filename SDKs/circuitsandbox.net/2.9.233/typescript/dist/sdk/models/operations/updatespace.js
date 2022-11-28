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
var UpdateSpacePathParams = /** @class */ (function (_super) {
    __extends(UpdateSpacePathParams, _super);
    function UpdateSpacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateSpacePathParams.prototype, "id", void 0);
    return UpdateSpacePathParams;
}(SpeakeasyBase));
export { UpdateSpacePathParams };
export var UpdateSpaceRequestBodyAccessModeTypeEnum;
(function (UpdateSpaceRequestBodyAccessModeTypeEnum) {
    UpdateSpaceRequestBodyAccessModeTypeEnum["InternalOnly"] = "INTERNAL_ONLY";
    UpdateSpaceRequestBodyAccessModeTypeEnum["InternalExternal"] = "INTERNAL_EXTERNAL";
    UpdateSpaceRequestBodyAccessModeTypeEnum["NoChange"] = "NO_CHANGE";
})(UpdateSpaceRequestBodyAccessModeTypeEnum || (UpdateSpaceRequestBodyAccessModeTypeEnum = {}));
export var UpdateSpaceRequestBodyRoleEnum;
(function (UpdateSpaceRequestBodyRoleEnum) {
    UpdateSpaceRequestBodyRoleEnum["Moderator"] = "MODERATOR";
    UpdateSpaceRequestBodyRoleEnum["Author"] = "AUTHOR";
    UpdateSpaceRequestBodyRoleEnum["Participant"] = "PARTICIPANT";
    UpdateSpaceRequestBodyRoleEnum["Reader"] = "READER";
    UpdateSpaceRequestBodyRoleEnum["NoChange"] = "NO_CHANGE";
})(UpdateSpaceRequestBodyRoleEnum || (UpdateSpaceRequestBodyRoleEnum = {}));
export var UpdateSpaceRequestBodyStatusEnum;
(function (UpdateSpaceRequestBodyStatusEnum) {
    UpdateSpaceRequestBodyStatusEnum["Enabled"] = "ENABLED";
    UpdateSpaceRequestBodyStatusEnum["Disabled"] = "DISABLED";
})(UpdateSpaceRequestBodyStatusEnum || (UpdateSpaceRequestBodyStatusEnum = {}));
export var UpdateSpaceRequestBodyTypeEnum;
(function (UpdateSpaceRequestBodyTypeEnum) {
    UpdateSpaceRequestBodyTypeEnum["Open"] = "OPEN";
    UpdateSpaceRequestBodyTypeEnum["Closed"] = "CLOSED";
    UpdateSpaceRequestBodyTypeEnum["Secret"] = "SECRET";
    UpdateSpaceRequestBodyTypeEnum["NoChange"] = "NO_CHANGE";
})(UpdateSpaceRequestBodyTypeEnum || (UpdateSpaceRequestBodyTypeEnum = {}));
var UpdateSpaceRequestBody = /** @class */ (function (_super) {
    __extends(UpdateSpaceRequestBody, _super);
    function UpdateSpaceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=accessModeType;" }),
        __metadata("design:type", String)
    ], UpdateSpaceRequestBody.prototype, "accessModeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=description;" }),
        __metadata("design:type", String)
    ], UpdateSpaceRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=largePictureBase64;" }),
        __metadata("design:type", String)
    ], UpdateSpaceRequestBody.prototype, "largePictureBase64", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=name;" }),
        __metadata("design:type", String)
    ], UpdateSpaceRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ownerId;" }),
        __metadata("design:type", String)
    ], UpdateSpaceRequestBody.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=role;" }),
        __metadata("design:type", String)
    ], UpdateSpaceRequestBody.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=smallPictureBase64;" }),
        __metadata("design:type", String)
    ], UpdateSpaceRequestBody.prototype, "smallPictureBase64", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=status;" }),
        __metadata("design:type", String)
    ], UpdateSpaceRequestBody.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=tags;" }),
        __metadata("design:type", Array)
    ], UpdateSpaceRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=type;" }),
        __metadata("design:type", String)
    ], UpdateSpaceRequestBody.prototype, "type", void 0);
    return UpdateSpaceRequestBody;
}(SpeakeasyBase));
export { UpdateSpaceRequestBody };
var UpdateSpaceSecurity = /** @class */ (function (_super) {
    __extends(UpdateSpaceSecurity, _super);
    function UpdateSpaceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateSpaceSecurity.prototype, "oauth", void 0);
    return UpdateSpaceSecurity;
}(SpeakeasyBase));
export { UpdateSpaceSecurity };
var UpdateSpaceRequest = /** @class */ (function (_super) {
    __extends(UpdateSpaceRequest, _super);
    function UpdateSpaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSpacePathParams)
    ], UpdateSpaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSpaceRequestBody)
    ], UpdateSpaceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSpaceSecurity)
    ], UpdateSpaceRequest.prototype, "security", void 0);
    return UpdateSpaceRequest;
}(SpeakeasyBase));
export { UpdateSpaceRequest };
var UpdateSpaceResponse = /** @class */ (function (_super) {
    __extends(UpdateSpaceResponse, _super);
    function UpdateSpaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UpdateSpaceResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSpaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSpaceResponse.prototype, "participantSpaceWrapper", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSpaceResponse.prototype, "statusCode", void 0);
    return UpdateSpaceResponse;
}(SpeakeasyBase));
export { UpdateSpaceResponse };
