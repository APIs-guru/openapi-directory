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
var DescribeInstancePatchStatesForPatchGroupQueryParams = /** @class */ (function (_super) {
    __extends(DescribeInstancePatchStatesForPatchGroupQueryParams, _super);
    function DescribeInstancePatchStatesForPatchGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], DescribeInstancePatchStatesForPatchGroupQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeInstancePatchStatesForPatchGroupQueryParams.prototype, "nextToken", void 0);
    return DescribeInstancePatchStatesForPatchGroupQueryParams;
}(SpeakeasyBase));
export { DescribeInstancePatchStatesForPatchGroupQueryParams };
export var DescribeInstancePatchStatesForPatchGroupXAmzTargetEnum;
(function (DescribeInstancePatchStatesForPatchGroupXAmzTargetEnum) {
    DescribeInstancePatchStatesForPatchGroupXAmzTargetEnum["AmazonSsmDescribeInstancePatchStatesForPatchGroup"] = "AmazonSSM.DescribeInstancePatchStatesForPatchGroup";
})(DescribeInstancePatchStatesForPatchGroupXAmzTargetEnum || (DescribeInstancePatchStatesForPatchGroupXAmzTargetEnum = {}));
var DescribeInstancePatchStatesForPatchGroupHeaders = /** @class */ (function (_super) {
    __extends(DescribeInstancePatchStatesForPatchGroupHeaders, _super);
    function DescribeInstancePatchStatesForPatchGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeInstancePatchStatesForPatchGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeInstancePatchStatesForPatchGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeInstancePatchStatesForPatchGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeInstancePatchStatesForPatchGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeInstancePatchStatesForPatchGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeInstancePatchStatesForPatchGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeInstancePatchStatesForPatchGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeInstancePatchStatesForPatchGroupHeaders.prototype, "xAmzTarget", void 0);
    return DescribeInstancePatchStatesForPatchGroupHeaders;
}(SpeakeasyBase));
export { DescribeInstancePatchStatesForPatchGroupHeaders };
var DescribeInstancePatchStatesForPatchGroupRequest = /** @class */ (function (_super) {
    __extends(DescribeInstancePatchStatesForPatchGroupRequest, _super);
    function DescribeInstancePatchStatesForPatchGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeInstancePatchStatesForPatchGroupQueryParams)
    ], DescribeInstancePatchStatesForPatchGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeInstancePatchStatesForPatchGroupHeaders)
    ], DescribeInstancePatchStatesForPatchGroupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeInstancePatchStatesForPatchGroupRequest)
    ], DescribeInstancePatchStatesForPatchGroupRequest.prototype, "request", void 0);
    return DescribeInstancePatchStatesForPatchGroupRequest;
}(SpeakeasyBase));
export { DescribeInstancePatchStatesForPatchGroupRequest };
var DescribeInstancePatchStatesForPatchGroupResponse = /** @class */ (function (_super) {
    __extends(DescribeInstancePatchStatesForPatchGroupResponse, _super);
    function DescribeInstancePatchStatesForPatchGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeInstancePatchStatesForPatchGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeInstancePatchStatesForPatchGroupResult)
    ], DescribeInstancePatchStatesForPatchGroupResponse.prototype, "describeInstancePatchStatesForPatchGroupResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeInstancePatchStatesForPatchGroupResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeInstancePatchStatesForPatchGroupResponse.prototype, "invalidFilter", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeInstancePatchStatesForPatchGroupResponse.prototype, "invalidNextToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeInstancePatchStatesForPatchGroupResponse.prototype, "statusCode", void 0);
    return DescribeInstancePatchStatesForPatchGroupResponse;
}(SpeakeasyBase));
export { DescribeInstancePatchStatesForPatchGroupResponse };
