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
var DescribeSavingsPlansHeaders = /** @class */ (function (_super) {
    __extends(DescribeSavingsPlansHeaders, _super);
    function DescribeSavingsPlansHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeSavingsPlansHeaders;
}(SpeakeasyBase));
export { DescribeSavingsPlansHeaders };
var DescribeSavingsPlansRequestBody = /** @class */ (function (_super) {
    __extends(DescribeSavingsPlansRequestBody, _super);
    function DescribeSavingsPlansRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=filters", elemType: shared.SavingsPlanFilter }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlansRequestBody.prototype, "filters", void 0);
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], DescribeSavingsPlansRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeSavingsPlansRequestBody.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "json, name=savingsPlanArns" }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlansRequestBody.prototype, "savingsPlanArns", void 0);
    __decorate([
        Metadata({ data: "json, name=savingsPlanIds" }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlansRequestBody.prototype, "savingsPlanIds", void 0);
    __decorate([
        Metadata({ data: "json, name=states" }),
        __metadata("design:type", Array)
    ], DescribeSavingsPlansRequestBody.prototype, "states", void 0);
    return DescribeSavingsPlansRequestBody;
}(SpeakeasyBase));
export { DescribeSavingsPlansRequestBody };
var DescribeSavingsPlansRequest = /** @class */ (function (_super) {
    __extends(DescribeSavingsPlansRequest, _super);
    function DescribeSavingsPlansRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeSavingsPlansHeaders)
    ], DescribeSavingsPlansRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DescribeSavingsPlansRequestBody)
    ], DescribeSavingsPlansRequest.prototype, "request", void 0);
    return DescribeSavingsPlansRequest;
}(SpeakeasyBase));
export { DescribeSavingsPlansRequest };
var DescribeSavingsPlansResponse = /** @class */ (function (_super) {
    __extends(DescribeSavingsPlansResponse, _super);
    function DescribeSavingsPlansResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeSavingsPlansResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeSavingsPlansResponse)
    ], DescribeSavingsPlansResponse.prototype, "describeSavingsPlansResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeSavingsPlansResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeSavingsPlansResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeSavingsPlansResponse.prototype, "validationException", void 0);
    return DescribeSavingsPlansResponse;
}(SpeakeasyBase));
export { DescribeSavingsPlansResponse };
