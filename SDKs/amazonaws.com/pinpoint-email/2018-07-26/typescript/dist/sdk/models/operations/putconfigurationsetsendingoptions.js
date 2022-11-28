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
var PutConfigurationSetSendingOptionsPathParams = /** @class */ (function (_super) {
    __extends(PutConfigurationSetSendingOptionsPathParams, _super);
    function PutConfigurationSetSendingOptionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConfigurationSetName" }),
        __metadata("design:type", String)
    ], PutConfigurationSetSendingOptionsPathParams.prototype, "configurationSetName", void 0);
    return PutConfigurationSetSendingOptionsPathParams;
}(SpeakeasyBase));
export { PutConfigurationSetSendingOptionsPathParams };
var PutConfigurationSetSendingOptionsHeaders = /** @class */ (function (_super) {
    __extends(PutConfigurationSetSendingOptionsHeaders, _super);
    function PutConfigurationSetSendingOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutConfigurationSetSendingOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutConfigurationSetSendingOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutConfigurationSetSendingOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutConfigurationSetSendingOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutConfigurationSetSendingOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutConfigurationSetSendingOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutConfigurationSetSendingOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutConfigurationSetSendingOptionsHeaders;
}(SpeakeasyBase));
export { PutConfigurationSetSendingOptionsHeaders };
var PutConfigurationSetSendingOptionsRequestBody = /** @class */ (function (_super) {
    __extends(PutConfigurationSetSendingOptionsRequestBody, _super);
    function PutConfigurationSetSendingOptionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SendingEnabled" }),
        __metadata("design:type", Boolean)
    ], PutConfigurationSetSendingOptionsRequestBody.prototype, "sendingEnabled", void 0);
    return PutConfigurationSetSendingOptionsRequestBody;
}(SpeakeasyBase));
export { PutConfigurationSetSendingOptionsRequestBody };
var PutConfigurationSetSendingOptionsRequest = /** @class */ (function (_super) {
    __extends(PutConfigurationSetSendingOptionsRequest, _super);
    function PutConfigurationSetSendingOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutConfigurationSetSendingOptionsPathParams)
    ], PutConfigurationSetSendingOptionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutConfigurationSetSendingOptionsHeaders)
    ], PutConfigurationSetSendingOptionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutConfigurationSetSendingOptionsRequestBody)
    ], PutConfigurationSetSendingOptionsRequest.prototype, "request", void 0);
    return PutConfigurationSetSendingOptionsRequest;
}(SpeakeasyBase));
export { PutConfigurationSetSendingOptionsRequest };
var PutConfigurationSetSendingOptionsResponse = /** @class */ (function (_super) {
    __extends(PutConfigurationSetSendingOptionsResponse, _super);
    function PutConfigurationSetSendingOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutConfigurationSetSendingOptionsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutConfigurationSetSendingOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutConfigurationSetSendingOptionsResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutConfigurationSetSendingOptionsResponse.prototype, "putConfigurationSetSendingOptionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutConfigurationSetSendingOptionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutConfigurationSetSendingOptionsResponse.prototype, "tooManyRequestsException", void 0);
    return PutConfigurationSetSendingOptionsResponse;
}(SpeakeasyBase));
export { PutConfigurationSetSendingOptionsResponse };
