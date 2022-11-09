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
var AvatarsGetImageQueryParams = /** @class */ (function (_super) {
    __extends(AvatarsGetImageQueryParams, _super);
    function AvatarsGetImageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], AvatarsGetImageQueryParams.prototype, "height", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=url" }),
        __metadata("design:type", String)
    ], AvatarsGetImageQueryParams.prototype, "url", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], AvatarsGetImageQueryParams.prototype, "width", void 0);
    return AvatarsGetImageQueryParams;
}(SpeakeasyBase));
export { AvatarsGetImageQueryParams };
var AvatarsGetImageSecurity = /** @class */ (function (_super) {
    __extends(AvatarsGetImageSecurity, _super);
    function AvatarsGetImageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], AvatarsGetImageSecurity.prototype, "jwt", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], AvatarsGetImageSecurity.prototype, "project", void 0);
    return AvatarsGetImageSecurity;
}(SpeakeasyBase));
export { AvatarsGetImageSecurity };
var AvatarsGetImageRequest = /** @class */ (function (_super) {
    __extends(AvatarsGetImageRequest, _super);
    function AvatarsGetImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AvatarsGetImageQueryParams)
    ], AvatarsGetImageRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AvatarsGetImageSecurity)
    ], AvatarsGetImageRequest.prototype, "security", void 0);
    return AvatarsGetImageRequest;
}(SpeakeasyBase));
export { AvatarsGetImageRequest };
var AvatarsGetImageResponse = /** @class */ (function (_super) {
    __extends(AvatarsGetImageResponse, _super);
    function AvatarsGetImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AvatarsGetImageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AvatarsGetImageResponse.prototype, "statusCode", void 0);
    return AvatarsGetImageResponse;
}(SpeakeasyBase));
export { AvatarsGetImageResponse };
