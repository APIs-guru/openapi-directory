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
var PreprocessingBinarizeRequestBodyImageFile = /** @class */ (function (_super) {
    __extends(PreprocessingBinarizeRequestBodyImageFile, _super);
    function PreprocessingBinarizeRequestBodyImageFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PreprocessingBinarizeRequestBodyImageFile.prototype, "content", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=imageFile" }),
        __metadata("design:type", String)
    ], PreprocessingBinarizeRequestBodyImageFile.prototype, "imageFile", void 0);
    return PreprocessingBinarizeRequestBodyImageFile;
}(SpeakeasyBase));
export { PreprocessingBinarizeRequestBodyImageFile };
var PreprocessingBinarizeRequestBody = /** @class */ (function (_super) {
    __extends(PreprocessingBinarizeRequestBody, _super);
    function PreprocessingBinarizeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PreprocessingBinarizeRequestBodyImageFile)
    ], PreprocessingBinarizeRequestBody.prototype, "imageFile", void 0);
    return PreprocessingBinarizeRequestBody;
}(SpeakeasyBase));
export { PreprocessingBinarizeRequestBody };
var PreprocessingBinarizeSecurity = /** @class */ (function (_super) {
    __extends(PreprocessingBinarizeSecurity, _super);
    function PreprocessingBinarizeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], PreprocessingBinarizeSecurity.prototype, "apikey", void 0);
    return PreprocessingBinarizeSecurity;
}(SpeakeasyBase));
export { PreprocessingBinarizeSecurity };
var PreprocessingBinarizeRequest = /** @class */ (function (_super) {
    __extends(PreprocessingBinarizeRequest, _super);
    function PreprocessingBinarizeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PreprocessingBinarizeRequestBody)
    ], PreprocessingBinarizeRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PreprocessingBinarizeSecurity)
    ], PreprocessingBinarizeRequest.prototype, "security", void 0);
    return PreprocessingBinarizeRequest;
}(SpeakeasyBase));
export { PreprocessingBinarizeRequest };
var PreprocessingBinarizeResponse = /** @class */ (function (_super) {
    __extends(PreprocessingBinarizeResponse, _super);
    function PreprocessingBinarizeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PreprocessingBinarizeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PreprocessingBinarizeResponse.prototype, "preprocessingBinarize200ApplicationJsonByteString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PreprocessingBinarizeResponse.prototype, "preprocessingBinarize200ApplicationXmlByteString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PreprocessingBinarizeResponse.prototype, "preprocessingBinarize200TextJsonByteString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PreprocessingBinarizeResponse.prototype, "preprocessingBinarize200TextXmlByteString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PreprocessingBinarizeResponse.prototype, "statusCode", void 0);
    return PreprocessingBinarizeResponse;
}(SpeakeasyBase));
export { PreprocessingBinarizeResponse };
