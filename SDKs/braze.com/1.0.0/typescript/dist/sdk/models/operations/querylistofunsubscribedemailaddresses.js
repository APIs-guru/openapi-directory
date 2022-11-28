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
var QueryListOfUnsubscribedEmailAddressesQueryParams = /** @class */ (function (_super) {
    __extends(QueryListOfUnsubscribedEmailAddressesQueryParams, _super);
    function QueryListOfUnsubscribedEmailAddressesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], QueryListOfUnsubscribedEmailAddressesQueryParams.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" }),
        __metadata("design:type", String)
    ], QueryListOfUnsubscribedEmailAddressesQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], QueryListOfUnsubscribedEmailAddressesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], QueryListOfUnsubscribedEmailAddressesQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_direction" }),
        __metadata("design:type", String)
    ], QueryListOfUnsubscribedEmailAddressesQueryParams.prototype, "sortDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" }),
        __metadata("design:type", String)
    ], QueryListOfUnsubscribedEmailAddressesQueryParams.prototype, "startDate", void 0);
    return QueryListOfUnsubscribedEmailAddressesQueryParams;
}(SpeakeasyBase));
export { QueryListOfUnsubscribedEmailAddressesQueryParams };
var QueryListOfUnsubscribedEmailAddressesRequest = /** @class */ (function (_super) {
    __extends(QueryListOfUnsubscribedEmailAddressesRequest, _super);
    function QueryListOfUnsubscribedEmailAddressesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QueryListOfUnsubscribedEmailAddressesQueryParams)
    ], QueryListOfUnsubscribedEmailAddressesRequest.prototype, "queryParams", void 0);
    return QueryListOfUnsubscribedEmailAddressesRequest;
}(SpeakeasyBase));
export { QueryListOfUnsubscribedEmailAddressesRequest };
var QueryListOfUnsubscribedEmailAddressesResponse = /** @class */ (function (_super) {
    __extends(QueryListOfUnsubscribedEmailAddressesResponse, _super);
    function QueryListOfUnsubscribedEmailAddressesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QueryListOfUnsubscribedEmailAddressesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QueryListOfUnsubscribedEmailAddressesResponse.prototype, "statusCode", void 0);
    return QueryListOfUnsubscribedEmailAddressesResponse;
}(SpeakeasyBase));
export { QueryListOfUnsubscribedEmailAddressesResponse };
