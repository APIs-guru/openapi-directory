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
var GetTransactionsFilteredByIdPathParams = /** @class */ (function (_super) {
    __extends(GetTransactionsFilteredByIdPathParams, _super);
    function GetTransactionsFilteredByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ican" }),
        __metadata("design:type", Number)
    ], GetTransactionsFilteredByIdPathParams.prototype, "ican", void 0);
    return GetTransactionsFilteredByIdPathParams;
}(SpeakeasyBase));
export { GetTransactionsFilteredByIdPathParams };
var GetTransactionsFilteredByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetTransactionsFilteredByIdQueryParams, _super);
    function GetTransactionsFilteredByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateRangeFrom" }),
        __metadata("design:type", Number)
    ], GetTransactionsFilteredByIdQueryParams.prototype, "dateRangeFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateRangeTo" }),
        __metadata("design:type", Number)
    ], GetTransactionsFilteredByIdQueryParams.prototype, "dateRangeTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchKeyword" }),
        __metadata("design:type", String)
    ], GetTransactionsFilteredByIdQueryParams.prototype, "searchKeyword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transactionTypes" }),
        __metadata("design:type", Array)
    ], GetTransactionsFilteredByIdQueryParams.prototype, "transactionTypes", void 0);
    return GetTransactionsFilteredByIdQueryParams;
}(SpeakeasyBase));
export { GetTransactionsFilteredByIdQueryParams };
var GetTransactionsFilteredByIdRequest = /** @class */ (function (_super) {
    __extends(GetTransactionsFilteredByIdRequest, _super);
    function GetTransactionsFilteredByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTransactionsFilteredByIdPathParams)
    ], GetTransactionsFilteredByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTransactionsFilteredByIdQueryParams)
    ], GetTransactionsFilteredByIdRequest.prototype, "queryParams", void 0);
    return GetTransactionsFilteredByIdRequest;
}(SpeakeasyBase));
export { GetTransactionsFilteredByIdRequest };
var GetTransactionsFilteredByIdResponse = /** @class */ (function (_super) {
    __extends(GetTransactionsFilteredByIdResponse, _super);
    function GetTransactionsFilteredByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTransactionsFilteredByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTransactionsFilteredByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema)
    ], GetTransactionsFilteredByIdResponse.prototype, "oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema", void 0);
    return GetTransactionsFilteredByIdResponse;
}(SpeakeasyBase));
export { GetTransactionsFilteredByIdResponse };
