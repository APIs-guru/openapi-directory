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
var AvatarsGetFlagPathParams = /** @class */ (function (_super) {
    __extends(AvatarsGetFlagPathParams, _super);
    function AvatarsGetFlagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=code" }),
        __metadata("design:type", String)
    ], AvatarsGetFlagPathParams.prototype, "code", void 0);
    return AvatarsGetFlagPathParams;
}(SpeakeasyBase));
export { AvatarsGetFlagPathParams };
var AvatarsGetFlagQueryParams = /** @class */ (function (_super) {
    __extends(AvatarsGetFlagQueryParams, _super);
    function AvatarsGetFlagQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], AvatarsGetFlagQueryParams.prototype, "height", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quality" }),
        __metadata("design:type", Number)
    ], AvatarsGetFlagQueryParams.prototype, "quality", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], AvatarsGetFlagQueryParams.prototype, "width", void 0);
    return AvatarsGetFlagQueryParams;
}(SpeakeasyBase));
export { AvatarsGetFlagQueryParams };
var AvatarsGetFlagSecurity = /** @class */ (function (_super) {
    __extends(AvatarsGetFlagSecurity, _super);
    function AvatarsGetFlagSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], AvatarsGetFlagSecurity.prototype, "jwt", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], AvatarsGetFlagSecurity.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], AvatarsGetFlagSecurity.prototype, "project", void 0);
    return AvatarsGetFlagSecurity;
}(SpeakeasyBase));
export { AvatarsGetFlagSecurity };
var AvatarsGetFlagRequest = /** @class */ (function (_super) {
    __extends(AvatarsGetFlagRequest, _super);
    function AvatarsGetFlagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AvatarsGetFlagPathParams)
    ], AvatarsGetFlagRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AvatarsGetFlagQueryParams)
    ], AvatarsGetFlagRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AvatarsGetFlagSecurity)
    ], AvatarsGetFlagRequest.prototype, "security", void 0);
    return AvatarsGetFlagRequest;
}(SpeakeasyBase));
export { AvatarsGetFlagRequest };
var AvatarsGetFlagResponse = /** @class */ (function (_super) {
    __extends(AvatarsGetFlagResponse, _super);
    function AvatarsGetFlagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AvatarsGetFlagResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AvatarsGetFlagResponse.prototype, "statusCode", void 0);
    return AvatarsGetFlagResponse;
}(SpeakeasyBase));
export { AvatarsGetFlagResponse };
