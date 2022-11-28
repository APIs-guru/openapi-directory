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
var DescribeDeviceEc2InstancesPathParams = /** @class */ (function (_super) {
    __extends(DescribeDeviceEc2InstancesPathParams, _super);
    function DescribeDeviceEc2InstancesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=managedDeviceId" }),
        __metadata("design:type", String)
    ], DescribeDeviceEc2InstancesPathParams.prototype, "managedDeviceId", void 0);
    return DescribeDeviceEc2InstancesPathParams;
}(SpeakeasyBase));
export { DescribeDeviceEc2InstancesPathParams };
var DescribeDeviceEc2InstancesHeaders = /** @class */ (function (_super) {
    __extends(DescribeDeviceEc2InstancesHeaders, _super);
    function DescribeDeviceEc2InstancesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeDeviceEc2InstancesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeDeviceEc2InstancesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeDeviceEc2InstancesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeDeviceEc2InstancesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeDeviceEc2InstancesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeDeviceEc2InstancesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeDeviceEc2InstancesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeDeviceEc2InstancesHeaders;
}(SpeakeasyBase));
export { DescribeDeviceEc2InstancesHeaders };
var DescribeDeviceEc2InstancesRequestBody = /** @class */ (function (_super) {
    __extends(DescribeDeviceEc2InstancesRequestBody, _super);
    function DescribeDeviceEc2InstancesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceIds" }),
        __metadata("design:type", Array)
    ], DescribeDeviceEc2InstancesRequestBody.prototype, "instanceIds", void 0);
    return DescribeDeviceEc2InstancesRequestBody;
}(SpeakeasyBase));
export { DescribeDeviceEc2InstancesRequestBody };
var DescribeDeviceEc2InstancesRequest = /** @class */ (function (_super) {
    __extends(DescribeDeviceEc2InstancesRequest, _super);
    function DescribeDeviceEc2InstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeDeviceEc2InstancesPathParams)
    ], DescribeDeviceEc2InstancesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeDeviceEc2InstancesHeaders)
    ], DescribeDeviceEc2InstancesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DescribeDeviceEc2InstancesRequestBody)
    ], DescribeDeviceEc2InstancesRequest.prototype, "request", void 0);
    return DescribeDeviceEc2InstancesRequest;
}(SpeakeasyBase));
export { DescribeDeviceEc2InstancesRequest };
var DescribeDeviceEc2InstancesResponse = /** @class */ (function (_super) {
    __extends(DescribeDeviceEc2InstancesResponse, _super);
    function DescribeDeviceEc2InstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeDeviceEc2InstancesResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeDeviceEc2InstancesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeDeviceEc2Output)
    ], DescribeDeviceEc2InstancesResponse.prototype, "describeDeviceEc2Output", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeDeviceEc2InstancesResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeDeviceEc2InstancesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeDeviceEc2InstancesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeDeviceEc2InstancesResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeDeviceEc2InstancesResponse.prototype, "validationException", void 0);
    return DescribeDeviceEc2InstancesResponse;
}(SpeakeasyBase));
export { DescribeDeviceEc2InstancesResponse };
