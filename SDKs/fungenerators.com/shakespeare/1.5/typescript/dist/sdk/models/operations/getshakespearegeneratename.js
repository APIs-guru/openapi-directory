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
var GetShakespeareGenerateNameQueryParams = /** @class */ (function (_super) {
    __extends(GetShakespeareGenerateNameQueryParams, _super);
    function GetShakespeareGenerateNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetShakespeareGenerateNameQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=variation" }),
        __metadata("design:type", String)
    ], GetShakespeareGenerateNameQueryParams.prototype, "variation", void 0);
    return GetShakespeareGenerateNameQueryParams;
}(SpeakeasyBase));
export { GetShakespeareGenerateNameQueryParams };
var GetShakespeareGenerateNameSecurity = /** @class */ (function (_super) {
    __extends(GetShakespeareGenerateNameSecurity, _super);
    function GetShakespeareGenerateNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXFungeneratorsApiSecret)
    ], GetShakespeareGenerateNameSecurity.prototype, "xFungeneratorsApiSecret", void 0);
    return GetShakespeareGenerateNameSecurity;
}(SpeakeasyBase));
export { GetShakespeareGenerateNameSecurity };
var GetShakespeareGenerateNameRequest = /** @class */ (function (_super) {
    __extends(GetShakespeareGenerateNameRequest, _super);
    function GetShakespeareGenerateNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetShakespeareGenerateNameQueryParams)
    ], GetShakespeareGenerateNameRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetShakespeareGenerateNameSecurity)
    ], GetShakespeareGenerateNameRequest.prototype, "security", void 0);
    return GetShakespeareGenerateNameRequest;
}(SpeakeasyBase));
export { GetShakespeareGenerateNameRequest };
var GetShakespeareGenerateNameResponse = /** @class */ (function (_super) {
    __extends(GetShakespeareGenerateNameResponse, _super);
    function GetShakespeareGenerateNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetShakespeareGenerateNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetShakespeareGenerateNameResponse.prototype, "statusCode", void 0);
    return GetShakespeareGenerateNameResponse;
}(SpeakeasyBase));
export { GetShakespeareGenerateNameResponse };
