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
export var DescribeEmergencyContactSettingsXAmzTargetEnum;
(function (DescribeEmergencyContactSettingsXAmzTargetEnum) {
    DescribeEmergencyContactSettingsXAmzTargetEnum["AwsShield20160616DescribeEmergencyContactSettings"] = "AWSShield_20160616.DescribeEmergencyContactSettings";
})(DescribeEmergencyContactSettingsXAmzTargetEnum || (DescribeEmergencyContactSettingsXAmzTargetEnum = {}));
var DescribeEmergencyContactSettingsHeaders = /** @class */ (function (_super) {
    __extends(DescribeEmergencyContactSettingsHeaders, _super);
    function DescribeEmergencyContactSettingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeEmergencyContactSettingsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeEmergencyContactSettingsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeEmergencyContactSettingsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeEmergencyContactSettingsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeEmergencyContactSettingsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeEmergencyContactSettingsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeEmergencyContactSettingsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeEmergencyContactSettingsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeEmergencyContactSettingsHeaders;
}(SpeakeasyBase));
export { DescribeEmergencyContactSettingsHeaders };
var DescribeEmergencyContactSettingsRequest = /** @class */ (function (_super) {
    __extends(DescribeEmergencyContactSettingsRequest, _super);
    function DescribeEmergencyContactSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeEmergencyContactSettingsHeaders)
    ], DescribeEmergencyContactSettingsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], DescribeEmergencyContactSettingsRequest.prototype, "request", void 0);
    return DescribeEmergencyContactSettingsRequest;
}(SpeakeasyBase));
export { DescribeEmergencyContactSettingsRequest };
var DescribeEmergencyContactSettingsResponse = /** @class */ (function (_super) {
    __extends(DescribeEmergencyContactSettingsResponse, _super);
    function DescribeEmergencyContactSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeEmergencyContactSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeEmergencyContactSettingsResponse)
    ], DescribeEmergencyContactSettingsResponse.prototype, "describeEmergencyContactSettingsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeEmergencyContactSettingsResponse.prototype, "internalErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeEmergencyContactSettingsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeEmergencyContactSettingsResponse.prototype, "statusCode", void 0);
    return DescribeEmergencyContactSettingsResponse;
}(SpeakeasyBase));
export { DescribeEmergencyContactSettingsResponse };
