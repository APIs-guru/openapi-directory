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
export var DescribeTimeBasedAutoScalingXAmzTargetEnum;
(function (DescribeTimeBasedAutoScalingXAmzTargetEnum) {
    DescribeTimeBasedAutoScalingXAmzTargetEnum["OpsWorks20130218DescribeTimeBasedAutoScaling"] = "OpsWorks_20130218.DescribeTimeBasedAutoScaling";
})(DescribeTimeBasedAutoScalingXAmzTargetEnum || (DescribeTimeBasedAutoScalingXAmzTargetEnum = {}));
var DescribeTimeBasedAutoScalingHeaders = /** @class */ (function (_super) {
    __extends(DescribeTimeBasedAutoScalingHeaders, _super);
    function DescribeTimeBasedAutoScalingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeTimeBasedAutoScalingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeTimeBasedAutoScalingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeTimeBasedAutoScalingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeTimeBasedAutoScalingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeTimeBasedAutoScalingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeTimeBasedAutoScalingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeTimeBasedAutoScalingHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeTimeBasedAutoScalingHeaders.prototype, "xAmzTarget", void 0);
    return DescribeTimeBasedAutoScalingHeaders;
}(SpeakeasyBase));
export { DescribeTimeBasedAutoScalingHeaders };
var DescribeTimeBasedAutoScalingRequest = /** @class */ (function (_super) {
    __extends(DescribeTimeBasedAutoScalingRequest, _super);
    function DescribeTimeBasedAutoScalingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeTimeBasedAutoScalingHeaders)
    ], DescribeTimeBasedAutoScalingRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeTimeBasedAutoScalingRequest)
    ], DescribeTimeBasedAutoScalingRequest.prototype, "request", void 0);
    return DescribeTimeBasedAutoScalingRequest;
}(SpeakeasyBase));
export { DescribeTimeBasedAutoScalingRequest };
var DescribeTimeBasedAutoScalingResponse = /** @class */ (function (_super) {
    __extends(DescribeTimeBasedAutoScalingResponse, _super);
    function DescribeTimeBasedAutoScalingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeTimeBasedAutoScalingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeTimeBasedAutoScalingResult)
    ], DescribeTimeBasedAutoScalingResponse.prototype, "describeTimeBasedAutoScalingResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeTimeBasedAutoScalingResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeTimeBasedAutoScalingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeTimeBasedAutoScalingResponse.prototype, "validationException", void 0);
    return DescribeTimeBasedAutoScalingResponse;
}(SpeakeasyBase));
export { DescribeTimeBasedAutoScalingResponse };
