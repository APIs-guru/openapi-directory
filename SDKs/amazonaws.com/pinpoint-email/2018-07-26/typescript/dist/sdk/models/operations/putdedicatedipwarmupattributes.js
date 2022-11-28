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
var PutDedicatedIpWarmupAttributesPathParams = /** @class */ (function (_super) {
    __extends(PutDedicatedIpWarmupAttributesPathParams, _super);
    function PutDedicatedIpWarmupAttributesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IP" }),
        __metadata("design:type", String)
    ], PutDedicatedIpWarmupAttributesPathParams.prototype, "ip", void 0);
    return PutDedicatedIpWarmupAttributesPathParams;
}(SpeakeasyBase));
export { PutDedicatedIpWarmupAttributesPathParams };
var PutDedicatedIpWarmupAttributesHeaders = /** @class */ (function (_super) {
    __extends(PutDedicatedIpWarmupAttributesHeaders, _super);
    function PutDedicatedIpWarmupAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutDedicatedIpWarmupAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutDedicatedIpWarmupAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutDedicatedIpWarmupAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutDedicatedIpWarmupAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutDedicatedIpWarmupAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutDedicatedIpWarmupAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutDedicatedIpWarmupAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutDedicatedIpWarmupAttributesHeaders;
}(SpeakeasyBase));
export { PutDedicatedIpWarmupAttributesHeaders };
var PutDedicatedIpWarmupAttributesRequestBody = /** @class */ (function (_super) {
    __extends(PutDedicatedIpWarmupAttributesRequestBody, _super);
    function PutDedicatedIpWarmupAttributesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WarmupPercentage" }),
        __metadata("design:type", Number)
    ], PutDedicatedIpWarmupAttributesRequestBody.prototype, "warmupPercentage", void 0);
    return PutDedicatedIpWarmupAttributesRequestBody;
}(SpeakeasyBase));
export { PutDedicatedIpWarmupAttributesRequestBody };
var PutDedicatedIpWarmupAttributesRequest = /** @class */ (function (_super) {
    __extends(PutDedicatedIpWarmupAttributesRequest, _super);
    function PutDedicatedIpWarmupAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDedicatedIpWarmupAttributesPathParams)
    ], PutDedicatedIpWarmupAttributesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDedicatedIpWarmupAttributesHeaders)
    ], PutDedicatedIpWarmupAttributesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutDedicatedIpWarmupAttributesRequestBody)
    ], PutDedicatedIpWarmupAttributesRequest.prototype, "request", void 0);
    return PutDedicatedIpWarmupAttributesRequest;
}(SpeakeasyBase));
export { PutDedicatedIpWarmupAttributesRequest };
var PutDedicatedIpWarmupAttributesResponse = /** @class */ (function (_super) {
    __extends(PutDedicatedIpWarmupAttributesResponse, _super);
    function PutDedicatedIpWarmupAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutDedicatedIpWarmupAttributesResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutDedicatedIpWarmupAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutDedicatedIpWarmupAttributesResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutDedicatedIpWarmupAttributesResponse.prototype, "putDedicatedIpWarmupAttributesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutDedicatedIpWarmupAttributesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutDedicatedIpWarmupAttributesResponse.prototype, "tooManyRequestsException", void 0);
    return PutDedicatedIpWarmupAttributesResponse;
}(SpeakeasyBase));
export { PutDedicatedIpWarmupAttributesResponse };
