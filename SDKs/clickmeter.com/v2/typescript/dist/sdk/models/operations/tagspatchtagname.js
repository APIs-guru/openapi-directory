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
var TagsPatchTagNamePathParams = /** @class */ (function (_super) {
    __extends(TagsPatchTagNamePathParams, _super);
    function TagsPatchTagNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" }),
        __metadata("design:type", Number)
    ], TagsPatchTagNamePathParams.prototype, "tagId", void 0);
    return TagsPatchTagNamePathParams;
}(SpeakeasyBase));
export { TagsPatchTagNamePathParams };
var TagsPatchTagNameRequests = /** @class */ (function (_super) {
    __extends(TagsPatchTagNameRequests, _super);
    function TagsPatchTagNameRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApiCoreRequestsGenericTextPatch)
    ], TagsPatchTagNameRequests.prototype, "apiCoreRequestsGenericTextPatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.ApiCoreRequestsGenericTextPatch)
    ], TagsPatchTagNameRequests.prototype, "apiCoreRequestsGenericTextPatch1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ApiCoreRequestsGenericTextPatch)
    ], TagsPatchTagNameRequests.prototype, "apiCoreRequestsGenericTextPatch2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], TagsPatchTagNameRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], TagsPatchTagNameRequests.prototype, "textXml", void 0);
    return TagsPatchTagNameRequests;
}(SpeakeasyBase));
export { TagsPatchTagNameRequests };
var TagsPatchTagNameRequest = /** @class */ (function (_super) {
    __extends(TagsPatchTagNameRequest, _super);
    function TagsPatchTagNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagsPatchTagNamePathParams)
    ], TagsPatchTagNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagsPatchTagNameRequests)
    ], TagsPatchTagNameRequest.prototype, "request", void 0);
    return TagsPatchTagNameRequest;
}(SpeakeasyBase));
export { TagsPatchTagNameRequest };
var TagsPatchTagNameResponse = /** @class */ (function (_super) {
    __extends(TagsPatchTagNameResponse, _super);
    function TagsPatchTagNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntityUriSystemInt64)
    ], TagsPatchTagNameResponse.prototype, "apiCoreResponsesEntityUriSystemInt64", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], TagsPatchTagNameResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagsPatchTagNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagsPatchTagNameResponse.prototype, "statusCode", void 0);
    return TagsPatchTagNameResponse;
}(SpeakeasyBase));
export { TagsPatchTagNameResponse };
