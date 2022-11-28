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
var PutDedicatedIpInPoolPathParams = /** @class */ (function (_super) {
    __extends(PutDedicatedIpInPoolPathParams, _super);
    function PutDedicatedIpInPoolPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IP" }),
        __metadata("design:type", String)
    ], PutDedicatedIpInPoolPathParams.prototype, "ip", void 0);
    return PutDedicatedIpInPoolPathParams;
}(SpeakeasyBase));
export { PutDedicatedIpInPoolPathParams };
var PutDedicatedIpInPoolHeaders = /** @class */ (function (_super) {
    __extends(PutDedicatedIpInPoolHeaders, _super);
    function PutDedicatedIpInPoolHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutDedicatedIpInPoolHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutDedicatedIpInPoolHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutDedicatedIpInPoolHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutDedicatedIpInPoolHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutDedicatedIpInPoolHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutDedicatedIpInPoolHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutDedicatedIpInPoolHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutDedicatedIpInPoolHeaders;
}(SpeakeasyBase));
export { PutDedicatedIpInPoolHeaders };
var PutDedicatedIpInPoolRequestBody = /** @class */ (function (_super) {
    __extends(PutDedicatedIpInPoolRequestBody, _super);
    function PutDedicatedIpInPoolRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationPoolName" }),
        __metadata("design:type", String)
    ], PutDedicatedIpInPoolRequestBody.prototype, "destinationPoolName", void 0);
    return PutDedicatedIpInPoolRequestBody;
}(SpeakeasyBase));
export { PutDedicatedIpInPoolRequestBody };
var PutDedicatedIpInPoolRequest = /** @class */ (function (_super) {
    __extends(PutDedicatedIpInPoolRequest, _super);
    function PutDedicatedIpInPoolRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDedicatedIpInPoolPathParams)
    ], PutDedicatedIpInPoolRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDedicatedIpInPoolHeaders)
    ], PutDedicatedIpInPoolRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutDedicatedIpInPoolRequestBody)
    ], PutDedicatedIpInPoolRequest.prototype, "request", void 0);
    return PutDedicatedIpInPoolRequest;
}(SpeakeasyBase));
export { PutDedicatedIpInPoolRequest };
var PutDedicatedIpInPoolResponse = /** @class */ (function (_super) {
    __extends(PutDedicatedIpInPoolResponse, _super);
    function PutDedicatedIpInPoolResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutDedicatedIpInPoolResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutDedicatedIpInPoolResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutDedicatedIpInPoolResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutDedicatedIpInPoolResponse.prototype, "putDedicatedIpInPoolResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutDedicatedIpInPoolResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutDedicatedIpInPoolResponse.prototype, "tooManyRequestsException", void 0);
    return PutDedicatedIpInPoolResponse;
}(SpeakeasyBase));
export { PutDedicatedIpInPoolResponse };
