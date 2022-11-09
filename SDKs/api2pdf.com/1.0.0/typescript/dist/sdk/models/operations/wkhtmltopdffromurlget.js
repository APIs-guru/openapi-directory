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
var WkhtmltopdfFromUrlGetQueryParams = /** @class */ (function (_super) {
    __extends(WkhtmltopdfFromUrlGetQueryParams, _super);
    function WkhtmltopdfFromUrlGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=output" }),
        __metadata("design:type", String)
    ], WkhtmltopdfFromUrlGetQueryParams.prototype, "output", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=url" }),
        __metadata("design:type", String)
    ], WkhtmltopdfFromUrlGetQueryParams.prototype, "url", void 0);
    return WkhtmltopdfFromUrlGetQueryParams;
}(SpeakeasyBase));
export { WkhtmltopdfFromUrlGetQueryParams };
var WkhtmltopdfFromUrlGetSecurity = /** @class */ (function (_super) {
    __extends(WkhtmltopdfFromUrlGetSecurity, _super);
    function WkhtmltopdfFromUrlGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeQueryApiKey)
    ], WkhtmltopdfFromUrlGetSecurity.prototype, "queryApiKey", void 0);
    return WkhtmltopdfFromUrlGetSecurity;
}(SpeakeasyBase));
export { WkhtmltopdfFromUrlGetSecurity };
var WkhtmltopdfFromUrlGetRequest = /** @class */ (function (_super) {
    __extends(WkhtmltopdfFromUrlGetRequest, _super);
    function WkhtmltopdfFromUrlGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", WkhtmltopdfFromUrlGetQueryParams)
    ], WkhtmltopdfFromUrlGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", WkhtmltopdfFromUrlGetSecurity)
    ], WkhtmltopdfFromUrlGetRequest.prototype, "security", void 0);
    return WkhtmltopdfFromUrlGetRequest;
}(SpeakeasyBase));
export { WkhtmltopdfFromUrlGetRequest };
var WkhtmltopdfFromUrlGetResponse = /** @class */ (function (_super) {
    __extends(WkhtmltopdfFromUrlGetResponse, _super);
    function WkhtmltopdfFromUrlGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiResponseFailure)
    ], WkhtmltopdfFromUrlGetResponse.prototype, "apiResponseFailure", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiResponseSuccess)
    ], WkhtmltopdfFromUrlGetResponse.prototype, "apiResponseSuccess", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], WkhtmltopdfFromUrlGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], WkhtmltopdfFromUrlGetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], WkhtmltopdfFromUrlGetResponse.prototype, "wkhtmltopdfFromUrlGet200ApplicationPdfBinaryString", void 0);
    return WkhtmltopdfFromUrlGetResponse;
}(SpeakeasyBase));
export { WkhtmltopdfFromUrlGetResponse };
