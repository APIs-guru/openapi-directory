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
export var GetTransactionsStatusEnum;
(function (GetTransactionsStatusEnum) {
    GetTransactionsStatusEnum["Started"] = "Started";
    GetTransactionsStatusEnum["Ended"] = "Ended";
})(GetTransactionsStatusEnum || (GetTransactionsStatusEnum = {}));
var GetTransactionsQueryParams = /** @class */ (function (_super) {
    __extends(GetTransactionsQueryParams, _super);
    function GetTransactionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAt[$gte]" }),
        __metadata("design:type", Date)
    ], GetTransactionsQueryParams.prototype, "createdAtDollarGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAt[$lte]" }),
        __metadata("design:type", Date)
    ], GetTransactionsQueryParams.prototype, "createdAtDollarLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_chargestation" }),
        __metadata("design:type", Boolean)
    ], GetTransactionsQueryParams.prototype, "includeChargestation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_connector" }),
        __metadata("design:type", Boolean)
    ], GetTransactionsQueryParams.prototype, "includeConnector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_driver" }),
        __metadata("design:type", Boolean)
    ], GetTransactionsQueryParams.prototype, "includeDriver", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_evse" }),
        __metadata("design:type", Boolean)
    ], GetTransactionsQueryParams.prototype, "includeEvse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_organization" }),
        __metadata("design:type", Boolean)
    ], GetTransactionsQueryParams.prototype, "includeOrganization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_rate" }),
        __metadata("design:type", Boolean)
    ], GetTransactionsQueryParams.prototype, "includeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_reservation" }),
        __metadata("design:type", Boolean)
    ], GetTransactionsQueryParams.prototype, "includeReservation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_token" }),
        __metadata("design:type", Boolean)
    ], GetTransactionsQueryParams.prototype, "includeToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paginate_enabled" }),
        __metadata("design:type", Boolean)
    ], GetTransactionsQueryParams.prototype, "paginateEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paginate_limit" }),
        __metadata("design:type", Number)
    ], GetTransactionsQueryParams.prototype, "paginateLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paginate_page" }),
        __metadata("design:type", String)
    ], GetTransactionsQueryParams.prototype, "paginatePage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", String)
    ], GetTransactionsQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_order" }),
        __metadata("design:type", String)
    ], GetTransactionsQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetTransactionsQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAt[$gte]" }),
        __metadata("design:type", Date)
    ], GetTransactionsQueryParams.prototype, "updatedAtDollarGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAt[$lte]" }),
        __metadata("design:type", Date)
    ], GetTransactionsQueryParams.prototype, "updatedAtDollarLte", void 0);
    return GetTransactionsQueryParams;
}(SpeakeasyBase));
export { GetTransactionsQueryParams };
var GetTransactions200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTransactions200ApplicationJson, _super);
    function GetTransactions200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasNext" }),
        __metadata("design:type", Boolean)
    ], GetTransactions200ApplicationJson.prototype, "hasNext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasPrevious" }),
        __metadata("design:type", Boolean)
    ], GetTransactions200ApplicationJson.prototype, "hasPrevious", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetTransactions200ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ok" }),
        __metadata("design:type", Boolean)
    ], GetTransactions200ApplicationJson.prototype, "ok", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", Array)
    ], GetTransactions200ApplicationJson.prototype, "result", void 0);
    return GetTransactions200ApplicationJson;
}(SpeakeasyBase));
export { GetTransactions200ApplicationJson };
var GetTransactionsRequest = /** @class */ (function (_super) {
    __extends(GetTransactionsRequest, _super);
    function GetTransactionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTransactionsQueryParams)
    ], GetTransactionsRequest.prototype, "queryParams", void 0);
    return GetTransactionsRequest;
}(SpeakeasyBase));
export { GetTransactionsRequest };
var GetTransactionsResponse = /** @class */ (function (_super) {
    __extends(GetTransactionsResponse, _super);
    function GetTransactionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTransactionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTransactionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTransactions200ApplicationJson)
    ], GetTransactionsResponse.prototype, "getTransactions200ApplicationJsonObject", void 0);
    return GetTransactionsResponse;
}(SpeakeasyBase));
export { GetTransactionsResponse };
