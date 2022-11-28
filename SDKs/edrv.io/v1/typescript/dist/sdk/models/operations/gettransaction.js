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
var GetTransactionPathParams = /** @class */ (function (_super) {
    __extends(GetTransactionPathParams, _super);
    function GetTransactionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetTransactionPathParams.prototype, "id", void 0);
    return GetTransactionPathParams;
}(SpeakeasyBase));
export { GetTransactionPathParams };
var GetTransactionQueryParams = /** @class */ (function (_super) {
    __extends(GetTransactionQueryParams, _super);
    function GetTransactionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_chargestation" }),
        __metadata("design:type", Boolean)
    ], GetTransactionQueryParams.prototype, "includeChargestation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_connector" }),
        __metadata("design:type", Boolean)
    ], GetTransactionQueryParams.prototype, "includeConnector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_driver" }),
        __metadata("design:type", Boolean)
    ], GetTransactionQueryParams.prototype, "includeDriver", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_evse" }),
        __metadata("design:type", Boolean)
    ], GetTransactionQueryParams.prototype, "includeEvse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_organization" }),
        __metadata("design:type", Boolean)
    ], GetTransactionQueryParams.prototype, "includeOrganization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_rate" }),
        __metadata("design:type", Boolean)
    ], GetTransactionQueryParams.prototype, "includeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_reservation" }),
        __metadata("design:type", Boolean)
    ], GetTransactionQueryParams.prototype, "includeReservation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_token" }),
        __metadata("design:type", Boolean)
    ], GetTransactionQueryParams.prototype, "includeToken", void 0);
    return GetTransactionQueryParams;
}(SpeakeasyBase));
export { GetTransactionQueryParams };
var GetTransactionRequest = /** @class */ (function (_super) {
    __extends(GetTransactionRequest, _super);
    function GetTransactionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTransactionPathParams)
    ], GetTransactionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTransactionQueryParams)
    ], GetTransactionRequest.prototype, "queryParams", void 0);
    return GetTransactionRequest;
}(SpeakeasyBase));
export { GetTransactionRequest };
var GetTransactionResponse = /** @class */ (function (_super) {
    __extends(GetTransactionResponse, _super);
    function GetTransactionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTransactionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTransactionResponse.prototype, "statusCode", void 0);
    return GetTransactionResponse;
}(SpeakeasyBase));
export { GetTransactionResponse };
