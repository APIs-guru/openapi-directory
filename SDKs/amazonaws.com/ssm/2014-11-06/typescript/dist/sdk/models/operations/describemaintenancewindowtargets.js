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
var DescribeMaintenanceWindowTargetsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeMaintenanceWindowTargetsQueryParams, _super);
    function DescribeMaintenanceWindowTargetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], DescribeMaintenanceWindowTargetsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeMaintenanceWindowTargetsQueryParams.prototype, "nextToken", void 0);
    return DescribeMaintenanceWindowTargetsQueryParams;
}(SpeakeasyBase));
export { DescribeMaintenanceWindowTargetsQueryParams };
export var DescribeMaintenanceWindowTargetsXAmzTargetEnum;
(function (DescribeMaintenanceWindowTargetsXAmzTargetEnum) {
    DescribeMaintenanceWindowTargetsXAmzTargetEnum["AmazonSsmDescribeMaintenanceWindowTargets"] = "AmazonSSM.DescribeMaintenanceWindowTargets";
})(DescribeMaintenanceWindowTargetsXAmzTargetEnum || (DescribeMaintenanceWindowTargetsXAmzTargetEnum = {}));
var DescribeMaintenanceWindowTargetsHeaders = /** @class */ (function (_super) {
    __extends(DescribeMaintenanceWindowTargetsHeaders, _super);
    function DescribeMaintenanceWindowTargetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeMaintenanceWindowTargetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeMaintenanceWindowTargetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeMaintenanceWindowTargetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeMaintenanceWindowTargetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeMaintenanceWindowTargetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeMaintenanceWindowTargetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeMaintenanceWindowTargetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeMaintenanceWindowTargetsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeMaintenanceWindowTargetsHeaders;
}(SpeakeasyBase));
export { DescribeMaintenanceWindowTargetsHeaders };
var DescribeMaintenanceWindowTargetsRequest = /** @class */ (function (_super) {
    __extends(DescribeMaintenanceWindowTargetsRequest, _super);
    function DescribeMaintenanceWindowTargetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeMaintenanceWindowTargetsQueryParams)
    ], DescribeMaintenanceWindowTargetsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeMaintenanceWindowTargetsHeaders)
    ], DescribeMaintenanceWindowTargetsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeMaintenanceWindowTargetsRequest)
    ], DescribeMaintenanceWindowTargetsRequest.prototype, "request", void 0);
    return DescribeMaintenanceWindowTargetsRequest;
}(SpeakeasyBase));
export { DescribeMaintenanceWindowTargetsRequest };
var DescribeMaintenanceWindowTargetsResponse = /** @class */ (function (_super) {
    __extends(DescribeMaintenanceWindowTargetsResponse, _super);
    function DescribeMaintenanceWindowTargetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeMaintenanceWindowTargetsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeMaintenanceWindowTargetsResult)
    ], DescribeMaintenanceWindowTargetsResponse.prototype, "describeMaintenanceWindowTargetsResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMaintenanceWindowTargetsResponse.prototype, "doesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMaintenanceWindowTargetsResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeMaintenanceWindowTargetsResponse.prototype, "statusCode", void 0);
    return DescribeMaintenanceWindowTargetsResponse;
}(SpeakeasyBase));
export { DescribeMaintenanceWindowTargetsResponse };
