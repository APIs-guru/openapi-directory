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
var CreateStreamingSessionPathParams = /** @class */ (function (_super) {
    __extends(CreateStreamingSessionPathParams, _super);
    function CreateStreamingSessionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=studioId" }),
        __metadata("design:type", String)
    ], CreateStreamingSessionPathParams.prototype, "studioId", void 0);
    return CreateStreamingSessionPathParams;
}(SpeakeasyBase));
export { CreateStreamingSessionPathParams };
var CreateStreamingSessionHeaders = /** @class */ (function (_super) {
    __extends(CreateStreamingSessionHeaders, _super);
    function CreateStreamingSessionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateStreamingSessionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Client-Token" }),
        __metadata("design:type", String)
    ], CreateStreamingSessionHeaders.prototype, "xAmzClientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateStreamingSessionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateStreamingSessionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateStreamingSessionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateStreamingSessionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateStreamingSessionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateStreamingSessionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateStreamingSessionHeaders;
}(SpeakeasyBase));
export { CreateStreamingSessionHeaders };
export var CreateStreamingSessionRequestBodyEc2InstanceTypeEnum;
(function (CreateStreamingSessionRequestBodyEc2InstanceTypeEnum) {
    CreateStreamingSessionRequestBodyEc2InstanceTypeEnum["G4dnXlarge"] = "g4dn.xlarge";
    CreateStreamingSessionRequestBodyEc2InstanceTypeEnum["G4dn2xlarge"] = "g4dn.2xlarge";
    CreateStreamingSessionRequestBodyEc2InstanceTypeEnum["G4dn4xlarge"] = "g4dn.4xlarge";
    CreateStreamingSessionRequestBodyEc2InstanceTypeEnum["G4dn8xlarge"] = "g4dn.8xlarge";
    CreateStreamingSessionRequestBodyEc2InstanceTypeEnum["G4dn12xlarge"] = "g4dn.12xlarge";
    CreateStreamingSessionRequestBodyEc2InstanceTypeEnum["G4dn16xlarge"] = "g4dn.16xlarge";
})(CreateStreamingSessionRequestBodyEc2InstanceTypeEnum || (CreateStreamingSessionRequestBodyEc2InstanceTypeEnum = {}));
var CreateStreamingSessionRequestBody = /** @class */ (function (_super) {
    __extends(CreateStreamingSessionRequestBody, _super);
    function CreateStreamingSessionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ec2InstanceType" }),
        __metadata("design:type", String)
    ], CreateStreamingSessionRequestBody.prototype, "ec2InstanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchProfileId" }),
        __metadata("design:type", String)
    ], CreateStreamingSessionRequestBody.prototype, "launchProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownedBy" }),
        __metadata("design:type", String)
    ], CreateStreamingSessionRequestBody.prototype, "ownedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streamingImageId" }),
        __metadata("design:type", String)
    ], CreateStreamingSessionRequestBody.prototype, "streamingImageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateStreamingSessionRequestBody.prototype, "tags", void 0);
    return CreateStreamingSessionRequestBody;
}(SpeakeasyBase));
export { CreateStreamingSessionRequestBody };
var CreateStreamingSessionRequest = /** @class */ (function (_super) {
    __extends(CreateStreamingSessionRequest, _super);
    function CreateStreamingSessionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateStreamingSessionPathParams)
    ], CreateStreamingSessionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateStreamingSessionHeaders)
    ], CreateStreamingSessionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateStreamingSessionRequestBody)
    ], CreateStreamingSessionRequest.prototype, "request", void 0);
    return CreateStreamingSessionRequest;
}(SpeakeasyBase));
export { CreateStreamingSessionRequest };
var CreateStreamingSessionResponse = /** @class */ (function (_super) {
    __extends(CreateStreamingSessionResponse, _super);
    function CreateStreamingSessionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStreamingSessionResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStreamingSessionResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateStreamingSessionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateStreamingSessionResponse)
    ], CreateStreamingSessionResponse.prototype, "createStreamingSessionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStreamingSessionResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStreamingSessionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStreamingSessionResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateStreamingSessionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStreamingSessionResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStreamingSessionResponse.prototype, "validationException", void 0);
    return CreateStreamingSessionResponse;
}(SpeakeasyBase));
export { CreateStreamingSessionResponse };
