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
var CreateCustomFileFromUploadCreateCustomFileData = /** @class */ (function (_super) {
    __extends(CreateCustomFileFromUploadCreateCustomFileData, _super);
    function CreateCustomFileFromUploadCreateCustomFileData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cache_id" }),
        __metadata("design:type", String)
    ], CreateCustomFileFromUploadCreateCustomFileData.prototype, "cacheId", void 0);
    return CreateCustomFileFromUploadCreateCustomFileData;
}(SpeakeasyBase));
export { CreateCustomFileFromUploadCreateCustomFileData };
var CreateCustomFileFromUploadSecurity = /** @class */ (function (_super) {
    __extends(CreateCustomFileFromUploadSecurity, _super);
    function CreateCustomFileFromUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], CreateCustomFileFromUploadSecurity.prototype, "apiTokenBasic", void 0);
    return CreateCustomFileFromUploadSecurity;
}(SpeakeasyBase));
export { CreateCustomFileFromUploadSecurity };
var CreateCustomFileFromUploadCreateCustomFileResponseCustomFile = /** @class */ (function (_super) {
    __extends(CreateCustomFileFromUploadCreateCustomFileResponseCustomFile, _super);
    function CreateCustomFileFromUploadCreateCustomFileResponseCustomFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateCustomFileFromUploadCreateCustomFileResponseCustomFile.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CreateCustomFileFromUploadCreateCustomFileResponseCustomFile.prototype, "url", void 0);
    return CreateCustomFileFromUploadCreateCustomFileResponseCustomFile;
}(SpeakeasyBase));
export { CreateCustomFileFromUploadCreateCustomFileResponseCustomFile };
export var CreateCustomFileFromUploadCreateCustomFileResponseStatusEnum;
(function (CreateCustomFileFromUploadCreateCustomFileResponseStatusEnum) {
    CreateCustomFileFromUploadCreateCustomFileResponseStatusEnum["Success"] = "success";
    CreateCustomFileFromUploadCreateCustomFileResponseStatusEnum["Error"] = "error";
})(CreateCustomFileFromUploadCreateCustomFileResponseStatusEnum || (CreateCustomFileFromUploadCreateCustomFileResponseStatusEnum = {}));
var CreateCustomFileFromUploadCreateCustomFileResponse = /** @class */ (function (_super) {
    __extends(CreateCustomFileFromUploadCreateCustomFileResponse, _super);
    function CreateCustomFileFromUploadCreateCustomFileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_file" }),
        __metadata("design:type", CreateCustomFileFromUploadCreateCustomFileResponseCustomFile)
    ], CreateCustomFileFromUploadCreateCustomFileResponse.prototype, "customFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], CreateCustomFileFromUploadCreateCustomFileResponse.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CreateCustomFileFromUploadCreateCustomFileResponse.prototype, "status", void 0);
    return CreateCustomFileFromUploadCreateCustomFileResponse;
}(SpeakeasyBase));
export { CreateCustomFileFromUploadCreateCustomFileResponse };
var CreateCustomFileFromUploadRequest = /** @class */ (function (_super) {
    __extends(CreateCustomFileFromUploadRequest, _super);
    function CreateCustomFileFromUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateCustomFileFromUploadCreateCustomFileData)
    ], CreateCustomFileFromUploadRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCustomFileFromUploadSecurity)
    ], CreateCustomFileFromUploadRequest.prototype, "security", void 0);
    return CreateCustomFileFromUploadRequest;
}(SpeakeasyBase));
export { CreateCustomFileFromUploadRequest };
var CreateCustomFileFromUploadResponse = /** @class */ (function (_super) {
    __extends(CreateCustomFileFromUploadResponse, _super);
    function CreateCustomFileFromUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCustomFileFromUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCustomFileFromUploadResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], CreateCustomFileFromUploadResponse.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCustomFileFromUploadCreateCustomFileResponse)
    ], CreateCustomFileFromUploadResponse.prototype, "createCustomFileResponse", void 0);
    return CreateCustomFileFromUploadResponse;
}(SpeakeasyBase));
export { CreateCustomFileFromUploadResponse };
