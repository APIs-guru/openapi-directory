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
var DescribeEffectiveInstanceAssociationsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeEffectiveInstanceAssociationsQueryParams, _super);
    function DescribeEffectiveInstanceAssociationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], DescribeEffectiveInstanceAssociationsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeEffectiveInstanceAssociationsQueryParams.prototype, "nextToken", void 0);
    return DescribeEffectiveInstanceAssociationsQueryParams;
}(SpeakeasyBase));
export { DescribeEffectiveInstanceAssociationsQueryParams };
export var DescribeEffectiveInstanceAssociationsXAmzTargetEnum;
(function (DescribeEffectiveInstanceAssociationsXAmzTargetEnum) {
    DescribeEffectiveInstanceAssociationsXAmzTargetEnum["AmazonSsmDescribeEffectiveInstanceAssociations"] = "AmazonSSM.DescribeEffectiveInstanceAssociations";
})(DescribeEffectiveInstanceAssociationsXAmzTargetEnum || (DescribeEffectiveInstanceAssociationsXAmzTargetEnum = {}));
var DescribeEffectiveInstanceAssociationsHeaders = /** @class */ (function (_super) {
    __extends(DescribeEffectiveInstanceAssociationsHeaders, _super);
    function DescribeEffectiveInstanceAssociationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeEffectiveInstanceAssociationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeEffectiveInstanceAssociationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeEffectiveInstanceAssociationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeEffectiveInstanceAssociationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeEffectiveInstanceAssociationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeEffectiveInstanceAssociationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeEffectiveInstanceAssociationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeEffectiveInstanceAssociationsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeEffectiveInstanceAssociationsHeaders;
}(SpeakeasyBase));
export { DescribeEffectiveInstanceAssociationsHeaders };
var DescribeEffectiveInstanceAssociationsRequest = /** @class */ (function (_super) {
    __extends(DescribeEffectiveInstanceAssociationsRequest, _super);
    function DescribeEffectiveInstanceAssociationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeEffectiveInstanceAssociationsQueryParams)
    ], DescribeEffectiveInstanceAssociationsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeEffectiveInstanceAssociationsHeaders)
    ], DescribeEffectiveInstanceAssociationsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeEffectiveInstanceAssociationsRequest)
    ], DescribeEffectiveInstanceAssociationsRequest.prototype, "request", void 0);
    return DescribeEffectiveInstanceAssociationsRequest;
}(SpeakeasyBase));
export { DescribeEffectiveInstanceAssociationsRequest };
var DescribeEffectiveInstanceAssociationsResponse = /** @class */ (function (_super) {
    __extends(DescribeEffectiveInstanceAssociationsResponse, _super);
    function DescribeEffectiveInstanceAssociationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeEffectiveInstanceAssociationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeEffectiveInstanceAssociationsResult)
    ], DescribeEffectiveInstanceAssociationsResponse.prototype, "describeEffectiveInstanceAssociationsResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeEffectiveInstanceAssociationsResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeEffectiveInstanceAssociationsResponse.prototype, "invalidInstanceId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeEffectiveInstanceAssociationsResponse.prototype, "invalidNextToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeEffectiveInstanceAssociationsResponse.prototype, "statusCode", void 0);
    return DescribeEffectiveInstanceAssociationsResponse;
}(SpeakeasyBase));
export { DescribeEffectiveInstanceAssociationsResponse };
