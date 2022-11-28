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
var GetCelebrityRecognitionQueryParams = /** @class */ (function (_super) {
    __extends(GetCelebrityRecognitionQueryParams, _super);
    function GetCelebrityRecognitionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], GetCelebrityRecognitionQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetCelebrityRecognitionQueryParams.prototype, "nextToken", void 0);
    return GetCelebrityRecognitionQueryParams;
}(SpeakeasyBase));
export { GetCelebrityRecognitionQueryParams };
export var GetCelebrityRecognitionXAmzTargetEnum;
(function (GetCelebrityRecognitionXAmzTargetEnum) {
    GetCelebrityRecognitionXAmzTargetEnum["RekognitionServiceGetCelebrityRecognition"] = "RekognitionService.GetCelebrityRecognition";
})(GetCelebrityRecognitionXAmzTargetEnum || (GetCelebrityRecognitionXAmzTargetEnum = {}));
var GetCelebrityRecognitionHeaders = /** @class */ (function (_super) {
    __extends(GetCelebrityRecognitionHeaders, _super);
    function GetCelebrityRecognitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCelebrityRecognitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCelebrityRecognitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCelebrityRecognitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCelebrityRecognitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCelebrityRecognitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCelebrityRecognitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCelebrityRecognitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetCelebrityRecognitionHeaders.prototype, "xAmzTarget", void 0);
    return GetCelebrityRecognitionHeaders;
}(SpeakeasyBase));
export { GetCelebrityRecognitionHeaders };
var GetCelebrityRecognitionRequest = /** @class */ (function (_super) {
    __extends(GetCelebrityRecognitionRequest, _super);
    function GetCelebrityRecognitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCelebrityRecognitionQueryParams)
    ], GetCelebrityRecognitionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCelebrityRecognitionHeaders)
    ], GetCelebrityRecognitionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetCelebrityRecognitionRequest)
    ], GetCelebrityRecognitionRequest.prototype, "request", void 0);
    return GetCelebrityRecognitionRequest;
}(SpeakeasyBase));
export { GetCelebrityRecognitionRequest };
var GetCelebrityRecognitionResponse = /** @class */ (function (_super) {
    __extends(GetCelebrityRecognitionResponse, _super);
    function GetCelebrityRecognitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetCelebrityRecognitionResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCelebrityRecognitionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetCelebrityRecognitionResponse)
    ], GetCelebrityRecognitionResponse.prototype, "getCelebrityRecognitionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetCelebrityRecognitionResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetCelebrityRecognitionResponse.prototype, "invalidPaginationTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetCelebrityRecognitionResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetCelebrityRecognitionResponse.prototype, "provisionedThroughputExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetCelebrityRecognitionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCelebrityRecognitionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetCelebrityRecognitionResponse.prototype, "throttlingException", void 0);
    return GetCelebrityRecognitionResponse;
}(SpeakeasyBase));
export { GetCelebrityRecognitionResponse };
