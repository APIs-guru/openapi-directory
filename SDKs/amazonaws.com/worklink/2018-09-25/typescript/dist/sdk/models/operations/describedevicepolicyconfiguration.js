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
var DescribeDevicePolicyConfigurationHeaders = /** @class */ (function (_super) {
    __extends(DescribeDevicePolicyConfigurationHeaders, _super);
    function DescribeDevicePolicyConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeDevicePolicyConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeDevicePolicyConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeDevicePolicyConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeDevicePolicyConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeDevicePolicyConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeDevicePolicyConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeDevicePolicyConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeDevicePolicyConfigurationHeaders;
}(SpeakeasyBase));
export { DescribeDevicePolicyConfigurationHeaders };
var DescribeDevicePolicyConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(DescribeDevicePolicyConfigurationRequestBody, _super);
    function DescribeDevicePolicyConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetArn" }),
        __metadata("design:type", String)
    ], DescribeDevicePolicyConfigurationRequestBody.prototype, "fleetArn", void 0);
    return DescribeDevicePolicyConfigurationRequestBody;
}(SpeakeasyBase));
export { DescribeDevicePolicyConfigurationRequestBody };
var DescribeDevicePolicyConfigurationRequest = /** @class */ (function (_super) {
    __extends(DescribeDevicePolicyConfigurationRequest, _super);
    function DescribeDevicePolicyConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeDevicePolicyConfigurationHeaders)
    ], DescribeDevicePolicyConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DescribeDevicePolicyConfigurationRequestBody)
    ], DescribeDevicePolicyConfigurationRequest.prototype, "request", void 0);
    return DescribeDevicePolicyConfigurationRequest;
}(SpeakeasyBase));
export { DescribeDevicePolicyConfigurationRequest };
var DescribeDevicePolicyConfigurationResponse = /** @class */ (function (_super) {
    __extends(DescribeDevicePolicyConfigurationResponse, _super);
    function DescribeDevicePolicyConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeDevicePolicyConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeDevicePolicyConfigurationResponse)
    ], DescribeDevicePolicyConfigurationResponse.prototype, "describeDevicePolicyConfigurationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeDevicePolicyConfigurationResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeDevicePolicyConfigurationResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeDevicePolicyConfigurationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeDevicePolicyConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeDevicePolicyConfigurationResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeDevicePolicyConfigurationResponse.prototype, "unauthorizedException", void 0);
    return DescribeDevicePolicyConfigurationResponse;
}(SpeakeasyBase));
export { DescribeDevicePolicyConfigurationResponse };
