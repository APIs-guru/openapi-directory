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
var PreprocessingBinarizeAdvancedRequestBodyImageFile = /** @class */ (function (_super) {
    __extends(PreprocessingBinarizeAdvancedRequestBodyImageFile, _super);
    function PreprocessingBinarizeAdvancedRequestBodyImageFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PreprocessingBinarizeAdvancedRequestBodyImageFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=imageFile" }),
        __metadata("design:type", String)
    ], PreprocessingBinarizeAdvancedRequestBodyImageFile.prototype, "imageFile", void 0);
    return PreprocessingBinarizeAdvancedRequestBodyImageFile;
}(SpeakeasyBase));
export { PreprocessingBinarizeAdvancedRequestBodyImageFile };
var PreprocessingBinarizeAdvancedRequestBody = /** @class */ (function (_super) {
    __extends(PreprocessingBinarizeAdvancedRequestBody, _super);
    function PreprocessingBinarizeAdvancedRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PreprocessingBinarizeAdvancedRequestBodyImageFile)
    ], PreprocessingBinarizeAdvancedRequestBody.prototype, "imageFile", void 0);
    return PreprocessingBinarizeAdvancedRequestBody;
}(SpeakeasyBase));
export { PreprocessingBinarizeAdvancedRequestBody };
var PreprocessingBinarizeAdvancedSecurity = /** @class */ (function (_super) {
    __extends(PreprocessingBinarizeAdvancedSecurity, _super);
    function PreprocessingBinarizeAdvancedSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], PreprocessingBinarizeAdvancedSecurity.prototype, "apikey", void 0);
    return PreprocessingBinarizeAdvancedSecurity;
}(SpeakeasyBase));
export { PreprocessingBinarizeAdvancedSecurity };
var PreprocessingBinarizeAdvancedRequest = /** @class */ (function (_super) {
    __extends(PreprocessingBinarizeAdvancedRequest, _super);
    function PreprocessingBinarizeAdvancedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PreprocessingBinarizeAdvancedRequestBody)
    ], PreprocessingBinarizeAdvancedRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PreprocessingBinarizeAdvancedSecurity)
    ], PreprocessingBinarizeAdvancedRequest.prototype, "security", void 0);
    return PreprocessingBinarizeAdvancedRequest;
}(SpeakeasyBase));
export { PreprocessingBinarizeAdvancedRequest };
var PreprocessingBinarizeAdvancedResponse = /** @class */ (function (_super) {
    __extends(PreprocessingBinarizeAdvancedResponse, _super);
    function PreprocessingBinarizeAdvancedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PreprocessingBinarizeAdvancedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PreprocessingBinarizeAdvancedResponse.prototype, "preprocessingBinarizeAdvanced200ApplicationJsonByteString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PreprocessingBinarizeAdvancedResponse.prototype, "preprocessingBinarizeAdvanced200ApplicationXmlByteString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PreprocessingBinarizeAdvancedResponse.prototype, "preprocessingBinarizeAdvanced200TextJsonByteString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PreprocessingBinarizeAdvancedResponse.prototype, "preprocessingBinarizeAdvanced200TextXmlByteString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PreprocessingBinarizeAdvancedResponse.prototype, "statusCode", void 0);
    return PreprocessingBinarizeAdvancedResponse;
}(SpeakeasyBase));
export { PreprocessingBinarizeAdvancedResponse };
