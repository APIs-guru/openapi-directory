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
var PreprocessingUnrotateRequestBodyImageFile = /** @class */ (function (_super) {
    __extends(PreprocessingUnrotateRequestBodyImageFile, _super);
    function PreprocessingUnrotateRequestBodyImageFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PreprocessingUnrotateRequestBodyImageFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=imageFile" }),
        __metadata("design:type", String)
    ], PreprocessingUnrotateRequestBodyImageFile.prototype, "imageFile", void 0);
    return PreprocessingUnrotateRequestBodyImageFile;
}(SpeakeasyBase));
export { PreprocessingUnrotateRequestBodyImageFile };
var PreprocessingUnrotateRequestBody = /** @class */ (function (_super) {
    __extends(PreprocessingUnrotateRequestBody, _super);
    function PreprocessingUnrotateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PreprocessingUnrotateRequestBodyImageFile)
    ], PreprocessingUnrotateRequestBody.prototype, "imageFile", void 0);
    return PreprocessingUnrotateRequestBody;
}(SpeakeasyBase));
export { PreprocessingUnrotateRequestBody };
var PreprocessingUnrotateSecurity = /** @class */ (function (_super) {
    __extends(PreprocessingUnrotateSecurity, _super);
    function PreprocessingUnrotateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], PreprocessingUnrotateSecurity.prototype, "apikey", void 0);
    return PreprocessingUnrotateSecurity;
}(SpeakeasyBase));
export { PreprocessingUnrotateSecurity };
var PreprocessingUnrotateRequest = /** @class */ (function (_super) {
    __extends(PreprocessingUnrotateRequest, _super);
    function PreprocessingUnrotateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PreprocessingUnrotateRequestBody)
    ], PreprocessingUnrotateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PreprocessingUnrotateSecurity)
    ], PreprocessingUnrotateRequest.prototype, "security", void 0);
    return PreprocessingUnrotateRequest;
}(SpeakeasyBase));
export { PreprocessingUnrotateRequest };
var PreprocessingUnrotateResponse = /** @class */ (function (_super) {
    __extends(PreprocessingUnrotateResponse, _super);
    function PreprocessingUnrotateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PreprocessingUnrotateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PreprocessingUnrotateResponse.prototype, "preprocessingUnrotate200ApplicationJsonByteString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PreprocessingUnrotateResponse.prototype, "preprocessingUnrotate200ApplicationXmlByteString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PreprocessingUnrotateResponse.prototype, "preprocessingUnrotate200TextJsonByteString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PreprocessingUnrotateResponse.prototype, "preprocessingUnrotate200TextXmlByteString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PreprocessingUnrotateResponse.prototype, "statusCode", void 0);
    return PreprocessingUnrotateResponse;
}(SpeakeasyBase));
export { PreprocessingUnrotateResponse };
