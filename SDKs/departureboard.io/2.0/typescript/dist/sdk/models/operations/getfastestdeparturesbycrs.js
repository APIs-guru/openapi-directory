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
var GetFastestDeparturesByCrsPathParams = /** @class */ (function (_super) {
    __extends(GetFastestDeparturesByCrsPathParams, _super);
    function GetFastestDeparturesByCrsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CRS" }),
        __metadata("design:type", String)
    ], GetFastestDeparturesByCrsPathParams.prototype, "crs", void 0);
    return GetFastestDeparturesByCrsPathParams;
}(SpeakeasyBase));
export { GetFastestDeparturesByCrsPathParams };
var GetFastestDeparturesByCrsQueryParams = /** @class */ (function (_super) {
    __extends(GetFastestDeparturesByCrsQueryParams, _super);
    function GetFastestDeparturesByCrsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apiKey" }),
        __metadata("design:type", String)
    ], GetFastestDeparturesByCrsQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterList" }),
        __metadata("design:type", String)
    ], GetFastestDeparturesByCrsQueryParams.prototype, "filterList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceDetails" }),
        __metadata("design:type", Boolean)
    ], GetFastestDeparturesByCrsQueryParams.prototype, "serviceDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeOffset" }),
        __metadata("design:type", Number)
    ], GetFastestDeparturesByCrsQueryParams.prototype, "timeOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeWindow" }),
        __metadata("design:type", Number)
    ], GetFastestDeparturesByCrsQueryParams.prototype, "timeWindow", void 0);
    return GetFastestDeparturesByCrsQueryParams;
}(SpeakeasyBase));
export { GetFastestDeparturesByCrsQueryParams };
var GetFastestDeparturesByCrsRequest = /** @class */ (function (_super) {
    __extends(GetFastestDeparturesByCrsRequest, _super);
    function GetFastestDeparturesByCrsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFastestDeparturesByCrsPathParams)
    ], GetFastestDeparturesByCrsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFastestDeparturesByCrsQueryParams)
    ], GetFastestDeparturesByCrsRequest.prototype, "queryParams", void 0);
    return GetFastestDeparturesByCrsRequest;
}(SpeakeasyBase));
export { GetFastestDeparturesByCrsRequest };
var GetFastestDeparturesByCrsResponse = /** @class */ (function (_super) {
    __extends(GetFastestDeparturesByCrsResponse, _super);
    function GetFastestDeparturesByCrsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFastestDeparturesByCrsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFastestDeparturesByCrsResponse.prototype, "statusCode", void 0);
    return GetFastestDeparturesByCrsResponse;
}(SpeakeasyBase));
export { GetFastestDeparturesByCrsResponse };
