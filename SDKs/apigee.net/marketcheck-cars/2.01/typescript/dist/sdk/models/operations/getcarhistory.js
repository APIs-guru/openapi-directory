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
var GetCarHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetCarHistoryPathParams, _super);
    function GetCarHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vin" }),
        __metadata("design:type", String)
    ], GetCarHistoryPathParams.prototype, "vin", void 0);
    return GetCarHistoryPathParams;
}(SpeakeasyBase));
export { GetCarHistoryPathParams };
var GetCarHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetCarHistoryQueryParams, _super);
    function GetCarHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCarHistoryQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GetCarHistoryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_duplicates" }),
        __metadata("design:type", Boolean)
    ], GetCarHistoryQueryParams.prototype, "includeDuplicates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCarHistoryQueryParams.prototype, "page", void 0);
    return GetCarHistoryQueryParams;
}(SpeakeasyBase));
export { GetCarHistoryQueryParams };
var GetCarHistoryRequest = /** @class */ (function (_super) {
    __extends(GetCarHistoryRequest, _super);
    function GetCarHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCarHistoryPathParams)
    ], GetCarHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCarHistoryQueryParams)
    ], GetCarHistoryRequest.prototype, "queryParams", void 0);
    return GetCarHistoryRequest;
}(SpeakeasyBase));
export { GetCarHistoryRequest };
var GetCarHistoryResponse = /** @class */ (function (_super) {
    __extends(GetCarHistoryResponse, _super);
    function GetCarHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCarHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetCarHistoryResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.HistoricalListing }),
        __metadata("design:type", Array)
    ], GetCarHistoryResponse.prototype, "historicalListings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCarHistoryResponse.prototype, "statusCode", void 0);
    return GetCarHistoryResponse;
}(SpeakeasyBase));
export { GetCarHistoryResponse };
