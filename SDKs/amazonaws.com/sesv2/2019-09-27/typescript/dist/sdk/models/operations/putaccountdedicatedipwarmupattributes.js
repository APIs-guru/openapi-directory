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
var PutAccountDedicatedIpWarmupAttributesHeaders = /** @class */ (function (_super) {
    __extends(PutAccountDedicatedIpWarmupAttributesHeaders, _super);
    function PutAccountDedicatedIpWarmupAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutAccountDedicatedIpWarmupAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutAccountDedicatedIpWarmupAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutAccountDedicatedIpWarmupAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutAccountDedicatedIpWarmupAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutAccountDedicatedIpWarmupAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutAccountDedicatedIpWarmupAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutAccountDedicatedIpWarmupAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutAccountDedicatedIpWarmupAttributesHeaders;
}(SpeakeasyBase));
export { PutAccountDedicatedIpWarmupAttributesHeaders };
var PutAccountDedicatedIpWarmupAttributesRequestBody = /** @class */ (function (_super) {
    __extends(PutAccountDedicatedIpWarmupAttributesRequestBody, _super);
    function PutAccountDedicatedIpWarmupAttributesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoWarmupEnabled" }),
        __metadata("design:type", Boolean)
    ], PutAccountDedicatedIpWarmupAttributesRequestBody.prototype, "autoWarmupEnabled", void 0);
    return PutAccountDedicatedIpWarmupAttributesRequestBody;
}(SpeakeasyBase));
export { PutAccountDedicatedIpWarmupAttributesRequestBody };
var PutAccountDedicatedIpWarmupAttributesRequest = /** @class */ (function (_super) {
    __extends(PutAccountDedicatedIpWarmupAttributesRequest, _super);
    function PutAccountDedicatedIpWarmupAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAccountDedicatedIpWarmupAttributesHeaders)
    ], PutAccountDedicatedIpWarmupAttributesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutAccountDedicatedIpWarmupAttributesRequestBody)
    ], PutAccountDedicatedIpWarmupAttributesRequest.prototype, "request", void 0);
    return PutAccountDedicatedIpWarmupAttributesRequest;
}(SpeakeasyBase));
export { PutAccountDedicatedIpWarmupAttributesRequest };
var PutAccountDedicatedIpWarmupAttributesResponse = /** @class */ (function (_super) {
    __extends(PutAccountDedicatedIpWarmupAttributesResponse, _super);
    function PutAccountDedicatedIpWarmupAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutAccountDedicatedIpWarmupAttributesResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutAccountDedicatedIpWarmupAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutAccountDedicatedIpWarmupAttributesResponse.prototype, "putAccountDedicatedIpWarmupAttributesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutAccountDedicatedIpWarmupAttributesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutAccountDedicatedIpWarmupAttributesResponse.prototype, "tooManyRequestsException", void 0);
    return PutAccountDedicatedIpWarmupAttributesResponse;
}(SpeakeasyBase));
export { PutAccountDedicatedIpWarmupAttributesResponse };
