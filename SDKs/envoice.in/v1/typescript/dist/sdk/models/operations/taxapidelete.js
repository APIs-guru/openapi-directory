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
var TaxApiDeleteHeaders = /** @class */ (function (_super) {
    __extends(TaxApiDeleteHeaders, _super);
    function TaxApiDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" }),
        __metadata("design:type", String)
    ], TaxApiDeleteHeaders.prototype, "xAuthKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" }),
        __metadata("design:type", String)
    ], TaxApiDeleteHeaders.prototype, "xAuthSecret", void 0);
    return TaxApiDeleteHeaders;
}(SpeakeasyBase));
export { TaxApiDeleteHeaders };
var TaxApiDeleteRequests = /** @class */ (function (_super) {
    __extends(TaxApiDeleteRequests, _super);
    function TaxApiDeleteRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], TaxApiDeleteRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TaxDeleteApiModel)
    ], TaxApiDeleteRequests.prototype, "taxDeleteApiModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.TaxDeleteApiModel)
    ], TaxApiDeleteRequests.prototype, "taxDeleteApiModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.TaxDeleteApiModel)
    ], TaxApiDeleteRequests.prototype, "taxDeleteApiModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/html" }),
        __metadata("design:type", Uint8Array)
    ], TaxApiDeleteRequests.prototype, "textHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], TaxApiDeleteRequests.prototype, "textXml", void 0);
    return TaxApiDeleteRequests;
}(SpeakeasyBase));
export { TaxApiDeleteRequests };
var TaxApiDeleteRequest = /** @class */ (function (_super) {
    __extends(TaxApiDeleteRequest, _super);
    function TaxApiDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TaxApiDeleteHeaders)
    ], TaxApiDeleteRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TaxApiDeleteRequests)
    ], TaxApiDeleteRequest.prototype, "request", void 0);
    return TaxApiDeleteRequest;
}(SpeakeasyBase));
export { TaxApiDeleteRequest };
var TaxApiDeleteResponse = /** @class */ (function (_super) {
    __extends(TaxApiDeleteResponse, _super);
    function TaxApiDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], TaxApiDeleteResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TaxApiDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TaxApiDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TaxApiDeleteResponse.prototype, "taxApiDelete200ApplicationJsonInt32Integer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TaxApiDeleteResponse.prototype, "taxApiDelete200TextJsonInt32Integer", void 0);
    return TaxApiDeleteResponse;
}(SpeakeasyBase));
export { TaxApiDeleteResponse };
