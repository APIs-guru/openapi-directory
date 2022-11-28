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
export var UploadEvidenceFileServerList = [
    "https://apiz.ebay.com{basePath}",
];
var UploadEvidenceFilePathParams = /** @class */ (function (_super) {
    __extends(UploadEvidenceFilePathParams, _super);
    function UploadEvidenceFilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" }),
        __metadata("design:type", String)
    ], UploadEvidenceFilePathParams.prototype, "paymentDisputeId", void 0);
    return UploadEvidenceFilePathParams;
}(SpeakeasyBase));
export { UploadEvidenceFilePathParams };
var UploadEvidenceFileSecurity = /** @class */ (function (_super) {
    __extends(UploadEvidenceFileSecurity, _super);
    function UploadEvidenceFileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], UploadEvidenceFileSecurity.prototype, "apiAuth", void 0);
    return UploadEvidenceFileSecurity;
}(SpeakeasyBase));
export { UploadEvidenceFileSecurity };
var UploadEvidenceFileRequest = /** @class */ (function (_super) {
    __extends(UploadEvidenceFileRequest, _super);
    function UploadEvidenceFileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UploadEvidenceFileRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UploadEvidenceFilePathParams)
    ], UploadEvidenceFileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UploadEvidenceFileSecurity)
    ], UploadEvidenceFileRequest.prototype, "security", void 0);
    return UploadEvidenceFileRequest;
}(SpeakeasyBase));
export { UploadEvidenceFileRequest };
var UploadEvidenceFileResponse = /** @class */ (function (_super) {
    __extends(UploadEvidenceFileResponse, _super);
    function UploadEvidenceFileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UploadEvidenceFileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FileEvidence)
    ], UploadEvidenceFileResponse.prototype, "fileEvidence", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UploadEvidenceFileResponse.prototype, "statusCode", void 0);
    return UploadEvidenceFileResponse;
}(SpeakeasyBase));
export { UploadEvidenceFileResponse };
