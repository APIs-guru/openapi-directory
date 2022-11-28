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
var AddParticipantsToSpacePathParams = /** @class */ (function (_super) {
    __extends(AddParticipantsToSpacePathParams, _super);
    function AddParticipantsToSpacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], AddParticipantsToSpacePathParams.prototype, "id", void 0);
    return AddParticipantsToSpacePathParams;
}(SpeakeasyBase));
export { AddParticipantsToSpacePathParams };
export var AddParticipantsToSpaceRequestBodyRoleEnum;
(function (AddParticipantsToSpaceRequestBodyRoleEnum) {
    AddParticipantsToSpaceRequestBodyRoleEnum["Default"] = "DEFAULT";
    AddParticipantsToSpaceRequestBodyRoleEnum["Moderator"] = "MODERATOR";
    AddParticipantsToSpaceRequestBodyRoleEnum["Author"] = "AUTHOR";
    AddParticipantsToSpaceRequestBodyRoleEnum["Participant"] = "PARTICIPANT";
    AddParticipantsToSpaceRequestBodyRoleEnum["Reader"] = "READER";
})(AddParticipantsToSpaceRequestBodyRoleEnum || (AddParticipantsToSpaceRequestBodyRoleEnum = {}));
var AddParticipantsToSpaceRequestBody = /** @class */ (function (_super) {
    __extends(AddParticipantsToSpaceRequestBody, _super);
    function AddParticipantsToSpaceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=role;" }),
        __metadata("design:type", String)
    ], AddParticipantsToSpaceRequestBody.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=userId;" }),
        __metadata("design:type", Array)
    ], AddParticipantsToSpaceRequestBody.prototype, "userId", void 0);
    return AddParticipantsToSpaceRequestBody;
}(SpeakeasyBase));
export { AddParticipantsToSpaceRequestBody };
var AddParticipantsToSpaceSecurity = /** @class */ (function (_super) {
    __extends(AddParticipantsToSpaceSecurity, _super);
    function AddParticipantsToSpaceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], AddParticipantsToSpaceSecurity.prototype, "oauth", void 0);
    return AddParticipantsToSpaceSecurity;
}(SpeakeasyBase));
export { AddParticipantsToSpaceSecurity };
var AddParticipantsToSpaceRequest = /** @class */ (function (_super) {
    __extends(AddParticipantsToSpaceRequest, _super);
    function AddParticipantsToSpaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddParticipantsToSpacePathParams)
    ], AddParticipantsToSpaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", AddParticipantsToSpaceRequestBody)
    ], AddParticipantsToSpaceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddParticipantsToSpaceSecurity)
    ], AddParticipantsToSpaceRequest.prototype, "security", void 0);
    return AddParticipantsToSpaceRequest;
}(SpeakeasyBase));
export { AddParticipantsToSpaceRequest };
var AddParticipantsToSpaceResponse = /** @class */ (function (_super) {
    __extends(AddParticipantsToSpaceResponse, _super);
    function AddParticipantsToSpaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AddParticipantsToSpaceResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddParticipantsToSpaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], AddParticipantsToSpaceResponse.prototype, "participantAddResults", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddParticipantsToSpaceResponse.prototype, "statusCode", void 0);
    return AddParticipantsToSpaceResponse;
}(SpeakeasyBase));
export { AddParticipantsToSpaceResponse };
