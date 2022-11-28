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
var DataPointsPatchNotesPathParams = /** @class */ (function (_super) {
    __extends(DataPointsPatchNotesPathParams, _super);
    function DataPointsPatchNotesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DataPointsPatchNotesPathParams.prototype, "id", void 0);
    return DataPointsPatchNotesPathParams;
}(SpeakeasyBase));
export { DataPointsPatchNotesPathParams };
var DataPointsPatchNotesRequests = /** @class */ (function (_super) {
    __extends(DataPointsPatchNotesRequests, _super);
    function DataPointsPatchNotesRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApiCoreRequestsGenericTextPatch)
    ], DataPointsPatchNotesRequests.prototype, "apiCoreRequestsGenericTextPatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.ApiCoreRequestsGenericTextPatch)
    ], DataPointsPatchNotesRequests.prototype, "apiCoreRequestsGenericTextPatch1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ApiCoreRequestsGenericTextPatch)
    ], DataPointsPatchNotesRequests.prototype, "apiCoreRequestsGenericTextPatch2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], DataPointsPatchNotesRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], DataPointsPatchNotesRequests.prototype, "textXml", void 0);
    return DataPointsPatchNotesRequests;
}(SpeakeasyBase));
export { DataPointsPatchNotesRequests };
var DataPointsPatchNotesRequest = /** @class */ (function (_super) {
    __extends(DataPointsPatchNotesRequest, _super);
    function DataPointsPatchNotesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataPointsPatchNotesPathParams)
    ], DataPointsPatchNotesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataPointsPatchNotesRequests)
    ], DataPointsPatchNotesRequest.prototype, "request", void 0);
    return DataPointsPatchNotesRequest;
}(SpeakeasyBase));
export { DataPointsPatchNotesRequest };
var DataPointsPatchNotesResponse = /** @class */ (function (_super) {
    __extends(DataPointsPatchNotesResponse, _super);
    function DataPointsPatchNotesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntityUriSystemInt64)
    ], DataPointsPatchNotesResponse.prototype, "apiCoreResponsesEntityUriSystemInt64", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DataPointsPatchNotesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataPointsPatchNotesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataPointsPatchNotesResponse.prototype, "statusCode", void 0);
    return DataPointsPatchNotesResponse;
}(SpeakeasyBase));
export { DataPointsPatchNotesResponse };
