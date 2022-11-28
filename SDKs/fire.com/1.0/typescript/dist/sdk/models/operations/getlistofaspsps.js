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
var GetListOfAspspsQueryParams = /** @class */ (function (_super) {
    __extends(GetListOfAspspsQueryParams, _super);
    function GetListOfAspspsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency" }),
        __metadata("design:type", String)
    ], GetListOfAspspsQueryParams.prototype, "currency", void 0);
    return GetListOfAspspsQueryParams;
}(SpeakeasyBase));
export { GetListOfAspspsQueryParams };
var GetListOfAspspsAspspsAspspCountry = /** @class */ (function (_super) {
    __extends(GetListOfAspspsAspspsAspspCountry, _super);
    function GetListOfAspspsAspspsAspspCountry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetListOfAspspsAspspsAspspCountry.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetListOfAspspsAspspsAspspCountry.prototype, "description", void 0);
    return GetListOfAspspsAspspsAspspCountry;
}(SpeakeasyBase));
export { GetListOfAspspsAspspsAspspCountry };
var GetListOfAspspsAspspsAspsp = /** @class */ (function (_super) {
    __extends(GetListOfAspspsAspspsAspsp, _super);
    function GetListOfAspspsAspspsAspsp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alias" }),
        __metadata("design:type", String)
    ], GetListOfAspspsAspspsAspsp.prototype, "alias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aspspUuid" }),
        __metadata("design:type", String)
    ], GetListOfAspspsAspspsAspsp.prototype, "aspspUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", GetListOfAspspsAspspsAspspCountry)
    ], GetListOfAspspsAspspsAspsp.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency)
    ], GetListOfAspspsAspspsAspsp.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateCreated" }),
        __metadata("design:type", Date)
    ], GetListOfAspspsAspspsAspsp.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdated" }),
        __metadata("design:type", Date)
    ], GetListOfAspspsAspspsAspsp.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logoUrl" }),
        __metadata("design:type", String)
    ], GetListOfAspspsAspspsAspsp.prototype, "logoUrl", void 0);
    return GetListOfAspspsAspspsAspsp;
}(SpeakeasyBase));
export { GetListOfAspspsAspspsAspsp };
var GetListOfAspspsAspsps = /** @class */ (function (_super) {
    __extends(GetListOfAspspsAspsps, _super);
    function GetListOfAspspsAspsps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aspsps", elemType: GetListOfAspspsAspspsAspsp }),
        __metadata("design:type", Array)
    ], GetListOfAspspsAspsps.prototype, "aspsps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetListOfAspspsAspsps.prototype, "total", void 0);
    return GetListOfAspspsAspsps;
}(SpeakeasyBase));
export { GetListOfAspspsAspsps };
var GetListOfAspspsRequest = /** @class */ (function (_super) {
    __extends(GetListOfAspspsRequest, _super);
    function GetListOfAspspsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListOfAspspsQueryParams)
    ], GetListOfAspspsRequest.prototype, "queryParams", void 0);
    return GetListOfAspspsRequest;
}(SpeakeasyBase));
export { GetListOfAspspsRequest };
var GetListOfAspspsResponse = /** @class */ (function (_super) {
    __extends(GetListOfAspspsResponse, _super);
    function GetListOfAspspsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListOfAspspsAspsps)
    ], GetListOfAspspsResponse.prototype, "aspsps", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListOfAspspsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListOfAspspsResponse.prototype, "statusCode", void 0);
    return GetListOfAspspsResponse;
}(SpeakeasyBase));
export { GetListOfAspspsResponse };
