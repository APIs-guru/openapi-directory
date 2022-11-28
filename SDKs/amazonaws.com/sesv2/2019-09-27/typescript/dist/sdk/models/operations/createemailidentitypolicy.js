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
var CreateEmailIdentityPolicyPathParams = /** @class */ (function (_super) {
    __extends(CreateEmailIdentityPolicyPathParams, _super);
    function CreateEmailIdentityPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmailIdentity" }),
        __metadata("design:type", String)
    ], CreateEmailIdentityPolicyPathParams.prototype, "emailIdentity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PolicyName" }),
        __metadata("design:type", String)
    ], CreateEmailIdentityPolicyPathParams.prototype, "policyName", void 0);
    return CreateEmailIdentityPolicyPathParams;
}(SpeakeasyBase));
export { CreateEmailIdentityPolicyPathParams };
var CreateEmailIdentityPolicyHeaders = /** @class */ (function (_super) {
    __extends(CreateEmailIdentityPolicyHeaders, _super);
    function CreateEmailIdentityPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateEmailIdentityPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateEmailIdentityPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateEmailIdentityPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateEmailIdentityPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateEmailIdentityPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateEmailIdentityPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateEmailIdentityPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateEmailIdentityPolicyHeaders;
}(SpeakeasyBase));
export { CreateEmailIdentityPolicyHeaders };
var CreateEmailIdentityPolicyRequestBody = /** @class */ (function (_super) {
    __extends(CreateEmailIdentityPolicyRequestBody, _super);
    function CreateEmailIdentityPolicyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Policy" }),
        __metadata("design:type", String)
    ], CreateEmailIdentityPolicyRequestBody.prototype, "policy", void 0);
    return CreateEmailIdentityPolicyRequestBody;
}(SpeakeasyBase));
export { CreateEmailIdentityPolicyRequestBody };
var CreateEmailIdentityPolicyRequest = /** @class */ (function (_super) {
    __extends(CreateEmailIdentityPolicyRequest, _super);
    function CreateEmailIdentityPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateEmailIdentityPolicyPathParams)
    ], CreateEmailIdentityPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateEmailIdentityPolicyHeaders)
    ], CreateEmailIdentityPolicyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateEmailIdentityPolicyRequestBody)
    ], CreateEmailIdentityPolicyRequest.prototype, "request", void 0);
    return CreateEmailIdentityPolicyRequest;
}(SpeakeasyBase));
export { CreateEmailIdentityPolicyRequest };
var CreateEmailIdentityPolicyResponse = /** @class */ (function (_super) {
    __extends(CreateEmailIdentityPolicyResponse, _super);
    function CreateEmailIdentityPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateEmailIdentityPolicyResponse.prototype, "alreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateEmailIdentityPolicyResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateEmailIdentityPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateEmailIdentityPolicyResponse.prototype, "createEmailIdentityPolicyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateEmailIdentityPolicyResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateEmailIdentityPolicyResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateEmailIdentityPolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateEmailIdentityPolicyResponse.prototype, "tooManyRequestsException", void 0);
    return CreateEmailIdentityPolicyResponse;
}(SpeakeasyBase));
export { CreateEmailIdentityPolicyResponse };
