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
var DescribeAssociationExecutionTargetsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeAssociationExecutionTargetsQueryParams, _super);
    function DescribeAssociationExecutionTargetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], DescribeAssociationExecutionTargetsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeAssociationExecutionTargetsQueryParams.prototype, "nextToken", void 0);
    return DescribeAssociationExecutionTargetsQueryParams;
}(SpeakeasyBase));
export { DescribeAssociationExecutionTargetsQueryParams };
export var DescribeAssociationExecutionTargetsXAmzTargetEnum;
(function (DescribeAssociationExecutionTargetsXAmzTargetEnum) {
    DescribeAssociationExecutionTargetsXAmzTargetEnum["AmazonSsmDescribeAssociationExecutionTargets"] = "AmazonSSM.DescribeAssociationExecutionTargets";
})(DescribeAssociationExecutionTargetsXAmzTargetEnum || (DescribeAssociationExecutionTargetsXAmzTargetEnum = {}));
var DescribeAssociationExecutionTargetsHeaders = /** @class */ (function (_super) {
    __extends(DescribeAssociationExecutionTargetsHeaders, _super);
    function DescribeAssociationExecutionTargetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeAssociationExecutionTargetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeAssociationExecutionTargetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeAssociationExecutionTargetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeAssociationExecutionTargetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeAssociationExecutionTargetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeAssociationExecutionTargetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeAssociationExecutionTargetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeAssociationExecutionTargetsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeAssociationExecutionTargetsHeaders;
}(SpeakeasyBase));
export { DescribeAssociationExecutionTargetsHeaders };
var DescribeAssociationExecutionTargetsRequest = /** @class */ (function (_super) {
    __extends(DescribeAssociationExecutionTargetsRequest, _super);
    function DescribeAssociationExecutionTargetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeAssociationExecutionTargetsQueryParams)
    ], DescribeAssociationExecutionTargetsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeAssociationExecutionTargetsHeaders)
    ], DescribeAssociationExecutionTargetsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeAssociationExecutionTargetsRequest)
    ], DescribeAssociationExecutionTargetsRequest.prototype, "request", void 0);
    return DescribeAssociationExecutionTargetsRequest;
}(SpeakeasyBase));
export { DescribeAssociationExecutionTargetsRequest };
var DescribeAssociationExecutionTargetsResponse = /** @class */ (function (_super) {
    __extends(DescribeAssociationExecutionTargetsResponse, _super);
    function DescribeAssociationExecutionTargetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAssociationExecutionTargetsResponse.prototype, "associationDoesNotExist", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAssociationExecutionTargetsResponse.prototype, "associationExecutionDoesNotExist", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeAssociationExecutionTargetsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeAssociationExecutionTargetsResult)
    ], DescribeAssociationExecutionTargetsResponse.prototype, "describeAssociationExecutionTargetsResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAssociationExecutionTargetsResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAssociationExecutionTargetsResponse.prototype, "invalidNextToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeAssociationExecutionTargetsResponse.prototype, "statusCode", void 0);
    return DescribeAssociationExecutionTargetsResponse;
}(SpeakeasyBase));
export { DescribeAssociationExecutionTargetsResponse };
