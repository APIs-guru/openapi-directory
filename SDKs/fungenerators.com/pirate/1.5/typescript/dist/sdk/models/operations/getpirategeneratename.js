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
var GetPirateGenerateNameQueryParams = /** @class */ (function (_super) {
    __extends(GetPirateGenerateNameQueryParams, _super);
    function GetPirateGenerateNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetPirateGenerateNameQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=variation" }),
        __metadata("design:type", String)
    ], GetPirateGenerateNameQueryParams.prototype, "variation", void 0);
    return GetPirateGenerateNameQueryParams;
}(SpeakeasyBase));
export { GetPirateGenerateNameQueryParams };
var GetPirateGenerateNameSecurity = /** @class */ (function (_super) {
    __extends(GetPirateGenerateNameSecurity, _super);
    function GetPirateGenerateNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXFungeneratorsApiSecret)
    ], GetPirateGenerateNameSecurity.prototype, "xFungeneratorsApiSecret", void 0);
    return GetPirateGenerateNameSecurity;
}(SpeakeasyBase));
export { GetPirateGenerateNameSecurity };
var GetPirateGenerateNameRequest = /** @class */ (function (_super) {
    __extends(GetPirateGenerateNameRequest, _super);
    function GetPirateGenerateNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetPirateGenerateNameQueryParams)
    ], GetPirateGenerateNameRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetPirateGenerateNameSecurity)
    ], GetPirateGenerateNameRequest.prototype, "security", void 0);
    return GetPirateGenerateNameRequest;
}(SpeakeasyBase));
export { GetPirateGenerateNameRequest };
var GetPirateGenerateNameResponse = /** @class */ (function (_super) {
    __extends(GetPirateGenerateNameResponse, _super);
    function GetPirateGenerateNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetPirateGenerateNameResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetPirateGenerateNameResponse.prototype, "statusCode", void 0);
    return GetPirateGenerateNameResponse;
}(SpeakeasyBase));
export { GetPirateGenerateNameResponse };
