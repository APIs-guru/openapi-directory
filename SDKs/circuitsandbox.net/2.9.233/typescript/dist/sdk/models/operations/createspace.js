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
export var CreateSpaceRequestBodyAccessModeTypeEnum;
(function (CreateSpaceRequestBodyAccessModeTypeEnum) {
    CreateSpaceRequestBodyAccessModeTypeEnum["InternalOnly"] = "INTERNAL_ONLY";
    CreateSpaceRequestBodyAccessModeTypeEnum["InternalExternal"] = "INTERNAL_EXTERNAL";
})(CreateSpaceRequestBodyAccessModeTypeEnum || (CreateSpaceRequestBodyAccessModeTypeEnum = {}));
export var CreateSpaceRequestBodyRoleEnum;
(function (CreateSpaceRequestBodyRoleEnum) {
    CreateSpaceRequestBodyRoleEnum["Moderator"] = "MODERATOR";
    CreateSpaceRequestBodyRoleEnum["Author"] = "AUTHOR";
    CreateSpaceRequestBodyRoleEnum["Participant"] = "PARTICIPANT";
    CreateSpaceRequestBodyRoleEnum["Reader"] = "READER";
})(CreateSpaceRequestBodyRoleEnum || (CreateSpaceRequestBodyRoleEnum = {}));
export var CreateSpaceRequestBodyStatusEnum;
(function (CreateSpaceRequestBodyStatusEnum) {
    CreateSpaceRequestBodyStatusEnum["Enabled"] = "ENABLED";
    CreateSpaceRequestBodyStatusEnum["Disabled"] = "DISABLED";
})(CreateSpaceRequestBodyStatusEnum || (CreateSpaceRequestBodyStatusEnum = {}));
export var CreateSpaceRequestBodyTypeEnum;
(function (CreateSpaceRequestBodyTypeEnum) {
    CreateSpaceRequestBodyTypeEnum["Open"] = "OPEN";
    CreateSpaceRequestBodyTypeEnum["Closed"] = "CLOSED";
    CreateSpaceRequestBodyTypeEnum["Secret"] = "SECRET";
})(CreateSpaceRequestBodyTypeEnum || (CreateSpaceRequestBodyTypeEnum = {}));
var CreateSpaceRequestBody = /** @class */ (function (_super) {
    __extends(CreateSpaceRequestBody, _super);
    function CreateSpaceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=accessModeType;" }),
        __metadata("design:type", String)
    ], CreateSpaceRequestBody.prototype, "accessModeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=description;" }),
        __metadata("design:type", String)
    ], CreateSpaceRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=largePictureBase64;" }),
        __metadata("design:type", String)
    ], CreateSpaceRequestBody.prototype, "largePictureBase64", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=name;" }),
        __metadata("design:type", String)
    ], CreateSpaceRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=role;" }),
        __metadata("design:type", String)
    ], CreateSpaceRequestBody.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=smallPictureBase64;" }),
        __metadata("design:type", String)
    ], CreateSpaceRequestBody.prototype, "smallPictureBase64", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=status;" }),
        __metadata("design:type", String)
    ], CreateSpaceRequestBody.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=tags;" }),
        __metadata("design:type", Array)
    ], CreateSpaceRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=type;" }),
        __metadata("design:type", String)
    ], CreateSpaceRequestBody.prototype, "type", void 0);
    return CreateSpaceRequestBody;
}(SpeakeasyBase));
export { CreateSpaceRequestBody };
var CreateSpaceSecurity = /** @class */ (function (_super) {
    __extends(CreateSpaceSecurity, _super);
    function CreateSpaceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreateSpaceSecurity.prototype, "oauth", void 0);
    return CreateSpaceSecurity;
}(SpeakeasyBase));
export { CreateSpaceSecurity };
var CreateSpaceRequest = /** @class */ (function (_super) {
    __extends(CreateSpaceRequest, _super);
    function CreateSpaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSpaceRequestBody)
    ], CreateSpaceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSpaceSecurity)
    ], CreateSpaceRequest.prototype, "security", void 0);
    return CreateSpaceRequest;
}(SpeakeasyBase));
export { CreateSpaceRequest };
var CreateSpaceResponse = /** @class */ (function (_super) {
    __extends(CreateSpaceResponse, _super);
    function CreateSpaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CreateSpaceResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSpaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSpaceResponse.prototype, "participantSpaceWrapper", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSpaceResponse.prototype, "statusCode", void 0);
    return CreateSpaceResponse;
}(SpeakeasyBase));
export { CreateSpaceResponse };
