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
var AcceptAdministratorInvitationHeaders = /** @class */ (function (_super) {
    __extends(AcceptAdministratorInvitationHeaders, _super);
    function AcceptAdministratorInvitationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AcceptAdministratorInvitationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AcceptAdministratorInvitationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AcceptAdministratorInvitationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AcceptAdministratorInvitationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AcceptAdministratorInvitationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AcceptAdministratorInvitationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AcceptAdministratorInvitationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return AcceptAdministratorInvitationHeaders;
}(SpeakeasyBase));
export { AcceptAdministratorInvitationHeaders };
var AcceptAdministratorInvitationRequestBody = /** @class */ (function (_super) {
    __extends(AcceptAdministratorInvitationRequestBody, _super);
    function AcceptAdministratorInvitationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdministratorId" }),
        __metadata("design:type", String)
    ], AcceptAdministratorInvitationRequestBody.prototype, "administratorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InvitationId" }),
        __metadata("design:type", String)
    ], AcceptAdministratorInvitationRequestBody.prototype, "invitationId", void 0);
    return AcceptAdministratorInvitationRequestBody;
}(SpeakeasyBase));
export { AcceptAdministratorInvitationRequestBody };
var AcceptAdministratorInvitationRequest = /** @class */ (function (_super) {
    __extends(AcceptAdministratorInvitationRequest, _super);
    function AcceptAdministratorInvitationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcceptAdministratorInvitationHeaders)
    ], AcceptAdministratorInvitationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AcceptAdministratorInvitationRequestBody)
    ], AcceptAdministratorInvitationRequest.prototype, "request", void 0);
    return AcceptAdministratorInvitationRequest;
}(SpeakeasyBase));
export { AcceptAdministratorInvitationRequest };
var AcceptAdministratorInvitationResponse = /** @class */ (function (_super) {
    __extends(AcceptAdministratorInvitationResponse, _super);
    function AcceptAdministratorInvitationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AcceptAdministratorInvitationResponse.prototype, "acceptAdministratorInvitationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcceptAdministratorInvitationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AcceptAdministratorInvitationResponse.prototype, "internalException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AcceptAdministratorInvitationResponse.prototype, "invalidAccessException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AcceptAdministratorInvitationResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AcceptAdministratorInvitationResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AcceptAdministratorInvitationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AcceptAdministratorInvitationResponse.prototype, "statusCode", void 0);
    return AcceptAdministratorInvitationResponse;
}(SpeakeasyBase));
export { AcceptAdministratorInvitationResponse };
