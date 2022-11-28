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
var DescribeAssociationExecutionsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeAssociationExecutionsQueryParams, _super);
    function DescribeAssociationExecutionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], DescribeAssociationExecutionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeAssociationExecutionsQueryParams.prototype, "nextToken", void 0);
    return DescribeAssociationExecutionsQueryParams;
}(SpeakeasyBase));
export { DescribeAssociationExecutionsQueryParams };
export var DescribeAssociationExecutionsXAmzTargetEnum;
(function (DescribeAssociationExecutionsXAmzTargetEnum) {
    DescribeAssociationExecutionsXAmzTargetEnum["AmazonSsmDescribeAssociationExecutions"] = "AmazonSSM.DescribeAssociationExecutions";
})(DescribeAssociationExecutionsXAmzTargetEnum || (DescribeAssociationExecutionsXAmzTargetEnum = {}));
var DescribeAssociationExecutionsHeaders = /** @class */ (function (_super) {
    __extends(DescribeAssociationExecutionsHeaders, _super);
    function DescribeAssociationExecutionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeAssociationExecutionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeAssociationExecutionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeAssociationExecutionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeAssociationExecutionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeAssociationExecutionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeAssociationExecutionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeAssociationExecutionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeAssociationExecutionsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeAssociationExecutionsHeaders;
}(SpeakeasyBase));
export { DescribeAssociationExecutionsHeaders };
var DescribeAssociationExecutionsRequest = /** @class */ (function (_super) {
    __extends(DescribeAssociationExecutionsRequest, _super);
    function DescribeAssociationExecutionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeAssociationExecutionsQueryParams)
    ], DescribeAssociationExecutionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeAssociationExecutionsHeaders)
    ], DescribeAssociationExecutionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeAssociationExecutionsRequest)
    ], DescribeAssociationExecutionsRequest.prototype, "request", void 0);
    return DescribeAssociationExecutionsRequest;
}(SpeakeasyBase));
export { DescribeAssociationExecutionsRequest };
var DescribeAssociationExecutionsResponse = /** @class */ (function (_super) {
    __extends(DescribeAssociationExecutionsResponse, _super);
    function DescribeAssociationExecutionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAssociationExecutionsResponse.prototype, "associationDoesNotExist", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeAssociationExecutionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeAssociationExecutionsResult)
    ], DescribeAssociationExecutionsResponse.prototype, "describeAssociationExecutionsResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAssociationExecutionsResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeAssociationExecutionsResponse.prototype, "invalidNextToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeAssociationExecutionsResponse.prototype, "statusCode", void 0);
    return DescribeAssociationExecutionsResponse;
}(SpeakeasyBase));
export { DescribeAssociationExecutionsResponse };
