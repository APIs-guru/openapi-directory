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
var DescribeMaintenanceWindowTasksQueryParams = /** @class */ (function (_super) {
    __extends(DescribeMaintenanceWindowTasksQueryParams, _super);
    function DescribeMaintenanceWindowTasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], DescribeMaintenanceWindowTasksQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeMaintenanceWindowTasksQueryParams.prototype, "nextToken", void 0);
    return DescribeMaintenanceWindowTasksQueryParams;
}(SpeakeasyBase));
export { DescribeMaintenanceWindowTasksQueryParams };
export var DescribeMaintenanceWindowTasksXAmzTargetEnum;
(function (DescribeMaintenanceWindowTasksXAmzTargetEnum) {
    DescribeMaintenanceWindowTasksXAmzTargetEnum["AmazonSsmDescribeMaintenanceWindowTasks"] = "AmazonSSM.DescribeMaintenanceWindowTasks";
})(DescribeMaintenanceWindowTasksXAmzTargetEnum || (DescribeMaintenanceWindowTasksXAmzTargetEnum = {}));
var DescribeMaintenanceWindowTasksHeaders = /** @class */ (function (_super) {
    __extends(DescribeMaintenanceWindowTasksHeaders, _super);
    function DescribeMaintenanceWindowTasksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeMaintenanceWindowTasksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeMaintenanceWindowTasksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeMaintenanceWindowTasksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeMaintenanceWindowTasksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeMaintenanceWindowTasksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeMaintenanceWindowTasksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeMaintenanceWindowTasksHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeMaintenanceWindowTasksHeaders.prototype, "xAmzTarget", void 0);
    return DescribeMaintenanceWindowTasksHeaders;
}(SpeakeasyBase));
export { DescribeMaintenanceWindowTasksHeaders };
var DescribeMaintenanceWindowTasksRequest = /** @class */ (function (_super) {
    __extends(DescribeMaintenanceWindowTasksRequest, _super);
    function DescribeMaintenanceWindowTasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeMaintenanceWindowTasksQueryParams)
    ], DescribeMaintenanceWindowTasksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeMaintenanceWindowTasksHeaders)
    ], DescribeMaintenanceWindowTasksRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeMaintenanceWindowTasksRequest)
    ], DescribeMaintenanceWindowTasksRequest.prototype, "request", void 0);
    return DescribeMaintenanceWindowTasksRequest;
}(SpeakeasyBase));
export { DescribeMaintenanceWindowTasksRequest };
var DescribeMaintenanceWindowTasksResponse = /** @class */ (function (_super) {
    __extends(DescribeMaintenanceWindowTasksResponse, _super);
    function DescribeMaintenanceWindowTasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeMaintenanceWindowTasksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeMaintenanceWindowTasksResult)
    ], DescribeMaintenanceWindowTasksResponse.prototype, "describeMaintenanceWindowTasksResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMaintenanceWindowTasksResponse.prototype, "doesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMaintenanceWindowTasksResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeMaintenanceWindowTasksResponse.prototype, "statusCode", void 0);
    return DescribeMaintenanceWindowTasksResponse;
}(SpeakeasyBase));
export { DescribeMaintenanceWindowTasksResponse };
