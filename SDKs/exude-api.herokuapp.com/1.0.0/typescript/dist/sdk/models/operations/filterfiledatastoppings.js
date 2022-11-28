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
var FilterFileDataStoppingsPathParams = /** @class */ (function (_super) {
    __extends(FilterFileDataStoppingsPathParams, _super);
    function FilterFileDataStoppingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], FilterFileDataStoppingsPathParams.prototype, "type", void 0);
    return FilterFileDataStoppingsPathParams;
}(SpeakeasyBase));
export { FilterFileDataStoppingsPathParams };
var FilterFileDataStoppingsRequestBodyFile = /** @class */ (function (_super) {
    __extends(FilterFileDataStoppingsRequestBodyFile, _super);
    function FilterFileDataStoppingsRequestBodyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], FilterFileDataStoppingsRequestBodyFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], FilterFileDataStoppingsRequestBodyFile.prototype, "file", void 0);
    return FilterFileDataStoppingsRequestBodyFile;
}(SpeakeasyBase));
export { FilterFileDataStoppingsRequestBodyFile };
var FilterFileDataStoppingsRequestBody = /** @class */ (function (_super) {
    __extends(FilterFileDataStoppingsRequestBody, _super);
    function FilterFileDataStoppingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", FilterFileDataStoppingsRequestBodyFile)
    ], FilterFileDataStoppingsRequestBody.prototype, "file", void 0);
    return FilterFileDataStoppingsRequestBody;
}(SpeakeasyBase));
export { FilterFileDataStoppingsRequestBody };
var FilterFileDataStoppingsRequest = /** @class */ (function (_super) {
    __extends(FilterFileDataStoppingsRequest, _super);
    function FilterFileDataStoppingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FilterFileDataStoppingsPathParams)
    ], FilterFileDataStoppingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", FilterFileDataStoppingsRequestBody)
    ], FilterFileDataStoppingsRequest.prototype, "request", void 0);
    return FilterFileDataStoppingsRequest;
}(SpeakeasyBase));
export { FilterFileDataStoppingsRequest };
var FilterFileDataStoppingsResponse = /** @class */ (function (_super) {
    __extends(FilterFileDataStoppingsResponse, _super);
    function FilterFileDataStoppingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FilterFileDataStoppingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], FilterFileDataStoppingsResponse.prototype, "exudeResponseBean", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FilterFileDataStoppingsResponse.prototype, "statusCode", void 0);
    return FilterFileDataStoppingsResponse;
}(SpeakeasyBase));
export { FilterFileDataStoppingsResponse };
