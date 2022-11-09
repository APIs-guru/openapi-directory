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
var AvatarsGetInitialsQueryParams = /** @class */ (function (_super) {
    __extends(AvatarsGetInitialsQueryParams, _super);
    function AvatarsGetInitialsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=background" }),
        __metadata("design:type", String)
    ], AvatarsGetInitialsQueryParams.prototype, "background", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=color" }),
        __metadata("design:type", String)
    ], AvatarsGetInitialsQueryParams.prototype, "color", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], AvatarsGetInitialsQueryParams.prototype, "height", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], AvatarsGetInitialsQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], AvatarsGetInitialsQueryParams.prototype, "width", void 0);
    return AvatarsGetInitialsQueryParams;
}(SpeakeasyBase));
export { AvatarsGetInitialsQueryParams };
var AvatarsGetInitialsSecurity = /** @class */ (function (_super) {
    __extends(AvatarsGetInitialsSecurity, _super);
    function AvatarsGetInitialsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], AvatarsGetInitialsSecurity.prototype, "jwt", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], AvatarsGetInitialsSecurity.prototype, "project", void 0);
    return AvatarsGetInitialsSecurity;
}(SpeakeasyBase));
export { AvatarsGetInitialsSecurity };
var AvatarsGetInitialsRequest = /** @class */ (function (_super) {
    __extends(AvatarsGetInitialsRequest, _super);
    function AvatarsGetInitialsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AvatarsGetInitialsQueryParams)
    ], AvatarsGetInitialsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AvatarsGetInitialsSecurity)
    ], AvatarsGetInitialsRequest.prototype, "security", void 0);
    return AvatarsGetInitialsRequest;
}(SpeakeasyBase));
export { AvatarsGetInitialsRequest };
var AvatarsGetInitialsResponse = /** @class */ (function (_super) {
    __extends(AvatarsGetInitialsResponse, _super);
    function AvatarsGetInitialsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AvatarsGetInitialsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AvatarsGetInitialsResponse.prototype, "statusCode", void 0);
    return AvatarsGetInitialsResponse;
}(SpeakeasyBase));
export { AvatarsGetInitialsResponse };
