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
export var ListLicenseSpecificationsForResourceXAmzTargetEnum;
(function (ListLicenseSpecificationsForResourceXAmzTargetEnum) {
    ListLicenseSpecificationsForResourceXAmzTargetEnum["AwsLicenseManagerListLicenseSpecificationsForResource"] = "AWSLicenseManager.ListLicenseSpecificationsForResource";
})(ListLicenseSpecificationsForResourceXAmzTargetEnum || (ListLicenseSpecificationsForResourceXAmzTargetEnum = {}));
var ListLicenseSpecificationsForResourceHeaders = /** @class */ (function (_super) {
    __extends(ListLicenseSpecificationsForResourceHeaders, _super);
    function ListLicenseSpecificationsForResourceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListLicenseSpecificationsForResourceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListLicenseSpecificationsForResourceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListLicenseSpecificationsForResourceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListLicenseSpecificationsForResourceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListLicenseSpecificationsForResourceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListLicenseSpecificationsForResourceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListLicenseSpecificationsForResourceHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListLicenseSpecificationsForResourceHeaders.prototype, "xAmzTarget", void 0);
    return ListLicenseSpecificationsForResourceHeaders;
}(SpeakeasyBase));
export { ListLicenseSpecificationsForResourceHeaders };
var ListLicenseSpecificationsForResourceRequest = /** @class */ (function (_super) {
    __extends(ListLicenseSpecificationsForResourceRequest, _super);
    function ListLicenseSpecificationsForResourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListLicenseSpecificationsForResourceHeaders)
    ], ListLicenseSpecificationsForResourceRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListLicenseSpecificationsForResourceRequest)
    ], ListLicenseSpecificationsForResourceRequest.prototype, "request", void 0);
    return ListLicenseSpecificationsForResourceRequest;
}(SpeakeasyBase));
export { ListLicenseSpecificationsForResourceRequest };
var ListLicenseSpecificationsForResourceResponse = /** @class */ (function (_super) {
    __extends(ListLicenseSpecificationsForResourceResponse, _super);
    function ListLicenseSpecificationsForResourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListLicenseSpecificationsForResourceResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListLicenseSpecificationsForResourceResponse.prototype, "authorizationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListLicenseSpecificationsForResourceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListLicenseSpecificationsForResourceResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListLicenseSpecificationsForResourceResponse)
    ], ListLicenseSpecificationsForResourceResponse.prototype, "listLicenseSpecificationsForResourceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListLicenseSpecificationsForResourceResponse.prototype, "rateLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListLicenseSpecificationsForResourceResponse.prototype, "serverInternalException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListLicenseSpecificationsForResourceResponse.prototype, "statusCode", void 0);
    return ListLicenseSpecificationsForResourceResponse;
}(SpeakeasyBase));
export { ListLicenseSpecificationsForResourceResponse };
