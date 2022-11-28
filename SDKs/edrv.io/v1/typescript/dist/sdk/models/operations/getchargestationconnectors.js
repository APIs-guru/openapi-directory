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
var GetChargeStationConnectorsPathParams = /** @class */ (function (_super) {
    __extends(GetChargeStationConnectorsPathParams, _super);
    function GetChargeStationConnectorsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetChargeStationConnectorsPathParams.prototype, "id", void 0);
    return GetChargeStationConnectorsPathParams;
}(SpeakeasyBase));
export { GetChargeStationConnectorsPathParams };
var GetChargeStationConnectorsQueryParams = /** @class */ (function (_super) {
    __extends(GetChargeStationConnectorsQueryParams, _super);
    function GetChargeStationConnectorsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_evse" }),
        __metadata("design:type", Boolean)
    ], GetChargeStationConnectorsQueryParams.prototype, "includeEvse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_organization" }),
        __metadata("design:type", Boolean)
    ], GetChargeStationConnectorsQueryParams.prototype, "includeOrganization", void 0);
    return GetChargeStationConnectorsQueryParams;
}(SpeakeasyBase));
export { GetChargeStationConnectorsQueryParams };
var GetChargeStationConnectorsRequest = /** @class */ (function (_super) {
    __extends(GetChargeStationConnectorsRequest, _super);
    function GetChargeStationConnectorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChargeStationConnectorsPathParams)
    ], GetChargeStationConnectorsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChargeStationConnectorsQueryParams)
    ], GetChargeStationConnectorsRequest.prototype, "queryParams", void 0);
    return GetChargeStationConnectorsRequest;
}(SpeakeasyBase));
export { GetChargeStationConnectorsRequest };
var GetChargeStationConnectorsResponse = /** @class */ (function (_super) {
    __extends(GetChargeStationConnectorsResponse, _super);
    function GetChargeStationConnectorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetChargeStationConnectorsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetChargeStationConnectorsResponse.prototype, "statusCode", void 0);
    return GetChargeStationConnectorsResponse;
}(SpeakeasyBase));
export { GetChargeStationConnectorsResponse };
