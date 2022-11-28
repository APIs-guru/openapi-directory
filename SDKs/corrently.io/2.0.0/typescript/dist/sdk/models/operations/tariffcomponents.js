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
var TariffcomponentsQueryParams = /** @class */ (function (_super) {
    __extends(TariffcomponentsQueryParams, _super);
    function TariffcomponentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], TariffcomponentsQueryParams.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=kwha" }),
        __metadata("design:type", Number)
    ], TariffcomponentsQueryParams.prototype, "kwha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=milliseconds" }),
        __metadata("design:type", Number)
    ], TariffcomponentsQueryParams.prototype, "milliseconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=wh" }),
        __metadata("design:type", Number)
    ], TariffcomponentsQueryParams.prototype, "wh", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zipcode" }),
        __metadata("design:type", String)
    ], TariffcomponentsQueryParams.prototype, "zipcode", void 0);
    return TariffcomponentsQueryParams;
}(SpeakeasyBase));
export { TariffcomponentsQueryParams };
var TariffcomponentsRequest = /** @class */ (function (_super) {
    __extends(TariffcomponentsRequest, _super);
    function TariffcomponentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TariffcomponentsQueryParams)
    ], TariffcomponentsRequest.prototype, "queryParams", void 0);
    return TariffcomponentsRequest;
}(SpeakeasyBase));
export { TariffcomponentsRequest };
var TariffcomponentsResponse = /** @class */ (function (_super) {
    __extends(TariffcomponentsResponse, _super);
    function TariffcomponentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TariffcomponentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TariffcomponentsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Componentsh0)
    ], TariffcomponentsResponse.prototype, "componentsh0", void 0);
    return TariffcomponentsResponse;
}(SpeakeasyBase));
export { TariffcomponentsResponse };
