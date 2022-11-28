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
var DescribeBatchPredictionsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeBatchPredictionsQueryParams, _super);
    function DescribeBatchPredictionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" }),
        __metadata("design:type", String)
    ], DescribeBatchPredictionsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeBatchPredictionsQueryParams.prototype, "nextToken", void 0);
    return DescribeBatchPredictionsQueryParams;
}(SpeakeasyBase));
export { DescribeBatchPredictionsQueryParams };
export var DescribeBatchPredictionsXAmzTargetEnum;
(function (DescribeBatchPredictionsXAmzTargetEnum) {
    DescribeBatchPredictionsXAmzTargetEnum["AmazonMl20141212DescribeBatchPredictions"] = "AmazonML_20141212.DescribeBatchPredictions";
})(DescribeBatchPredictionsXAmzTargetEnum || (DescribeBatchPredictionsXAmzTargetEnum = {}));
var DescribeBatchPredictionsHeaders = /** @class */ (function (_super) {
    __extends(DescribeBatchPredictionsHeaders, _super);
    function DescribeBatchPredictionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeBatchPredictionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeBatchPredictionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeBatchPredictionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeBatchPredictionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeBatchPredictionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeBatchPredictionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeBatchPredictionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeBatchPredictionsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeBatchPredictionsHeaders;
}(SpeakeasyBase));
export { DescribeBatchPredictionsHeaders };
var DescribeBatchPredictionsRequest = /** @class */ (function (_super) {
    __extends(DescribeBatchPredictionsRequest, _super);
    function DescribeBatchPredictionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeBatchPredictionsQueryParams)
    ], DescribeBatchPredictionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeBatchPredictionsHeaders)
    ], DescribeBatchPredictionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeBatchPredictionsInput)
    ], DescribeBatchPredictionsRequest.prototype, "request", void 0);
    return DescribeBatchPredictionsRequest;
}(SpeakeasyBase));
export { DescribeBatchPredictionsRequest };
var DescribeBatchPredictionsResponse = /** @class */ (function (_super) {
    __extends(DescribeBatchPredictionsResponse, _super);
    function DescribeBatchPredictionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeBatchPredictionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeBatchPredictionsOutput)
    ], DescribeBatchPredictionsResponse.prototype, "describeBatchPredictionsOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeBatchPredictionsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeBatchPredictionsResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeBatchPredictionsResponse.prototype, "statusCode", void 0);
    return DescribeBatchPredictionsResponse;
}(SpeakeasyBase));
export { DescribeBatchPredictionsResponse };
