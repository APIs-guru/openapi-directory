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
var AvatarsGetBrowserPathParams = /** @class */ (function (_super) {
    __extends(AvatarsGetBrowserPathParams, _super);
    function AvatarsGetBrowserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=code" }),
        __metadata("design:type", String)
    ], AvatarsGetBrowserPathParams.prototype, "code", void 0);
    return AvatarsGetBrowserPathParams;
}(SpeakeasyBase));
export { AvatarsGetBrowserPathParams };
var AvatarsGetBrowserQueryParams = /** @class */ (function (_super) {
    __extends(AvatarsGetBrowserQueryParams, _super);
    function AvatarsGetBrowserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], AvatarsGetBrowserQueryParams.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" }),
        __metadata("design:type", Number)
    ], AvatarsGetBrowserQueryParams.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], AvatarsGetBrowserQueryParams.prototype, "width", void 0);
    return AvatarsGetBrowserQueryParams;
}(SpeakeasyBase));
export { AvatarsGetBrowserQueryParams };
var AvatarsGetBrowserSecurity = /** @class */ (function (_super) {
    __extends(AvatarsGetBrowserSecurity, _super);
    function AvatarsGetBrowserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], AvatarsGetBrowserSecurity.prototype, "jwt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], AvatarsGetBrowserSecurity.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], AvatarsGetBrowserSecurity.prototype, "project", void 0);
    return AvatarsGetBrowserSecurity;
}(SpeakeasyBase));
export { AvatarsGetBrowserSecurity };
var AvatarsGetBrowserRequest = /** @class */ (function (_super) {
    __extends(AvatarsGetBrowserRequest, _super);
    function AvatarsGetBrowserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AvatarsGetBrowserPathParams)
    ], AvatarsGetBrowserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AvatarsGetBrowserQueryParams)
    ], AvatarsGetBrowserRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AvatarsGetBrowserSecurity)
    ], AvatarsGetBrowserRequest.prototype, "security", void 0);
    return AvatarsGetBrowserRequest;
}(SpeakeasyBase));
export { AvatarsGetBrowserRequest };
var AvatarsGetBrowserResponse = /** @class */ (function (_super) {
    __extends(AvatarsGetBrowserResponse, _super);
    function AvatarsGetBrowserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AvatarsGetBrowserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AvatarsGetBrowserResponse.prototype, "statusCode", void 0);
    return AvatarsGetBrowserResponse;
}(SpeakeasyBase));
export { AvatarsGetBrowserResponse };
