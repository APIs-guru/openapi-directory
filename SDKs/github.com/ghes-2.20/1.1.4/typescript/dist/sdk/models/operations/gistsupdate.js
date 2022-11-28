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
var GistsUpdatePathParams = /** @class */ (function (_super) {
    __extends(GistsUpdatePathParams, _super);
    function GistsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gist_id" }),
        __metadata("design:type", String)
    ], GistsUpdatePathParams.prototype, "gistId", void 0);
    return GistsUpdatePathParams;
}(SpeakeasyBase));
export { GistsUpdatePathParams };
var GistsUpdateRequestBodyFiles = /** @class */ (function (_super) {
    __extends(GistsUpdateRequestBodyFiles, _super);
    function GistsUpdateRequestBodyFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], GistsUpdateRequestBodyFiles.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], GistsUpdateRequestBodyFiles.prototype, "filename", void 0);
    return GistsUpdateRequestBodyFiles;
}(SpeakeasyBase));
export { GistsUpdateRequestBodyFiles };
var GistsUpdateRequestBody = /** @class */ (function (_super) {
    __extends(GistsUpdateRequestBody, _super);
    function GistsUpdateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GistsUpdateRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=files", elemType: GistsUpdateRequestBodyFiles }),
        __metadata("design:type", Map)
    ], GistsUpdateRequestBody.prototype, "files", void 0);
    return GistsUpdateRequestBody;
}(SpeakeasyBase));
export { GistsUpdateRequestBody };
var GistsUpdateRequest = /** @class */ (function (_super) {
    __extends(GistsUpdateRequest, _super);
    function GistsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GistsUpdatePathParams)
    ], GistsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GistsUpdateRequestBody)
    ], GistsUpdateRequest.prototype, "request", void 0);
    return GistsUpdateRequest;
}(SpeakeasyBase));
export { GistsUpdateRequest };
var GistsUpdateResponse = /** @class */ (function (_super) {
    __extends(GistsUpdateResponse, _super);
    function GistsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GistsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GistsUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], GistsUpdateResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GistSimple)
    ], GistsUpdateResponse.prototype, "gistSimple", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], GistsUpdateResponse.prototype, "validationError", void 0);
    return GistsUpdateResponse;
}(SpeakeasyBase));
export { GistsUpdateResponse };
