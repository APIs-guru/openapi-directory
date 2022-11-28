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
var GetChargeStationPathParams = /** @class */ (function (_super) {
    __extends(GetChargeStationPathParams, _super);
    function GetChargeStationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetChargeStationPathParams.prototype, "id", void 0);
    return GetChargeStationPathParams;
}(SpeakeasyBase));
export { GetChargeStationPathParams };
var GetChargeStationQueryParams = /** @class */ (function (_super) {
    __extends(GetChargeStationQueryParams, _super);
    function GetChargeStationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_evses" }),
        __metadata("design:type", Boolean)
    ], GetChargeStationQueryParams.prototype, "includeEvses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_location" }),
        __metadata("design:type", Boolean)
    ], GetChargeStationQueryParams.prototype, "includeLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_organization" }),
        __metadata("design:type", Boolean)
    ], GetChargeStationQueryParams.prototype, "includeOrganization", void 0);
    return GetChargeStationQueryParams;
}(SpeakeasyBase));
export { GetChargeStationQueryParams };
var GetChargeStationRequest = /** @class */ (function (_super) {
    __extends(GetChargeStationRequest, _super);
    function GetChargeStationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChargeStationPathParams)
    ], GetChargeStationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChargeStationQueryParams)
    ], GetChargeStationRequest.prototype, "queryParams", void 0);
    return GetChargeStationRequest;
}(SpeakeasyBase));
export { GetChargeStationRequest };
var GetChargeStationResponse = /** @class */ (function (_super) {
    __extends(GetChargeStationResponse, _super);
    function GetChargeStationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetChargeStationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetChargeStationResponse.prototype, "statusCode", void 0);
    return GetChargeStationResponse;
}(SpeakeasyBase));
export { GetChargeStationResponse };
