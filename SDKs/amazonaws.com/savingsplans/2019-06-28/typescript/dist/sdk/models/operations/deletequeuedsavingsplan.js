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
var DeleteQueuedSavingsPlanHeaders = /** @class */ (function (_super) {
    __extends(DeleteQueuedSavingsPlanHeaders, _super);
    function DeleteQueuedSavingsPlanHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteQueuedSavingsPlanHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteQueuedSavingsPlanHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteQueuedSavingsPlanHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteQueuedSavingsPlanHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteQueuedSavingsPlanHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteQueuedSavingsPlanHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteQueuedSavingsPlanHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteQueuedSavingsPlanHeaders;
}(SpeakeasyBase));
export { DeleteQueuedSavingsPlanHeaders };
var DeleteQueuedSavingsPlanRequestBody = /** @class */ (function (_super) {
    __extends(DeleteQueuedSavingsPlanRequestBody, _super);
    function DeleteQueuedSavingsPlanRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=savingsPlanId" }),
        __metadata("design:type", String)
    ], DeleteQueuedSavingsPlanRequestBody.prototype, "savingsPlanId", void 0);
    return DeleteQueuedSavingsPlanRequestBody;
}(SpeakeasyBase));
export { DeleteQueuedSavingsPlanRequestBody };
var DeleteQueuedSavingsPlanRequest = /** @class */ (function (_super) {
    __extends(DeleteQueuedSavingsPlanRequest, _super);
    function DeleteQueuedSavingsPlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteQueuedSavingsPlanHeaders)
    ], DeleteQueuedSavingsPlanRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DeleteQueuedSavingsPlanRequestBody)
    ], DeleteQueuedSavingsPlanRequest.prototype, "request", void 0);
    return DeleteQueuedSavingsPlanRequest;
}(SpeakeasyBase));
export { DeleteQueuedSavingsPlanRequest };
var DeleteQueuedSavingsPlanResponse = /** @class */ (function (_super) {
    __extends(DeleteQueuedSavingsPlanResponse, _super);
    function DeleteQueuedSavingsPlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteQueuedSavingsPlanResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], DeleteQueuedSavingsPlanResponse.prototype, "deleteQueuedSavingsPlanResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteQueuedSavingsPlanResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteQueuedSavingsPlanResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteQueuedSavingsPlanResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteQueuedSavingsPlanResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteQueuedSavingsPlanResponse.prototype, "validationException", void 0);
    return DeleteQueuedSavingsPlanResponse;
}(SpeakeasyBase));
export { DeleteQueuedSavingsPlanResponse };
