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
var ReceiptsPhotoToCsvRequestBodyImageFile = /** @class */ (function (_super) {
    __extends(ReceiptsPhotoToCsvRequestBodyImageFile, _super);
    function ReceiptsPhotoToCsvRequestBodyImageFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], ReceiptsPhotoToCsvRequestBodyImageFile.prototype, "content", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=imageFile" }),
        __metadata("design:type", String)
    ], ReceiptsPhotoToCsvRequestBodyImageFile.prototype, "imageFile", void 0);
    return ReceiptsPhotoToCsvRequestBodyImageFile;
}(SpeakeasyBase));
export { ReceiptsPhotoToCsvRequestBodyImageFile };
var ReceiptsPhotoToCsvRequestBody = /** @class */ (function (_super) {
    __extends(ReceiptsPhotoToCsvRequestBody, _super);
    function ReceiptsPhotoToCsvRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", ReceiptsPhotoToCsvRequestBodyImageFile)
    ], ReceiptsPhotoToCsvRequestBody.prototype, "imageFile", void 0);
    return ReceiptsPhotoToCsvRequestBody;
}(SpeakeasyBase));
export { ReceiptsPhotoToCsvRequestBody };
var ReceiptsPhotoToCsvSecurity = /** @class */ (function (_super) {
    __extends(ReceiptsPhotoToCsvSecurity, _super);
    function ReceiptsPhotoToCsvSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], ReceiptsPhotoToCsvSecurity.prototype, "apikey", void 0);
    return ReceiptsPhotoToCsvSecurity;
}(SpeakeasyBase));
export { ReceiptsPhotoToCsvSecurity };
var ReceiptsPhotoToCsvRequest = /** @class */ (function (_super) {
    __extends(ReceiptsPhotoToCsvRequest, _super);
    function ReceiptsPhotoToCsvRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ReceiptsPhotoToCsvRequestBody)
    ], ReceiptsPhotoToCsvRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ReceiptsPhotoToCsvSecurity)
    ], ReceiptsPhotoToCsvRequest.prototype, "security", void 0);
    return ReceiptsPhotoToCsvRequest;
}(SpeakeasyBase));
export { ReceiptsPhotoToCsvRequest };
var ReceiptsPhotoToCsvResponse = /** @class */ (function (_super) {
    __extends(ReceiptsPhotoToCsvResponse, _super);
    function ReceiptsPhotoToCsvResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ReceiptsPhotoToCsvResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ReceiptsPhotoToCsvResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], ReceiptsPhotoToCsvResponse.prototype, "receiptsPhotoToCsv200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], ReceiptsPhotoToCsvResponse.prototype, "receiptsPhotoToCsv200TextJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ReceiptsPhotoToCsvResponse.prototype, "statusCode", void 0);
    return ReceiptsPhotoToCsvResponse;
}(SpeakeasyBase));
export { ReceiptsPhotoToCsvResponse };
