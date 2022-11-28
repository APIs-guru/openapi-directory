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
var ConversionsPatchNotesPathParams = /** @class */ (function (_super) {
    __extends(ConversionsPatchNotesPathParams, _super);
    function ConversionsPatchNotesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversionId" }),
        __metadata("design:type", Number)
    ], ConversionsPatchNotesPathParams.prototype, "conversionId", void 0);
    return ConversionsPatchNotesPathParams;
}(SpeakeasyBase));
export { ConversionsPatchNotesPathParams };
var ConversionsPatchNotesRequests = /** @class */ (function (_super) {
    __extends(ConversionsPatchNotesRequests, _super);
    function ConversionsPatchNotesRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApiCoreRequestsGenericTextPatch)
    ], ConversionsPatchNotesRequests.prototype, "apiCoreRequestsGenericTextPatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.ApiCoreRequestsGenericTextPatch)
    ], ConversionsPatchNotesRequests.prototype, "apiCoreRequestsGenericTextPatch1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ApiCoreRequestsGenericTextPatch)
    ], ConversionsPatchNotesRequests.prototype, "apiCoreRequestsGenericTextPatch2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], ConversionsPatchNotesRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], ConversionsPatchNotesRequests.prototype, "textXml", void 0);
    return ConversionsPatchNotesRequests;
}(SpeakeasyBase));
export { ConversionsPatchNotesRequests };
var ConversionsPatchNotesRequest = /** @class */ (function (_super) {
    __extends(ConversionsPatchNotesRequest, _super);
    function ConversionsPatchNotesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConversionsPatchNotesPathParams)
    ], ConversionsPatchNotesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConversionsPatchNotesRequests)
    ], ConversionsPatchNotesRequest.prototype, "request", void 0);
    return ConversionsPatchNotesRequest;
}(SpeakeasyBase));
export { ConversionsPatchNotesRequest };
var ConversionsPatchNotesResponse = /** @class */ (function (_super) {
    __extends(ConversionsPatchNotesResponse, _super);
    function ConversionsPatchNotesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntityUriSystemInt64)
    ], ConversionsPatchNotesResponse.prototype, "apiCoreResponsesEntityUriSystemInt64", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ConversionsPatchNotesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConversionsPatchNotesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConversionsPatchNotesResponse.prototype, "statusCode", void 0);
    return ConversionsPatchNotesResponse;
}(SpeakeasyBase));
export { ConversionsPatchNotesResponse };
