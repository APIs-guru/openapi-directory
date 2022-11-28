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
var SourceMapsCreateOrUpdatePathParams = /** @class */ (function (_super) {
    __extends(SourceMapsCreateOrUpdatePathParams, _super);
    function SourceMapsCreateOrUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logId" }),
        __metadata("design:type", String)
    ], SourceMapsCreateOrUpdatePathParams.prototype, "logId", void 0);
    return SourceMapsCreateOrUpdatePathParams;
}(SpeakeasyBase));
export { SourceMapsCreateOrUpdatePathParams };
var SourceMapsCreateOrUpdateRequestBodyMinifiedJavaScript = /** @class */ (function (_super) {
    __extends(SourceMapsCreateOrUpdateRequestBodyMinifiedJavaScript, _super);
    function SourceMapsCreateOrUpdateRequestBodyMinifiedJavaScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=MinifiedJavaScript" }),
        __metadata("design:type", String)
    ], SourceMapsCreateOrUpdateRequestBodyMinifiedJavaScript.prototype, "minifiedJavaScript", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], SourceMapsCreateOrUpdateRequestBodyMinifiedJavaScript.prototype, "content", void 0);
    return SourceMapsCreateOrUpdateRequestBodyMinifiedJavaScript;
}(SpeakeasyBase));
export { SourceMapsCreateOrUpdateRequestBodyMinifiedJavaScript };
var SourceMapsCreateOrUpdateRequestBodySourceMap = /** @class */ (function (_super) {
    __extends(SourceMapsCreateOrUpdateRequestBodySourceMap, _super);
    function SourceMapsCreateOrUpdateRequestBodySourceMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=SourceMap" }),
        __metadata("design:type", String)
    ], SourceMapsCreateOrUpdateRequestBodySourceMap.prototype, "sourceMap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], SourceMapsCreateOrUpdateRequestBodySourceMap.prototype, "content", void 0);
    return SourceMapsCreateOrUpdateRequestBodySourceMap;
}(SpeakeasyBase));
export { SourceMapsCreateOrUpdateRequestBodySourceMap };
var SourceMapsCreateOrUpdateRequestBody = /** @class */ (function (_super) {
    __extends(SourceMapsCreateOrUpdateRequestBody, _super);
    function SourceMapsCreateOrUpdateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", SourceMapsCreateOrUpdateRequestBodyMinifiedJavaScript)
    ], SourceMapsCreateOrUpdateRequestBody.prototype, "minifiedJavaScript", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=Path" }),
        __metadata("design:type", String)
    ], SourceMapsCreateOrUpdateRequestBody.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", SourceMapsCreateOrUpdateRequestBodySourceMap)
    ], SourceMapsCreateOrUpdateRequestBody.prototype, "sourceMap", void 0);
    return SourceMapsCreateOrUpdateRequestBody;
}(SpeakeasyBase));
export { SourceMapsCreateOrUpdateRequestBody };
var SourceMapsCreateOrUpdateRequest = /** @class */ (function (_super) {
    __extends(SourceMapsCreateOrUpdateRequest, _super);
    function SourceMapsCreateOrUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SourceMapsCreateOrUpdatePathParams)
    ], SourceMapsCreateOrUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", SourceMapsCreateOrUpdateRequestBody)
    ], SourceMapsCreateOrUpdateRequest.prototype, "request", void 0);
    return SourceMapsCreateOrUpdateRequest;
}(SpeakeasyBase));
export { SourceMapsCreateOrUpdateRequest };
var SourceMapsCreateOrUpdateResponse = /** @class */ (function (_super) {
    __extends(SourceMapsCreateOrUpdateResponse, _super);
    function SourceMapsCreateOrUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SourceMapsCreateOrUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SourceMapsCreateOrUpdateResponse.prototype, "statusCode", void 0);
    return SourceMapsCreateOrUpdateResponse;
}(SpeakeasyBase));
export { SourceMapsCreateOrUpdateResponse };
