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
var UpdateEmailIdentityPolicyPathParams = /** @class */ (function (_super) {
    __extends(UpdateEmailIdentityPolicyPathParams, _super);
    function UpdateEmailIdentityPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmailIdentity" }),
        __metadata("design:type", String)
    ], UpdateEmailIdentityPolicyPathParams.prototype, "emailIdentity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PolicyName" }),
        __metadata("design:type", String)
    ], UpdateEmailIdentityPolicyPathParams.prototype, "policyName", void 0);
    return UpdateEmailIdentityPolicyPathParams;
}(SpeakeasyBase));
export { UpdateEmailIdentityPolicyPathParams };
var UpdateEmailIdentityPolicyHeaders = /** @class */ (function (_super) {
    __extends(UpdateEmailIdentityPolicyHeaders, _super);
    function UpdateEmailIdentityPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateEmailIdentityPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateEmailIdentityPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateEmailIdentityPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateEmailIdentityPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateEmailIdentityPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateEmailIdentityPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateEmailIdentityPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateEmailIdentityPolicyHeaders;
}(SpeakeasyBase));
export { UpdateEmailIdentityPolicyHeaders };
var UpdateEmailIdentityPolicyRequestBody = /** @class */ (function (_super) {
    __extends(UpdateEmailIdentityPolicyRequestBody, _super);
    function UpdateEmailIdentityPolicyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Policy" }),
        __metadata("design:type", String)
    ], UpdateEmailIdentityPolicyRequestBody.prototype, "policy", void 0);
    return UpdateEmailIdentityPolicyRequestBody;
}(SpeakeasyBase));
export { UpdateEmailIdentityPolicyRequestBody };
var UpdateEmailIdentityPolicyRequest = /** @class */ (function (_super) {
    __extends(UpdateEmailIdentityPolicyRequest, _super);
    function UpdateEmailIdentityPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateEmailIdentityPolicyPathParams)
    ], UpdateEmailIdentityPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateEmailIdentityPolicyHeaders)
    ], UpdateEmailIdentityPolicyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateEmailIdentityPolicyRequestBody)
    ], UpdateEmailIdentityPolicyRequest.prototype, "request", void 0);
    return UpdateEmailIdentityPolicyRequest;
}(SpeakeasyBase));
export { UpdateEmailIdentityPolicyRequest };
var UpdateEmailIdentityPolicyResponse = /** @class */ (function (_super) {
    __extends(UpdateEmailIdentityPolicyResponse, _super);
    function UpdateEmailIdentityPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEmailIdentityPolicyResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateEmailIdentityPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEmailIdentityPolicyResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateEmailIdentityPolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEmailIdentityPolicyResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateEmailIdentityPolicyResponse.prototype, "updateEmailIdentityPolicyResponse", void 0);
    return UpdateEmailIdentityPolicyResponse;
}(SpeakeasyBase));
export { UpdateEmailIdentityPolicyResponse };
