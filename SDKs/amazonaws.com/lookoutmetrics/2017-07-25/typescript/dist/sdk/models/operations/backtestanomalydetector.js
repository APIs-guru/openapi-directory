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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var BackTestAnomalyDetectorHeaders = /** @class */ (function (_super) {
    __extends(BackTestAnomalyDetectorHeaders, _super);
    function BackTestAnomalyDetectorHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BackTestAnomalyDetectorHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BackTestAnomalyDetectorHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BackTestAnomalyDetectorHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BackTestAnomalyDetectorHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BackTestAnomalyDetectorHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BackTestAnomalyDetectorHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BackTestAnomalyDetectorHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BackTestAnomalyDetectorHeaders;
}(SpeakeasyBase));
export { BackTestAnomalyDetectorHeaders };
var BackTestAnomalyDetectorRequestBody = /** @class */ (function (_super) {
    __extends(BackTestAnomalyDetectorRequestBody, _super);
    function BackTestAnomalyDetectorRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AnomalyDetectorArn" }),
        __metadata("design:type", String)
    ], BackTestAnomalyDetectorRequestBody.prototype, "anomalyDetectorArn", void 0);
    return BackTestAnomalyDetectorRequestBody;
}(SpeakeasyBase));
export { BackTestAnomalyDetectorRequestBody };
var BackTestAnomalyDetectorRequest = /** @class */ (function (_super) {
    __extends(BackTestAnomalyDetectorRequest, _super);
    function BackTestAnomalyDetectorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BackTestAnomalyDetectorHeaders)
    ], BackTestAnomalyDetectorRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BackTestAnomalyDetectorRequestBody)
    ], BackTestAnomalyDetectorRequest.prototype, "request", void 0);
    return BackTestAnomalyDetectorRequest;
}(SpeakeasyBase));
export { BackTestAnomalyDetectorRequest };
var BackTestAnomalyDetectorResponse = /** @class */ (function (_super) {
    __extends(BackTestAnomalyDetectorResponse, _super);
    function BackTestAnomalyDetectorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BackTestAnomalyDetectorResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], BackTestAnomalyDetectorResponse.prototype, "backTestAnomalyDetectorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BackTestAnomalyDetectorResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BackTestAnomalyDetectorResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BackTestAnomalyDetectorResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BackTestAnomalyDetectorResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BackTestAnomalyDetectorResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BackTestAnomalyDetectorResponse.prototype, "validationException", void 0);
    return BackTestAnomalyDetectorResponse;
}(SpeakeasyBase));
export { BackTestAnomalyDetectorResponse };
