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
var UploadBoundarySecurityOption1 = /** @class */ (function (_super) {
    __extends(UploadBoundarySecurityOption1, _super);
    function UploadBoundarySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], UploadBoundarySecurityOption1.prototype, "apiKey", void 0);
    return UploadBoundarySecurityOption1;
}(SpeakeasyBase));
export { UploadBoundarySecurityOption1 };
var UploadBoundarySecurityOption2 = /** @class */ (function (_super) {
    __extends(UploadBoundarySecurityOption2, _super);
    function UploadBoundarySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2AuthorizationCode)
    ], UploadBoundarySecurityOption2.prototype, "oauth2AuthorizationCode", void 0);
    return UploadBoundarySecurityOption2;
}(SpeakeasyBase));
export { UploadBoundarySecurityOption2 };
var UploadBoundarySecurity = /** @class */ (function (_super) {
    __extends(UploadBoundarySecurity, _super);
    function UploadBoundarySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", UploadBoundarySecurityOption1)
    ], UploadBoundarySecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", UploadBoundarySecurityOption2)
    ], UploadBoundarySecurity.prototype, "option2", void 0);
    return UploadBoundarySecurity;
}(SpeakeasyBase));
export { UploadBoundarySecurity };
var UploadBoundaryRequest = /** @class */ (function (_super) {
    __extends(UploadBoundaryRequest, _super);
    function UploadBoundaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], UploadBoundaryRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UploadBoundarySecurity)
    ], UploadBoundaryRequest.prototype, "security", void 0);
    return UploadBoundaryRequest;
}(SpeakeasyBase));
export { UploadBoundaryRequest };
var UploadBoundaryResponse = /** @class */ (function (_super) {
    __extends(UploadBoundaryResponse, _super);
    function UploadBoundaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UploadBoundaryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], UploadBoundaryResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], UploadBoundaryResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UploadBoundaryResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UploadBoundaryResponse.prototype, "uploadedBoundaryId", void 0);
    return UploadBoundaryResponse;
}(SpeakeasyBase));
export { UploadBoundaryResponse };
