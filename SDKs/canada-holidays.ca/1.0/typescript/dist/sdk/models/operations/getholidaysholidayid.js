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
var GetHolidaysHolidayIdPathParams = /** @class */ (function (_super) {
    __extends(GetHolidaysHolidayIdPathParams, _super);
    function GetHolidaysHolidayIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=holidayId" }),
        __metadata("design:type", Number)
    ], GetHolidaysHolidayIdPathParams.prototype, "holidayId", void 0);
    return GetHolidaysHolidayIdPathParams;
}(SpeakeasyBase));
export { GetHolidaysHolidayIdPathParams };
var GetHolidaysHolidayIdQueryParams = /** @class */ (function (_super) {
    __extends(GetHolidaysHolidayIdQueryParams, _super);
    function GetHolidaysHolidayIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", String)
    ], GetHolidaysHolidayIdQueryParams.prototype, "year", void 0);
    return GetHolidaysHolidayIdQueryParams;
}(SpeakeasyBase));
export { GetHolidaysHolidayIdQueryParams };
var GetHolidaysHolidayId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetHolidaysHolidayId200ApplicationJson, _super);
    function GetHolidaysHolidayId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=holiday" }),
        __metadata("design:type", shared.Holiday)
    ], GetHolidaysHolidayId200ApplicationJson.prototype, "holiday", void 0);
    return GetHolidaysHolidayId200ApplicationJson;
}(SpeakeasyBase));
export { GetHolidaysHolidayId200ApplicationJson };
var GetHolidaysHolidayId404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetHolidaysHolidayId404ApplicationJson, _super);
    function GetHolidaysHolidayId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", shared.Error)
    ], GetHolidaysHolidayId404ApplicationJson.prototype, "error", void 0);
    return GetHolidaysHolidayId404ApplicationJson;
}(SpeakeasyBase));
export { GetHolidaysHolidayId404ApplicationJson };
var GetHolidaysHolidayIdRequest = /** @class */ (function (_super) {
    __extends(GetHolidaysHolidayIdRequest, _super);
    function GetHolidaysHolidayIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHolidaysHolidayIdPathParams)
    ], GetHolidaysHolidayIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHolidaysHolidayIdQueryParams)
    ], GetHolidaysHolidayIdRequest.prototype, "queryParams", void 0);
    return GetHolidaysHolidayIdRequest;
}(SpeakeasyBase));
export { GetHolidaysHolidayIdRequest };
var GetHolidaysHolidayIdResponse = /** @class */ (function (_super) {
    __extends(GetHolidaysHolidayIdResponse, _super);
    function GetHolidaysHolidayIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetHolidaysHolidayIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetHolidaysHolidayIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHolidaysHolidayId200ApplicationJson)
    ], GetHolidaysHolidayIdResponse.prototype, "getHolidaysHolidayId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHolidaysHolidayId404ApplicationJson)
    ], GetHolidaysHolidayIdResponse.prototype, "getHolidaysHolidayId404ApplicationJsonObject", void 0);
    return GetHolidaysHolidayIdResponse;
}(SpeakeasyBase));
export { GetHolidaysHolidayIdResponse };
