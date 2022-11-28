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
export var DescribeTableXAmzTargetEnum;
(function (DescribeTableXAmzTargetEnum) {
    DescribeTableXAmzTargetEnum["Timestream20181101DescribeTable"] = "Timestream_20181101.DescribeTable";
})(DescribeTableXAmzTargetEnum || (DescribeTableXAmzTargetEnum = {}));
var DescribeTableHeaders = /** @class */ (function (_super) {
    __extends(DescribeTableHeaders, _super);
    function DescribeTableHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeTableHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeTableHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeTableHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeTableHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeTableHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeTableHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeTableHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeTableHeaders.prototype, "xAmzTarget", void 0);
    return DescribeTableHeaders;
}(SpeakeasyBase));
export { DescribeTableHeaders };
var DescribeTableRequest = /** @class */ (function (_super) {
    __extends(DescribeTableRequest, _super);
    function DescribeTableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeTableHeaders)
    ], DescribeTableRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeTableRequest)
    ], DescribeTableRequest.prototype, "request", void 0);
    return DescribeTableRequest;
}(SpeakeasyBase));
export { DescribeTableRequest };
var DescribeTableResponse = /** @class */ (function (_super) {
    __extends(DescribeTableResponse, _super);
    function DescribeTableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeTableResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeTableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeTableResponse)
    ], DescribeTableResponse.prototype, "describeTableResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeTableResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeTableResponse.prototype, "invalidEndpointException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeTableResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeTableResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeTableResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeTableResponse.prototype, "validationException", void 0);
    return DescribeTableResponse;
}(SpeakeasyBase));
export { DescribeTableResponse };
