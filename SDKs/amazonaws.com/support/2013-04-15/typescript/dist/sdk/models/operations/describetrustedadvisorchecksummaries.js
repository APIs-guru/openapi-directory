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
export var DescribeTrustedAdvisorCheckSummariesXAmzTargetEnum;
(function (DescribeTrustedAdvisorCheckSummariesXAmzTargetEnum) {
    DescribeTrustedAdvisorCheckSummariesXAmzTargetEnum["AwsSupport20130415DescribeTrustedAdvisorCheckSummaries"] = "AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries";
})(DescribeTrustedAdvisorCheckSummariesXAmzTargetEnum || (DescribeTrustedAdvisorCheckSummariesXAmzTargetEnum = {}));
var DescribeTrustedAdvisorCheckSummariesHeaders = /** @class */ (function (_super) {
    __extends(DescribeTrustedAdvisorCheckSummariesHeaders, _super);
    function DescribeTrustedAdvisorCheckSummariesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeTrustedAdvisorCheckSummariesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeTrustedAdvisorCheckSummariesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeTrustedAdvisorCheckSummariesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeTrustedAdvisorCheckSummariesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeTrustedAdvisorCheckSummariesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeTrustedAdvisorCheckSummariesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeTrustedAdvisorCheckSummariesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeTrustedAdvisorCheckSummariesHeaders.prototype, "xAmzTarget", void 0);
    return DescribeTrustedAdvisorCheckSummariesHeaders;
}(SpeakeasyBase));
export { DescribeTrustedAdvisorCheckSummariesHeaders };
var DescribeTrustedAdvisorCheckSummariesRequest = /** @class */ (function (_super) {
    __extends(DescribeTrustedAdvisorCheckSummariesRequest, _super);
    function DescribeTrustedAdvisorCheckSummariesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeTrustedAdvisorCheckSummariesHeaders)
    ], DescribeTrustedAdvisorCheckSummariesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeTrustedAdvisorCheckSummariesRequest)
    ], DescribeTrustedAdvisorCheckSummariesRequest.prototype, "request", void 0);
    return DescribeTrustedAdvisorCheckSummariesRequest;
}(SpeakeasyBase));
export { DescribeTrustedAdvisorCheckSummariesRequest };
var DescribeTrustedAdvisorCheckSummariesResponse = /** @class */ (function (_super) {
    __extends(DescribeTrustedAdvisorCheckSummariesResponse, _super);
    function DescribeTrustedAdvisorCheckSummariesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeTrustedAdvisorCheckSummariesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeTrustedAdvisorCheckSummariesResponse)
    ], DescribeTrustedAdvisorCheckSummariesResponse.prototype, "describeTrustedAdvisorCheckSummariesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeTrustedAdvisorCheckSummariesResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeTrustedAdvisorCheckSummariesResponse.prototype, "statusCode", void 0);
    return DescribeTrustedAdvisorCheckSummariesResponse;
}(SpeakeasyBase));
export { DescribeTrustedAdvisorCheckSummariesResponse };
