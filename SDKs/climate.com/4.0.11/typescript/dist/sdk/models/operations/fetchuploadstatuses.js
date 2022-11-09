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
var FetchUploadStatusesSecurityOption1 = /** @class */ (function (_super) {
    __extends(FetchUploadStatusesSecurityOption1, _super);
    function FetchUploadStatusesSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], FetchUploadStatusesSecurityOption1.prototype, "apiKey", void 0);
    return FetchUploadStatusesSecurityOption1;
}(SpeakeasyBase));
export { FetchUploadStatusesSecurityOption1 };
var FetchUploadStatusesSecurityOption2 = /** @class */ (function (_super) {
    __extends(FetchUploadStatusesSecurityOption2, _super);
    function FetchUploadStatusesSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2AuthorizationCode)
    ], FetchUploadStatusesSecurityOption2.prototype, "oauth2AuthorizationCode", void 0);
    return FetchUploadStatusesSecurityOption2;
}(SpeakeasyBase));
export { FetchUploadStatusesSecurityOption2 };
var FetchUploadStatusesSecurity = /** @class */ (function (_super) {
    __extends(FetchUploadStatusesSecurity, _super);
    function FetchUploadStatusesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FetchUploadStatusesSecurityOption1)
    ], FetchUploadStatusesSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FetchUploadStatusesSecurityOption2)
    ], FetchUploadStatusesSecurity.prototype, "option2", void 0);
    return FetchUploadStatusesSecurity;
}(SpeakeasyBase));
export { FetchUploadStatusesSecurity };
var FetchUploadStatusesRequest = /** @class */ (function (_super) {
    __extends(FetchUploadStatusesRequest, _super);
    function FetchUploadStatusesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UploadStatusQuery)
    ], FetchUploadStatusesRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchUploadStatusesSecurity)
    ], FetchUploadStatusesRequest.prototype, "security", void 0);
    return FetchUploadStatusesRequest;
}(SpeakeasyBase));
export { FetchUploadStatusesRequest };
var FetchUploadStatusesResponse = /** @class */ (function (_super) {
    __extends(FetchUploadStatusesResponse, _super);
    function FetchUploadStatusesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchUploadStatusesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], FetchUploadStatusesResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], FetchUploadStatusesResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchUploadStatusesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UploadStatuses)
    ], FetchUploadStatusesResponse.prototype, "uploadStatuses", void 0);
    return FetchUploadStatusesResponse;
}(SpeakeasyBase));
export { FetchUploadStatusesResponse };
