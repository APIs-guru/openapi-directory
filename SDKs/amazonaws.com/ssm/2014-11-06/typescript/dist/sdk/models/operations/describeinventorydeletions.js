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
var DescribeInventoryDeletionsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeInventoryDeletionsQueryParams, _super);
    function DescribeInventoryDeletionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], DescribeInventoryDeletionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeInventoryDeletionsQueryParams.prototype, "nextToken", void 0);
    return DescribeInventoryDeletionsQueryParams;
}(SpeakeasyBase));
export { DescribeInventoryDeletionsQueryParams };
export var DescribeInventoryDeletionsXAmzTargetEnum;
(function (DescribeInventoryDeletionsXAmzTargetEnum) {
    DescribeInventoryDeletionsXAmzTargetEnum["AmazonSsmDescribeInventoryDeletions"] = "AmazonSSM.DescribeInventoryDeletions";
})(DescribeInventoryDeletionsXAmzTargetEnum || (DescribeInventoryDeletionsXAmzTargetEnum = {}));
var DescribeInventoryDeletionsHeaders = /** @class */ (function (_super) {
    __extends(DescribeInventoryDeletionsHeaders, _super);
    function DescribeInventoryDeletionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeInventoryDeletionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeInventoryDeletionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeInventoryDeletionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeInventoryDeletionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeInventoryDeletionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeInventoryDeletionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeInventoryDeletionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeInventoryDeletionsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeInventoryDeletionsHeaders;
}(SpeakeasyBase));
export { DescribeInventoryDeletionsHeaders };
var DescribeInventoryDeletionsRequest = /** @class */ (function (_super) {
    __extends(DescribeInventoryDeletionsRequest, _super);
    function DescribeInventoryDeletionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeInventoryDeletionsQueryParams)
    ], DescribeInventoryDeletionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeInventoryDeletionsHeaders)
    ], DescribeInventoryDeletionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeInventoryDeletionsRequest)
    ], DescribeInventoryDeletionsRequest.prototype, "request", void 0);
    return DescribeInventoryDeletionsRequest;
}(SpeakeasyBase));
export { DescribeInventoryDeletionsRequest };
var DescribeInventoryDeletionsResponse = /** @class */ (function (_super) {
    __extends(DescribeInventoryDeletionsResponse, _super);
    function DescribeInventoryDeletionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeInventoryDeletionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeInventoryDeletionsResult)
    ], DescribeInventoryDeletionsResponse.prototype, "describeInventoryDeletionsResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeInventoryDeletionsResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeInventoryDeletionsResponse.prototype, "invalidDeletionIdException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeInventoryDeletionsResponse.prototype, "invalidNextToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeInventoryDeletionsResponse.prototype, "statusCode", void 0);
    return DescribeInventoryDeletionsResponse;
}(SpeakeasyBase));
export { DescribeInventoryDeletionsResponse };
