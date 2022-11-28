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
var UpdateParticipantInSpacePathParams = /** @class */ (function (_super) {
    __extends(UpdateParticipantInSpacePathParams, _super);
    function UpdateParticipantInSpacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spaceId" }),
        __metadata("design:type", String)
    ], UpdateParticipantInSpacePathParams.prototype, "spaceId", void 0);
    return UpdateParticipantInSpacePathParams;
}(SpeakeasyBase));
export { UpdateParticipantInSpacePathParams };
export var UpdateParticipantInSpaceRequestBodyRoleEnum;
(function (UpdateParticipantInSpaceRequestBodyRoleEnum) {
    UpdateParticipantInSpaceRequestBodyRoleEnum["Moderator"] = "MODERATOR";
    UpdateParticipantInSpaceRequestBodyRoleEnum["Author"] = "AUTHOR";
    UpdateParticipantInSpaceRequestBodyRoleEnum["Participant"] = "PARTICIPANT";
    UpdateParticipantInSpaceRequestBodyRoleEnum["Reader"] = "READER";
})(UpdateParticipantInSpaceRequestBodyRoleEnum || (UpdateParticipantInSpaceRequestBodyRoleEnum = {}));
var UpdateParticipantInSpaceRequestBody = /** @class */ (function (_super) {
    __extends(UpdateParticipantInSpaceRequestBody, _super);
    function UpdateParticipantInSpaceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=role;" }),
        __metadata("design:type", String)
    ], UpdateParticipantInSpaceRequestBody.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=userId;" }),
        __metadata("design:type", String)
    ], UpdateParticipantInSpaceRequestBody.prototype, "userId", void 0);
    return UpdateParticipantInSpaceRequestBody;
}(SpeakeasyBase));
export { UpdateParticipantInSpaceRequestBody };
var UpdateParticipantInSpaceSecurity = /** @class */ (function (_super) {
    __extends(UpdateParticipantInSpaceSecurity, _super);
    function UpdateParticipantInSpaceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateParticipantInSpaceSecurity.prototype, "oauth", void 0);
    return UpdateParticipantInSpaceSecurity;
}(SpeakeasyBase));
export { UpdateParticipantInSpaceSecurity };
var UpdateParticipantInSpaceRequest = /** @class */ (function (_super) {
    __extends(UpdateParticipantInSpaceRequest, _super);
    function UpdateParticipantInSpaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateParticipantInSpacePathParams)
    ], UpdateParticipantInSpaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateParticipantInSpaceRequestBody)
    ], UpdateParticipantInSpaceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateParticipantInSpaceSecurity)
    ], UpdateParticipantInSpaceRequest.prototype, "security", void 0);
    return UpdateParticipantInSpaceRequest;
}(SpeakeasyBase));
export { UpdateParticipantInSpaceRequest };
var UpdateParticipantInSpaceResponse = /** @class */ (function (_super) {
    __extends(UpdateParticipantInSpaceResponse, _super);
    function UpdateParticipantInSpaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateParticipantInSpaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateParticipantInSpaceResponse.prototype, "statusCode", void 0);
    return UpdateParticipantInSpaceResponse;
}(SpeakeasyBase));
export { UpdateParticipantInSpaceResponse };
