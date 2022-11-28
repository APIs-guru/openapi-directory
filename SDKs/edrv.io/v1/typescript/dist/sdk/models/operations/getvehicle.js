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
var GetVehiclePathParams = /** @class */ (function (_super) {
    __extends(GetVehiclePathParams, _super);
    function GetVehiclePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetVehiclePathParams.prototype, "id", void 0);
    return GetVehiclePathParams;
}(SpeakeasyBase));
export { GetVehiclePathParams };
var GetVehicleQueryParams = /** @class */ (function (_super) {
    __extends(GetVehicleQueryParams, _super);
    function GetVehicleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_driver" }),
        __metadata("design:type", Boolean)
    ], GetVehicleQueryParams.prototype, "includeDriver", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_organization" }),
        __metadata("design:type", Boolean)
    ], GetVehicleQueryParams.prototype, "includeOrganization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_token" }),
        __metadata("design:type", Boolean)
    ], GetVehicleQueryParams.prototype, "includeToken", void 0);
    return GetVehicleQueryParams;
}(SpeakeasyBase));
export { GetVehicleQueryParams };
var GetVehicleRequest = /** @class */ (function (_super) {
    __extends(GetVehicleRequest, _super);
    function GetVehicleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVehiclePathParams)
    ], GetVehicleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVehicleQueryParams)
    ], GetVehicleRequest.prototype, "queryParams", void 0);
    return GetVehicleRequest;
}(SpeakeasyBase));
export { GetVehicleRequest };
var GetVehicleResponse = /** @class */ (function (_super) {
    __extends(GetVehicleResponse, _super);
    function GetVehicleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVehicleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVehicleResponse.prototype, "statusCode", void 0);
    return GetVehicleResponse;
}(SpeakeasyBase));
export { GetVehicleResponse };
