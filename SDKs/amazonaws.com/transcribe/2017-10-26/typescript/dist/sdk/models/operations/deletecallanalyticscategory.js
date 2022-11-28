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
export var DeleteCallAnalyticsCategoryXAmzTargetEnum;
(function (DeleteCallAnalyticsCategoryXAmzTargetEnum) {
    DeleteCallAnalyticsCategoryXAmzTargetEnum["TranscribeDeleteCallAnalyticsCategory"] = "Transcribe.DeleteCallAnalyticsCategory";
})(DeleteCallAnalyticsCategoryXAmzTargetEnum || (DeleteCallAnalyticsCategoryXAmzTargetEnum = {}));
var DeleteCallAnalyticsCategoryHeaders = /** @class */ (function (_super) {
    __extends(DeleteCallAnalyticsCategoryHeaders, _super);
    function DeleteCallAnalyticsCategoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteCallAnalyticsCategoryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteCallAnalyticsCategoryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteCallAnalyticsCategoryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteCallAnalyticsCategoryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteCallAnalyticsCategoryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteCallAnalyticsCategoryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteCallAnalyticsCategoryHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteCallAnalyticsCategoryHeaders.prototype, "xAmzTarget", void 0);
    return DeleteCallAnalyticsCategoryHeaders;
}(SpeakeasyBase));
export { DeleteCallAnalyticsCategoryHeaders };
var DeleteCallAnalyticsCategoryRequest = /** @class */ (function (_super) {
    __extends(DeleteCallAnalyticsCategoryRequest, _super);
    function DeleteCallAnalyticsCategoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCallAnalyticsCategoryHeaders)
    ], DeleteCallAnalyticsCategoryRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteCallAnalyticsCategoryRequest)
    ], DeleteCallAnalyticsCategoryRequest.prototype, "request", void 0);
    return DeleteCallAnalyticsCategoryRequest;
}(SpeakeasyBase));
export { DeleteCallAnalyticsCategoryRequest };
var DeleteCallAnalyticsCategoryResponse = /** @class */ (function (_super) {
    __extends(DeleteCallAnalyticsCategoryResponse, _super);
    function DeleteCallAnalyticsCategoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteCallAnalyticsCategoryResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteCallAnalyticsCategoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteCallAnalyticsCategoryResponse.prototype, "deleteCallAnalyticsCategoryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteCallAnalyticsCategoryResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteCallAnalyticsCategoryResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteCallAnalyticsCategoryResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteCallAnalyticsCategoryResponse.prototype, "statusCode", void 0);
    return DeleteCallAnalyticsCategoryResponse;
}(SpeakeasyBase));
export { DeleteCallAnalyticsCategoryResponse };
