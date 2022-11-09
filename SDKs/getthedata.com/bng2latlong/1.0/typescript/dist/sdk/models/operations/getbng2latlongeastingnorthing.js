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
var GetBng2latlongEastingNorthingPathParams = /** @class */ (function (_super) {
    __extends(GetBng2latlongEastingNorthingPathParams, _super);
    function GetBng2latlongEastingNorthingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=easting" }),
        __metadata("design:type", Number)
    ], GetBng2latlongEastingNorthingPathParams.prototype, "easting", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=northing" }),
        __metadata("design:type", Number)
    ], GetBng2latlongEastingNorthingPathParams.prototype, "northing", void 0);
    return GetBng2latlongEastingNorthingPathParams;
}(SpeakeasyBase));
export { GetBng2latlongEastingNorthingPathParams };
var GetBng2latlongEastingNorthingRequest = /** @class */ (function (_super) {
    __extends(GetBng2latlongEastingNorthingRequest, _super);
    function GetBng2latlongEastingNorthingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetBng2latlongEastingNorthingPathParams)
    ], GetBng2latlongEastingNorthingRequest.prototype, "pathParams", void 0);
    return GetBng2latlongEastingNorthingRequest;
}(SpeakeasyBase));
export { GetBng2latlongEastingNorthingRequest };
export var GetBng2latlongEastingNorthing200ApplicationJsonStatusEnum;
(function (GetBng2latlongEastingNorthing200ApplicationJsonStatusEnum) {
    GetBng2latlongEastingNorthing200ApplicationJsonStatusEnum["Ok"] = "ok";
    GetBng2latlongEastingNorthing200ApplicationJsonStatusEnum["Error"] = "error";
})(GetBng2latlongEastingNorthing200ApplicationJsonStatusEnum || (GetBng2latlongEastingNorthing200ApplicationJsonStatusEnum = {}));
var GetBng2latlongEastingNorthing200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBng2latlongEastingNorthing200ApplicationJson, _super);
    function GetBng2latlongEastingNorthing200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=easting" }),
        __metadata("design:type", Number)
    ], GetBng2latlongEastingNorthing200ApplicationJson.prototype, "easting", void 0);
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetBng2latlongEastingNorthing200ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], GetBng2latlongEastingNorthing200ApplicationJson.prototype, "latitude", void 0);
    __decorate([
        Metadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], GetBng2latlongEastingNorthing200ApplicationJson.prototype, "longitude", void 0);
    __decorate([
        Metadata({ data: "json, name=northing" }),
        __metadata("design:type", Number)
    ], GetBng2latlongEastingNorthing200ApplicationJson.prototype, "northing", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBng2latlongEastingNorthing200ApplicationJson.prototype, "status", void 0);
    return GetBng2latlongEastingNorthing200ApplicationJson;
}(SpeakeasyBase));
export { GetBng2latlongEastingNorthing200ApplicationJson };
var GetBng2latlongEastingNorthingResponse = /** @class */ (function (_super) {
    __extends(GetBng2latlongEastingNorthingResponse, _super);
    function GetBng2latlongEastingNorthingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetBng2latlongEastingNorthingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetBng2latlongEastingNorthing200ApplicationJson)
    ], GetBng2latlongEastingNorthingResponse.prototype, "getBng2latlongEastingNorthing200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetBng2latlongEastingNorthingResponse.prototype, "statusCode", void 0);
    return GetBng2latlongEastingNorthingResponse;
}(SpeakeasyBase));
export { GetBng2latlongEastingNorthingResponse };
