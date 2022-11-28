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
var PutConfigurationSetSuppressionOptionsPathParams = /** @class */ (function (_super) {
    __extends(PutConfigurationSetSuppressionOptionsPathParams, _super);
    function PutConfigurationSetSuppressionOptionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConfigurationSetName" }),
        __metadata("design:type", String)
    ], PutConfigurationSetSuppressionOptionsPathParams.prototype, "configurationSetName", void 0);
    return PutConfigurationSetSuppressionOptionsPathParams;
}(SpeakeasyBase));
export { PutConfigurationSetSuppressionOptionsPathParams };
var PutConfigurationSetSuppressionOptionsHeaders = /** @class */ (function (_super) {
    __extends(PutConfigurationSetSuppressionOptionsHeaders, _super);
    function PutConfigurationSetSuppressionOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutConfigurationSetSuppressionOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutConfigurationSetSuppressionOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutConfigurationSetSuppressionOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutConfigurationSetSuppressionOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutConfigurationSetSuppressionOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutConfigurationSetSuppressionOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutConfigurationSetSuppressionOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutConfigurationSetSuppressionOptionsHeaders;
}(SpeakeasyBase));
export { PutConfigurationSetSuppressionOptionsHeaders };
var PutConfigurationSetSuppressionOptionsRequestBody = /** @class */ (function (_super) {
    __extends(PutConfigurationSetSuppressionOptionsRequestBody, _super);
    function PutConfigurationSetSuppressionOptionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SuppressedReasons" }),
        __metadata("design:type", Array)
    ], PutConfigurationSetSuppressionOptionsRequestBody.prototype, "suppressedReasons", void 0);
    return PutConfigurationSetSuppressionOptionsRequestBody;
}(SpeakeasyBase));
export { PutConfigurationSetSuppressionOptionsRequestBody };
var PutConfigurationSetSuppressionOptionsRequest = /** @class */ (function (_super) {
    __extends(PutConfigurationSetSuppressionOptionsRequest, _super);
    function PutConfigurationSetSuppressionOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutConfigurationSetSuppressionOptionsPathParams)
    ], PutConfigurationSetSuppressionOptionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutConfigurationSetSuppressionOptionsHeaders)
    ], PutConfigurationSetSuppressionOptionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutConfigurationSetSuppressionOptionsRequestBody)
    ], PutConfigurationSetSuppressionOptionsRequest.prototype, "request", void 0);
    return PutConfigurationSetSuppressionOptionsRequest;
}(SpeakeasyBase));
export { PutConfigurationSetSuppressionOptionsRequest };
var PutConfigurationSetSuppressionOptionsResponse = /** @class */ (function (_super) {
    __extends(PutConfigurationSetSuppressionOptionsResponse, _super);
    function PutConfigurationSetSuppressionOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutConfigurationSetSuppressionOptionsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutConfigurationSetSuppressionOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutConfigurationSetSuppressionOptionsResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutConfigurationSetSuppressionOptionsResponse.prototype, "putConfigurationSetSuppressionOptionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutConfigurationSetSuppressionOptionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutConfigurationSetSuppressionOptionsResponse.prototype, "tooManyRequestsException", void 0);
    return PutConfigurationSetSuppressionOptionsResponse;
}(SpeakeasyBase));
export { PutConfigurationSetSuppressionOptionsResponse };
