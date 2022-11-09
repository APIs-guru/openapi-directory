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
import * as shared from "../shared";
var CreateSavingsPlanHeaders = /** @class */ (function (_super) {
    __extends(CreateSavingsPlanHeaders, _super);
    function CreateSavingsPlanHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateSavingsPlanHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateSavingsPlanHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateSavingsPlanHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateSavingsPlanHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateSavingsPlanHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateSavingsPlanHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateSavingsPlanHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateSavingsPlanHeaders;
}(SpeakeasyBase));
export { CreateSavingsPlanHeaders };
var CreateSavingsPlanRequestBody = /** @class */ (function (_super) {
    __extends(CreateSavingsPlanRequestBody, _super);
    function CreateSavingsPlanRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateSavingsPlanRequestBody.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "json, name=commitment" }),
        __metadata("design:type", String)
    ], CreateSavingsPlanRequestBody.prototype, "commitment", void 0);
    __decorate([
        Metadata({ data: "json, name=purchaseTime" }),
        __metadata("design:type", Date)
    ], CreateSavingsPlanRequestBody.prototype, "purchaseTime", void 0);
    __decorate([
        Metadata({ data: "json, name=savingsPlanOfferingId" }),
        __metadata("design:type", String)
    ], CreateSavingsPlanRequestBody.prototype, "savingsPlanOfferingId", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateSavingsPlanRequestBody.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=upfrontPaymentAmount" }),
        __metadata("design:type", String)
    ], CreateSavingsPlanRequestBody.prototype, "upfrontPaymentAmount", void 0);
    return CreateSavingsPlanRequestBody;
}(SpeakeasyBase));
export { CreateSavingsPlanRequestBody };
var CreateSavingsPlanRequest = /** @class */ (function (_super) {
    __extends(CreateSavingsPlanRequest, _super);
    function CreateSavingsPlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSavingsPlanHeaders)
    ], CreateSavingsPlanRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateSavingsPlanRequestBody)
    ], CreateSavingsPlanRequest.prototype, "request", void 0);
    return CreateSavingsPlanRequest;
}(SpeakeasyBase));
export { CreateSavingsPlanRequest };
var CreateSavingsPlanResponse = /** @class */ (function (_super) {
    __extends(CreateSavingsPlanResponse, _super);
    function CreateSavingsPlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSavingsPlanResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateSavingsPlanResponse)
    ], CreateSavingsPlanResponse.prototype, "createSavingsPlanResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateSavingsPlanResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateSavingsPlanResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateSavingsPlanResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateSavingsPlanResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateSavingsPlanResponse.prototype, "validationException", void 0);
    return CreateSavingsPlanResponse;
}(SpeakeasyBase));
export { CreateSavingsPlanResponse };
