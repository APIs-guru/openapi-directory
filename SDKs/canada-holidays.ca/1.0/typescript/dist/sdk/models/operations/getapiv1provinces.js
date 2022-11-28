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
var GetApiV1ProvincesQueryParams = /** @class */ (function (_super) {
    __extends(GetApiV1ProvincesQueryParams, _super);
    function GetApiV1ProvincesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", String)
    ], GetApiV1ProvincesQueryParams.prototype, "year", void 0);
    return GetApiV1ProvincesQueryParams;
}(SpeakeasyBase));
export { GetApiV1ProvincesQueryParams };
var GetApiV1Provinces200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetApiV1Provinces200ApplicationJson, _super);
    function GetApiV1Provinces200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provinces", elemType: shared.Province }),
        __metadata("design:type", Array)
    ], GetApiV1Provinces200ApplicationJson.prototype, "provinces", void 0);
    return GetApiV1Provinces200ApplicationJson;
}(SpeakeasyBase));
export { GetApiV1Provinces200ApplicationJson };
var GetApiV1ProvincesRequest = /** @class */ (function (_super) {
    __extends(GetApiV1ProvincesRequest, _super);
    function GetApiV1ProvincesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV1ProvincesQueryParams)
    ], GetApiV1ProvincesRequest.prototype, "queryParams", void 0);
    return GetApiV1ProvincesRequest;
}(SpeakeasyBase));
export { GetApiV1ProvincesRequest };
var GetApiV1ProvincesResponse = /** @class */ (function (_super) {
    __extends(GetApiV1ProvincesResponse, _super);
    function GetApiV1ProvincesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiV1ProvincesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiV1ProvincesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV1Provinces200ApplicationJson)
    ], GetApiV1ProvincesResponse.prototype, "getApiV1Provinces200ApplicationJsonObject", void 0);
    return GetApiV1ProvincesResponse;
}(SpeakeasyBase));
export { GetApiV1ProvincesResponse };
