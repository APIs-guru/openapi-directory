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
var AvatarsGetCreditCardPathParams = /** @class */ (function (_super) {
    __extends(AvatarsGetCreditCardPathParams, _super);
    function AvatarsGetCreditCardPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=code" }),
        __metadata("design:type", String)
    ], AvatarsGetCreditCardPathParams.prototype, "code", void 0);
    return AvatarsGetCreditCardPathParams;
}(SpeakeasyBase));
export { AvatarsGetCreditCardPathParams };
var AvatarsGetCreditCardQueryParams = /** @class */ (function (_super) {
    __extends(AvatarsGetCreditCardQueryParams, _super);
    function AvatarsGetCreditCardQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], AvatarsGetCreditCardQueryParams.prototype, "height", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quality" }),
        __metadata("design:type", Number)
    ], AvatarsGetCreditCardQueryParams.prototype, "quality", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], AvatarsGetCreditCardQueryParams.prototype, "width", void 0);
    return AvatarsGetCreditCardQueryParams;
}(SpeakeasyBase));
export { AvatarsGetCreditCardQueryParams };
var AvatarsGetCreditCardSecurity = /** @class */ (function (_super) {
    __extends(AvatarsGetCreditCardSecurity, _super);
    function AvatarsGetCreditCardSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], AvatarsGetCreditCardSecurity.prototype, "jwt", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], AvatarsGetCreditCardSecurity.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], AvatarsGetCreditCardSecurity.prototype, "project", void 0);
    return AvatarsGetCreditCardSecurity;
}(SpeakeasyBase));
export { AvatarsGetCreditCardSecurity };
var AvatarsGetCreditCardRequest = /** @class */ (function (_super) {
    __extends(AvatarsGetCreditCardRequest, _super);
    function AvatarsGetCreditCardRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AvatarsGetCreditCardPathParams)
    ], AvatarsGetCreditCardRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AvatarsGetCreditCardQueryParams)
    ], AvatarsGetCreditCardRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AvatarsGetCreditCardSecurity)
    ], AvatarsGetCreditCardRequest.prototype, "security", void 0);
    return AvatarsGetCreditCardRequest;
}(SpeakeasyBase));
export { AvatarsGetCreditCardRequest };
var AvatarsGetCreditCardResponse = /** @class */ (function (_super) {
    __extends(AvatarsGetCreditCardResponse, _super);
    function AvatarsGetCreditCardResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AvatarsGetCreditCardResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AvatarsGetCreditCardResponse.prototype, "statusCode", void 0);
    return AvatarsGetCreditCardResponse;
}(SpeakeasyBase));
export { AvatarsGetCreditCardResponse };
