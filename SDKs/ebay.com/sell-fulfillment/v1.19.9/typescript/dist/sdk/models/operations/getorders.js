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
var GetOrdersQueryParams = /** @class */ (function (_super) {
    __extends(GetOrdersQueryParams, _super);
    function GetOrdersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fieldGroups" }),
        __metadata("design:type", String)
    ], GetOrdersQueryParams.prototype, "fieldGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetOrdersQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], GetOrdersQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetOrdersQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderIds" }),
        __metadata("design:type", String)
    ], GetOrdersQueryParams.prototype, "orderIds", void 0);
    return GetOrdersQueryParams;
}(SpeakeasyBase));
export { GetOrdersQueryParams };
var GetOrdersSecurity = /** @class */ (function (_super) {
    __extends(GetOrdersSecurity, _super);
    function GetOrdersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetOrdersSecurity.prototype, "apiAuth", void 0);
    return GetOrdersSecurity;
}(SpeakeasyBase));
export { GetOrdersSecurity };
var GetOrdersRequest = /** @class */ (function (_super) {
    __extends(GetOrdersRequest, _super);
    function GetOrdersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrdersQueryParams)
    ], GetOrdersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrdersSecurity)
    ], GetOrdersRequest.prototype, "security", void 0);
    return GetOrdersRequest;
}(SpeakeasyBase));
export { GetOrdersRequest };
var GetOrdersResponse = /** @class */ (function (_super) {
    __extends(GetOrdersResponse, _super);
    function GetOrdersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOrdersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrderSearchPagedCollection)
    ], GetOrdersResponse.prototype, "orderSearchPagedCollection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOrdersResponse.prototype, "statusCode", void 0);
    return GetOrdersResponse;
}(SpeakeasyBase));
export { GetOrdersResponse };
