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
var DescribeEffectivePatchesForPatchBaselineQueryParams = /** @class */ (function (_super) {
    __extends(DescribeEffectivePatchesForPatchBaselineQueryParams, _super);
    function DescribeEffectivePatchesForPatchBaselineQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], DescribeEffectivePatchesForPatchBaselineQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeEffectivePatchesForPatchBaselineQueryParams.prototype, "nextToken", void 0);
    return DescribeEffectivePatchesForPatchBaselineQueryParams;
}(SpeakeasyBase));
export { DescribeEffectivePatchesForPatchBaselineQueryParams };
export var DescribeEffectivePatchesForPatchBaselineXAmzTargetEnum;
(function (DescribeEffectivePatchesForPatchBaselineXAmzTargetEnum) {
    DescribeEffectivePatchesForPatchBaselineXAmzTargetEnum["AmazonSsmDescribeEffectivePatchesForPatchBaseline"] = "AmazonSSM.DescribeEffectivePatchesForPatchBaseline";
})(DescribeEffectivePatchesForPatchBaselineXAmzTargetEnum || (DescribeEffectivePatchesForPatchBaselineXAmzTargetEnum = {}));
var DescribeEffectivePatchesForPatchBaselineHeaders = /** @class */ (function (_super) {
    __extends(DescribeEffectivePatchesForPatchBaselineHeaders, _super);
    function DescribeEffectivePatchesForPatchBaselineHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeEffectivePatchesForPatchBaselineHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeEffectivePatchesForPatchBaselineHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeEffectivePatchesForPatchBaselineHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeEffectivePatchesForPatchBaselineHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeEffectivePatchesForPatchBaselineHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeEffectivePatchesForPatchBaselineHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeEffectivePatchesForPatchBaselineHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeEffectivePatchesForPatchBaselineHeaders.prototype, "xAmzTarget", void 0);
    return DescribeEffectivePatchesForPatchBaselineHeaders;
}(SpeakeasyBase));
export { DescribeEffectivePatchesForPatchBaselineHeaders };
var DescribeEffectivePatchesForPatchBaselineRequest = /** @class */ (function (_super) {
    __extends(DescribeEffectivePatchesForPatchBaselineRequest, _super);
    function DescribeEffectivePatchesForPatchBaselineRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeEffectivePatchesForPatchBaselineQueryParams)
    ], DescribeEffectivePatchesForPatchBaselineRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeEffectivePatchesForPatchBaselineHeaders)
    ], DescribeEffectivePatchesForPatchBaselineRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeEffectivePatchesForPatchBaselineRequest)
    ], DescribeEffectivePatchesForPatchBaselineRequest.prototype, "request", void 0);
    return DescribeEffectivePatchesForPatchBaselineRequest;
}(SpeakeasyBase));
export { DescribeEffectivePatchesForPatchBaselineRequest };
var DescribeEffectivePatchesForPatchBaselineResponse = /** @class */ (function (_super) {
    __extends(DescribeEffectivePatchesForPatchBaselineResponse, _super);
    function DescribeEffectivePatchesForPatchBaselineResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeEffectivePatchesForPatchBaselineResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeEffectivePatchesForPatchBaselineResult)
    ], DescribeEffectivePatchesForPatchBaselineResponse.prototype, "describeEffectivePatchesForPatchBaselineResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeEffectivePatchesForPatchBaselineResponse.prototype, "doesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeEffectivePatchesForPatchBaselineResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeEffectivePatchesForPatchBaselineResponse.prototype, "invalidResourceId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeEffectivePatchesForPatchBaselineResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeEffectivePatchesForPatchBaselineResponse.prototype, "unsupportedOperatingSystem", void 0);
    return DescribeEffectivePatchesForPatchBaselineResponse;
}(SpeakeasyBase));
export { DescribeEffectivePatchesForPatchBaselineResponse };
