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
var GsiMarketdataQueryParams = /** @class */ (function (_super) {
    __extends(GsiMarketdataQueryParams, _super);
    function GsiMarketdataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" }),
        __metadata("design:type", String)
    ], GsiMarketdataQueryParams.prototype, "zip", void 0);
    return GsiMarketdataQueryParams;
}(SpeakeasyBase));
export { GsiMarketdataQueryParams };
var GsiMarketdata200ApplicationJson = /** @class */ (function (_super) {
    __extends(GsiMarketdata200ApplicationJson, _super);
    function GsiMarketdata200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.MarketData }),
        __metadata("design:type", Array)
    ], GsiMarketdata200ApplicationJson.prototype, "data", void 0);
    return GsiMarketdata200ApplicationJson;
}(SpeakeasyBase));
export { GsiMarketdata200ApplicationJson };
var GsiMarketdataRequest = /** @class */ (function (_super) {
    __extends(GsiMarketdataRequest, _super);
    function GsiMarketdataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GsiMarketdataQueryParams)
    ], GsiMarketdataRequest.prototype, "queryParams", void 0);
    return GsiMarketdataRequest;
}(SpeakeasyBase));
export { GsiMarketdataRequest };
var GsiMarketdataResponse = /** @class */ (function (_super) {
    __extends(GsiMarketdataResponse, _super);
    function GsiMarketdataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GsiMarketdataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GsiMarketdataResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GsiMarketdata200ApplicationJson)
    ], GsiMarketdataResponse.prototype, "gsiMarketdata200ApplicationJsonObject", void 0);
    return GsiMarketdataResponse;
}(SpeakeasyBase));
export { GsiMarketdataResponse };
