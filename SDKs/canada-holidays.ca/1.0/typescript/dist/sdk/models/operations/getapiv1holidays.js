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
export var GetApiV1HolidaysFederalEnum;
(function (GetApiV1HolidaysFederalEnum) {
    GetApiV1HolidaysFederalEnum["One"] = "1";
    GetApiV1HolidaysFederalEnum["Zero"] = "0";
    GetApiV1HolidaysFederalEnum["True"] = "true";
    GetApiV1HolidaysFederalEnum["False"] = "false";
})(GetApiV1HolidaysFederalEnum || (GetApiV1HolidaysFederalEnum = {}));
var GetApiV1HolidaysQueryParams = /** @class */ (function (_super) {
    __extends(GetApiV1HolidaysQueryParams, _super);
    function GetApiV1HolidaysQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=federal" }),
        __metadata("design:type", String)
    ], GetApiV1HolidaysQueryParams.prototype, "federal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", String)
    ], GetApiV1HolidaysQueryParams.prototype, "year", void 0);
    return GetApiV1HolidaysQueryParams;
}(SpeakeasyBase));
export { GetApiV1HolidaysQueryParams };
var GetApiV1Holidays200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetApiV1Holidays200ApplicationJson, _super);
    function GetApiV1Holidays200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=holidays", elemType: shared.Holiday }),
        __metadata("design:type", Array)
    ], GetApiV1Holidays200ApplicationJson.prototype, "holidays", void 0);
    return GetApiV1Holidays200ApplicationJson;
}(SpeakeasyBase));
export { GetApiV1Holidays200ApplicationJson };
var GetApiV1HolidaysRequest = /** @class */ (function (_super) {
    __extends(GetApiV1HolidaysRequest, _super);
    function GetApiV1HolidaysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV1HolidaysQueryParams)
    ], GetApiV1HolidaysRequest.prototype, "queryParams", void 0);
    return GetApiV1HolidaysRequest;
}(SpeakeasyBase));
export { GetApiV1HolidaysRequest };
var GetApiV1HolidaysResponse = /** @class */ (function (_super) {
    __extends(GetApiV1HolidaysResponse, _super);
    function GetApiV1HolidaysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiV1HolidaysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiV1HolidaysResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV1Holidays200ApplicationJson)
    ], GetApiV1HolidaysResponse.prototype, "getApiV1Holidays200ApplicationJsonObject", void 0);
    return GetApiV1HolidaysResponse;
}(SpeakeasyBase));
export { GetApiV1HolidaysResponse };
