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
var AvatarsGetQrQueryParams = /** @class */ (function (_super) {
    __extends(AvatarsGetQrQueryParams, _super);
    function AvatarsGetQrQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=download" }),
        __metadata("design:type", Boolean)
    ], AvatarsGetQrQueryParams.prototype, "download", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=margin" }),
        __metadata("design:type", Number)
    ], AvatarsGetQrQueryParams.prototype, "margin", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", Number)
    ], AvatarsGetQrQueryParams.prototype, "size", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], AvatarsGetQrQueryParams.prototype, "text", void 0);
    return AvatarsGetQrQueryParams;
}(SpeakeasyBase));
export { AvatarsGetQrQueryParams };
var AvatarsGetQrSecurity = /** @class */ (function (_super) {
    __extends(AvatarsGetQrSecurity, _super);
    function AvatarsGetQrSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], AvatarsGetQrSecurity.prototype, "jwt", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], AvatarsGetQrSecurity.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], AvatarsGetQrSecurity.prototype, "project", void 0);
    return AvatarsGetQrSecurity;
}(SpeakeasyBase));
export { AvatarsGetQrSecurity };
var AvatarsGetQrRequest = /** @class */ (function (_super) {
    __extends(AvatarsGetQrRequest, _super);
    function AvatarsGetQrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AvatarsGetQrQueryParams)
    ], AvatarsGetQrRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AvatarsGetQrSecurity)
    ], AvatarsGetQrRequest.prototype, "security", void 0);
    return AvatarsGetQrRequest;
}(SpeakeasyBase));
export { AvatarsGetQrRequest };
var AvatarsGetQrResponse = /** @class */ (function (_super) {
    __extends(AvatarsGetQrResponse, _super);
    function AvatarsGetQrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AvatarsGetQrResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AvatarsGetQrResponse.prototype, "statusCode", void 0);
    return AvatarsGetQrResponse;
}(SpeakeasyBase));
export { AvatarsGetQrResponse };
