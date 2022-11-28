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
var GetShakespeareGenerateLoremIpsumQueryParams = /** @class */ (function (_super) {
    __extends(GetShakespeareGenerateLoremIpsumQueryParams, _super);
    function GetShakespeareGenerateLoremIpsumQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetShakespeareGenerateLoremIpsumQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetShakespeareGenerateLoremIpsumQueryParams.prototype, "type", void 0);
    return GetShakespeareGenerateLoremIpsumQueryParams;
}(SpeakeasyBase));
export { GetShakespeareGenerateLoremIpsumQueryParams };
var GetShakespeareGenerateLoremIpsumSecurity = /** @class */ (function (_super) {
    __extends(GetShakespeareGenerateLoremIpsumSecurity, _super);
    function GetShakespeareGenerateLoremIpsumSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXFungeneratorsApiSecret)
    ], GetShakespeareGenerateLoremIpsumSecurity.prototype, "xFungeneratorsApiSecret", void 0);
    return GetShakespeareGenerateLoremIpsumSecurity;
}(SpeakeasyBase));
export { GetShakespeareGenerateLoremIpsumSecurity };
var GetShakespeareGenerateLoremIpsumRequest = /** @class */ (function (_super) {
    __extends(GetShakespeareGenerateLoremIpsumRequest, _super);
    function GetShakespeareGenerateLoremIpsumRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetShakespeareGenerateLoremIpsumQueryParams)
    ], GetShakespeareGenerateLoremIpsumRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetShakespeareGenerateLoremIpsumSecurity)
    ], GetShakespeareGenerateLoremIpsumRequest.prototype, "security", void 0);
    return GetShakespeareGenerateLoremIpsumRequest;
}(SpeakeasyBase));
export { GetShakespeareGenerateLoremIpsumRequest };
var GetShakespeareGenerateLoremIpsumResponse = /** @class */ (function (_super) {
    __extends(GetShakespeareGenerateLoremIpsumResponse, _super);
    function GetShakespeareGenerateLoremIpsumResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetShakespeareGenerateLoremIpsumResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetShakespeareGenerateLoremIpsumResponse.prototype, "statusCode", void 0);
    return GetShakespeareGenerateLoremIpsumResponse;
}(SpeakeasyBase));
export { GetShakespeareGenerateLoremIpsumResponse };
