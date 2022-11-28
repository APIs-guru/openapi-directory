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
var GetArrivalsByCrsPathParams = /** @class */ (function (_super) {
    __extends(GetArrivalsByCrsPathParams, _super);
    function GetArrivalsByCrsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CRS" }),
        __metadata("design:type", String)
    ], GetArrivalsByCrsPathParams.prototype, "crs", void 0);
    return GetArrivalsByCrsPathParams;
}(SpeakeasyBase));
export { GetArrivalsByCrsPathParams };
var GetArrivalsByCrsQueryParams = /** @class */ (function (_super) {
    __extends(GetArrivalsByCrsQueryParams, _super);
    function GetArrivalsByCrsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apiKey" }),
        __metadata("design:type", String)
    ], GetArrivalsByCrsQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterStation" }),
        __metadata("design:type", String)
    ], GetArrivalsByCrsQueryParams.prototype, "filterStation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numServices" }),
        __metadata("design:type", Number)
    ], GetArrivalsByCrsQueryParams.prototype, "numServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceDetails" }),
        __metadata("design:type", Boolean)
    ], GetArrivalsByCrsQueryParams.prototype, "serviceDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeOffset" }),
        __metadata("design:type", Number)
    ], GetArrivalsByCrsQueryParams.prototype, "timeOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeWindow" }),
        __metadata("design:type", Number)
    ], GetArrivalsByCrsQueryParams.prototype, "timeWindow", void 0);
    return GetArrivalsByCrsQueryParams;
}(SpeakeasyBase));
export { GetArrivalsByCrsQueryParams };
var GetArrivalsByCrsRequest = /** @class */ (function (_super) {
    __extends(GetArrivalsByCrsRequest, _super);
    function GetArrivalsByCrsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetArrivalsByCrsPathParams)
    ], GetArrivalsByCrsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetArrivalsByCrsQueryParams)
    ], GetArrivalsByCrsRequest.prototype, "queryParams", void 0);
    return GetArrivalsByCrsRequest;
}(SpeakeasyBase));
export { GetArrivalsByCrsRequest };
var GetArrivalsByCrsResponse = /** @class */ (function (_super) {
    __extends(GetArrivalsByCrsResponse, _super);
    function GetArrivalsByCrsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetArrivalsByCrsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetArrivalsByCrsResponse.prototype, "statusCode", void 0);
    return GetArrivalsByCrsResponse;
}(SpeakeasyBase));
export { GetArrivalsByCrsResponse };
