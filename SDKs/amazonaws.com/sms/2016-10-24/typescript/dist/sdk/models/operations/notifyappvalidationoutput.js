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
export var NotifyAppValidationOutputXAmzTargetEnum;
(function (NotifyAppValidationOutputXAmzTargetEnum) {
    NotifyAppValidationOutputXAmzTargetEnum["AwsServerMigrationServiceV20161024NotifyAppValidationOutput"] = "AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput";
})(NotifyAppValidationOutputXAmzTargetEnum || (NotifyAppValidationOutputXAmzTargetEnum = {}));
var NotifyAppValidationOutputHeaders = /** @class */ (function (_super) {
    __extends(NotifyAppValidationOutputHeaders, _super);
    function NotifyAppValidationOutputHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], NotifyAppValidationOutputHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], NotifyAppValidationOutputHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], NotifyAppValidationOutputHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], NotifyAppValidationOutputHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], NotifyAppValidationOutputHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], NotifyAppValidationOutputHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], NotifyAppValidationOutputHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], NotifyAppValidationOutputHeaders.prototype, "xAmzTarget", void 0);
    return NotifyAppValidationOutputHeaders;
}(SpeakeasyBase));
export { NotifyAppValidationOutputHeaders };
var NotifyAppValidationOutputRequest = /** @class */ (function (_super) {
    __extends(NotifyAppValidationOutputRequest, _super);
    function NotifyAppValidationOutputRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotifyAppValidationOutputHeaders)
    ], NotifyAppValidationOutputRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.NotifyAppValidationOutputRequest)
    ], NotifyAppValidationOutputRequest.prototype, "request", void 0);
    return NotifyAppValidationOutputRequest;
}(SpeakeasyBase));
export { NotifyAppValidationOutputRequest };
var NotifyAppValidationOutputResponse = /** @class */ (function (_super) {
    __extends(NotifyAppValidationOutputResponse, _super);
    function NotifyAppValidationOutputResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NotifyAppValidationOutputResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], NotifyAppValidationOutputResponse.prototype, "internalError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], NotifyAppValidationOutputResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], NotifyAppValidationOutputResponse.prototype, "missingRequiredParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], NotifyAppValidationOutputResponse.prototype, "notifyAppValidationOutputResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], NotifyAppValidationOutputResponse.prototype, "operationNotPermittedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NotifyAppValidationOutputResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], NotifyAppValidationOutputResponse.prototype, "unauthorizedOperationException", void 0);
    return NotifyAppValidationOutputResponse;
}(SpeakeasyBase));
export { NotifyAppValidationOutputResponse };
