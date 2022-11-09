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
var GetNextDeparturesByCrsPathParams = /** @class */ (function (_super) {
    __extends(GetNextDeparturesByCrsPathParams, _super);
    function GetNextDeparturesByCrsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CRS" }),
        __metadata("design:type", String)
    ], GetNextDeparturesByCrsPathParams.prototype, "crs", void 0);
    return GetNextDeparturesByCrsPathParams;
}(SpeakeasyBase));
export { GetNextDeparturesByCrsPathParams };
var GetNextDeparturesByCrsQueryParams = /** @class */ (function (_super) {
    __extends(GetNextDeparturesByCrsQueryParams, _super);
    function GetNextDeparturesByCrsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=apiKey" }),
        __metadata("design:type", String)
    ], GetNextDeparturesByCrsQueryParams.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filterList" }),
        __metadata("design:type", String)
    ], GetNextDeparturesByCrsQueryParams.prototype, "filterList", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=serviceDetails" }),
        __metadata("design:type", Boolean)
    ], GetNextDeparturesByCrsQueryParams.prototype, "serviceDetails", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeOffset" }),
        __metadata("design:type", Number)
    ], GetNextDeparturesByCrsQueryParams.prototype, "timeOffset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeWindow" }),
        __metadata("design:type", Number)
    ], GetNextDeparturesByCrsQueryParams.prototype, "timeWindow", void 0);
    return GetNextDeparturesByCrsQueryParams;
}(SpeakeasyBase));
export { GetNextDeparturesByCrsQueryParams };
var GetNextDeparturesByCrsRequest = /** @class */ (function (_super) {
    __extends(GetNextDeparturesByCrsRequest, _super);
    function GetNextDeparturesByCrsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetNextDeparturesByCrsPathParams)
    ], GetNextDeparturesByCrsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetNextDeparturesByCrsQueryParams)
    ], GetNextDeparturesByCrsRequest.prototype, "queryParams", void 0);
    return GetNextDeparturesByCrsRequest;
}(SpeakeasyBase));
export { GetNextDeparturesByCrsRequest };
var GetNextDeparturesByCrsResponse = /** @class */ (function (_super) {
    __extends(GetNextDeparturesByCrsResponse, _super);
    function GetNextDeparturesByCrsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetNextDeparturesByCrsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetNextDeparturesByCrsResponse.prototype, "statusCode", void 0);
    return GetNextDeparturesByCrsResponse;
}(SpeakeasyBase));
export { GetNextDeparturesByCrsResponse };
