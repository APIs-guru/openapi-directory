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
var PutLoggingOptionsHeaders = /** @class */ (function (_super) {
    __extends(PutLoggingOptionsHeaders, _super);
    function PutLoggingOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutLoggingOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutLoggingOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutLoggingOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutLoggingOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutLoggingOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutLoggingOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutLoggingOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutLoggingOptionsHeaders;
}(SpeakeasyBase));
export { PutLoggingOptionsHeaders };
// PutLoggingOptionsRequestBodyLoggingOptions
/**
 * Contains logging options.
**/
var PutLoggingOptionsRequestBodyLoggingOptions = /** @class */ (function (_super) {
    __extends(PutLoggingOptionsRequestBodyLoggingOptions, _super);
    function PutLoggingOptionsRequestBodyLoggingOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=level" }),
        __metadata("design:type", String)
    ], PutLoggingOptionsRequestBodyLoggingOptions.prototype, "level", void 0);
    return PutLoggingOptionsRequestBodyLoggingOptions;
}(SpeakeasyBase));
export { PutLoggingOptionsRequestBodyLoggingOptions };
var PutLoggingOptionsRequestBody = /** @class */ (function (_super) {
    __extends(PutLoggingOptionsRequestBody, _super);
    function PutLoggingOptionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loggingOptions" }),
        __metadata("design:type", PutLoggingOptionsRequestBodyLoggingOptions)
    ], PutLoggingOptionsRequestBody.prototype, "loggingOptions", void 0);
    return PutLoggingOptionsRequestBody;
}(SpeakeasyBase));
export { PutLoggingOptionsRequestBody };
var PutLoggingOptionsRequest = /** @class */ (function (_super) {
    __extends(PutLoggingOptionsRequest, _super);
    function PutLoggingOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutLoggingOptionsHeaders)
    ], PutLoggingOptionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutLoggingOptionsRequestBody)
    ], PutLoggingOptionsRequest.prototype, "request", void 0);
    return PutLoggingOptionsRequest;
}(SpeakeasyBase));
export { PutLoggingOptionsRequest };
var PutLoggingOptionsResponse = /** @class */ (function (_super) {
    __extends(PutLoggingOptionsResponse, _super);
    function PutLoggingOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutLoggingOptionsResponse.prototype, "conflictingOperationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutLoggingOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutLoggingOptionsResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutLoggingOptionsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutLoggingOptionsResponse.prototype, "putLoggingOptionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutLoggingOptionsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutLoggingOptionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutLoggingOptionsResponse.prototype, "throttlingException", void 0);
    return PutLoggingOptionsResponse;
}(SpeakeasyBase));
export { PutLoggingOptionsResponse };
