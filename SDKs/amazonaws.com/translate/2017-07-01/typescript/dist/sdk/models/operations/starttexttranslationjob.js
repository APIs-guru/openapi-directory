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
export var StartTextTranslationJobXAmzTargetEnum;
(function (StartTextTranslationJobXAmzTargetEnum) {
    StartTextTranslationJobXAmzTargetEnum["AwsShineFrontendService20170701StartTextTranslationJob"] = "AWSShineFrontendService_20170701.StartTextTranslationJob";
})(StartTextTranslationJobXAmzTargetEnum || (StartTextTranslationJobXAmzTargetEnum = {}));
var StartTextTranslationJobHeaders = /** @class */ (function (_super) {
    __extends(StartTextTranslationJobHeaders, _super);
    function StartTextTranslationJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartTextTranslationJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartTextTranslationJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartTextTranslationJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartTextTranslationJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartTextTranslationJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartTextTranslationJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartTextTranslationJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], StartTextTranslationJobHeaders.prototype, "xAmzTarget", void 0);
    return StartTextTranslationJobHeaders;
}(SpeakeasyBase));
export { StartTextTranslationJobHeaders };
var StartTextTranslationJobRequest = /** @class */ (function (_super) {
    __extends(StartTextTranslationJobRequest, _super);
    function StartTextTranslationJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartTextTranslationJobHeaders)
    ], StartTextTranslationJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StartTextTranslationJobRequest)
    ], StartTextTranslationJobRequest.prototype, "request", void 0);
    return StartTextTranslationJobRequest;
}(SpeakeasyBase));
export { StartTextTranslationJobRequest };
var StartTextTranslationJobResponse = /** @class */ (function (_super) {
    __extends(StartTextTranslationJobResponse, _super);
    function StartTextTranslationJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartTextTranslationJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartTextTranslationJobResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartTextTranslationJobResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartTextTranslationJobResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartTextTranslationJobResponse)
    ], StartTextTranslationJobResponse.prototype, "startTextTranslationJobResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartTextTranslationJobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartTextTranslationJobResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartTextTranslationJobResponse.prototype, "unsupportedLanguagePairException", void 0);
    return StartTextTranslationJobResponse;
}(SpeakeasyBase));
export { StartTextTranslationJobResponse };
