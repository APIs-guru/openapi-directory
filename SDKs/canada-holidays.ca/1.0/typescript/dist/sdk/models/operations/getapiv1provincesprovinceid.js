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
export var GetApiV1ProvincesProvinceIdProvinceIdEnum;
(function (GetApiV1ProvincesProvinceIdProvinceIdEnum) {
    GetApiV1ProvincesProvinceIdProvinceIdEnum["Ab"] = "AB";
    GetApiV1ProvincesProvinceIdProvinceIdEnum["Bc"] = "BC";
    GetApiV1ProvincesProvinceIdProvinceIdEnum["Mb"] = "MB";
    GetApiV1ProvincesProvinceIdProvinceIdEnum["Nb"] = "NB";
    GetApiV1ProvincesProvinceIdProvinceIdEnum["Nl"] = "NL";
    GetApiV1ProvincesProvinceIdProvinceIdEnum["Ns"] = "NS";
    GetApiV1ProvincesProvinceIdProvinceIdEnum["Nt"] = "NT";
    GetApiV1ProvincesProvinceIdProvinceIdEnum["Nu"] = "NU";
    GetApiV1ProvincesProvinceIdProvinceIdEnum["On"] = "ON";
    GetApiV1ProvincesProvinceIdProvinceIdEnum["Pe"] = "PE";
    GetApiV1ProvincesProvinceIdProvinceIdEnum["Qc"] = "QC";
    GetApiV1ProvincesProvinceIdProvinceIdEnum["Sk"] = "SK";
    GetApiV1ProvincesProvinceIdProvinceIdEnum["Yt"] = "YT";
})(GetApiV1ProvincesProvinceIdProvinceIdEnum || (GetApiV1ProvincesProvinceIdProvinceIdEnum = {}));
var GetApiV1ProvincesProvinceIdPathParams = /** @class */ (function (_super) {
    __extends(GetApiV1ProvincesProvinceIdPathParams, _super);
    function GetApiV1ProvincesProvinceIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provinceId" }),
        __metadata("design:type", String)
    ], GetApiV1ProvincesProvinceIdPathParams.prototype, "provinceId", void 0);
    return GetApiV1ProvincesProvinceIdPathParams;
}(SpeakeasyBase));
export { GetApiV1ProvincesProvinceIdPathParams };
var GetApiV1ProvincesProvinceIdQueryParams = /** @class */ (function (_super) {
    __extends(GetApiV1ProvincesProvinceIdQueryParams, _super);
    function GetApiV1ProvincesProvinceIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", String)
    ], GetApiV1ProvincesProvinceIdQueryParams.prototype, "year", void 0);
    return GetApiV1ProvincesProvinceIdQueryParams;
}(SpeakeasyBase));
export { GetApiV1ProvincesProvinceIdQueryParams };
var GetApiV1ProvincesProvinceId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetApiV1ProvincesProvinceId200ApplicationJson, _super);
    function GetApiV1ProvincesProvinceId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=province" }),
        __metadata("design:type", shared.Province)
    ], GetApiV1ProvincesProvinceId200ApplicationJson.prototype, "province", void 0);
    return GetApiV1ProvincesProvinceId200ApplicationJson;
}(SpeakeasyBase));
export { GetApiV1ProvincesProvinceId200ApplicationJson };
var GetApiV1ProvincesProvinceId404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetApiV1ProvincesProvinceId404ApplicationJson, _super);
    function GetApiV1ProvincesProvinceId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", shared.Error)
    ], GetApiV1ProvincesProvinceId404ApplicationJson.prototype, "error", void 0);
    return GetApiV1ProvincesProvinceId404ApplicationJson;
}(SpeakeasyBase));
export { GetApiV1ProvincesProvinceId404ApplicationJson };
var GetApiV1ProvincesProvinceIdRequest = /** @class */ (function (_super) {
    __extends(GetApiV1ProvincesProvinceIdRequest, _super);
    function GetApiV1ProvincesProvinceIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV1ProvincesProvinceIdPathParams)
    ], GetApiV1ProvincesProvinceIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV1ProvincesProvinceIdQueryParams)
    ], GetApiV1ProvincesProvinceIdRequest.prototype, "queryParams", void 0);
    return GetApiV1ProvincesProvinceIdRequest;
}(SpeakeasyBase));
export { GetApiV1ProvincesProvinceIdRequest };
var GetApiV1ProvincesProvinceIdResponse = /** @class */ (function (_super) {
    __extends(GetApiV1ProvincesProvinceIdResponse, _super);
    function GetApiV1ProvincesProvinceIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiV1ProvincesProvinceIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiV1ProvincesProvinceIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV1ProvincesProvinceId200ApplicationJson)
    ], GetApiV1ProvincesProvinceIdResponse.prototype, "getApiV1ProvincesProvinceId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV1ProvincesProvinceId404ApplicationJson)
    ], GetApiV1ProvincesProvinceIdResponse.prototype, "getApiV1ProvincesProvinceId404ApplicationJsonObject", void 0);
    return GetApiV1ProvincesProvinceIdResponse;
}(SpeakeasyBase));
export { GetApiV1ProvincesProvinceIdResponse };
