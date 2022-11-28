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
export var DescribeHyperParameterTuningJobXAmzTargetEnum;
(function (DescribeHyperParameterTuningJobXAmzTargetEnum) {
    DescribeHyperParameterTuningJobXAmzTargetEnum["SageMakerDescribeHyperParameterTuningJob"] = "SageMaker.DescribeHyperParameterTuningJob";
})(DescribeHyperParameterTuningJobXAmzTargetEnum || (DescribeHyperParameterTuningJobXAmzTargetEnum = {}));
var DescribeHyperParameterTuningJobHeaders = /** @class */ (function (_super) {
    __extends(DescribeHyperParameterTuningJobHeaders, _super);
    function DescribeHyperParameterTuningJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeHyperParameterTuningJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeHyperParameterTuningJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeHyperParameterTuningJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeHyperParameterTuningJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeHyperParameterTuningJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeHyperParameterTuningJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeHyperParameterTuningJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeHyperParameterTuningJobHeaders.prototype, "xAmzTarget", void 0);
    return DescribeHyperParameterTuningJobHeaders;
}(SpeakeasyBase));
export { DescribeHyperParameterTuningJobHeaders };
var DescribeHyperParameterTuningJobRequest = /** @class */ (function (_super) {
    __extends(DescribeHyperParameterTuningJobRequest, _super);
    function DescribeHyperParameterTuningJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeHyperParameterTuningJobHeaders)
    ], DescribeHyperParameterTuningJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeHyperParameterTuningJobRequest)
    ], DescribeHyperParameterTuningJobRequest.prototype, "request", void 0);
    return DescribeHyperParameterTuningJobRequest;
}(SpeakeasyBase));
export { DescribeHyperParameterTuningJobRequest };
var DescribeHyperParameterTuningJobResponse = /** @class */ (function (_super) {
    __extends(DescribeHyperParameterTuningJobResponse, _super);
    function DescribeHyperParameterTuningJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeHyperParameterTuningJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeHyperParameterTuningJobResponse)
    ], DescribeHyperParameterTuningJobResponse.prototype, "describeHyperParameterTuningJobResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeHyperParameterTuningJobResponse.prototype, "resourceNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeHyperParameterTuningJobResponse.prototype, "statusCode", void 0);
    return DescribeHyperParameterTuningJobResponse;
}(SpeakeasyBase));
export { DescribeHyperParameterTuningJobResponse };
