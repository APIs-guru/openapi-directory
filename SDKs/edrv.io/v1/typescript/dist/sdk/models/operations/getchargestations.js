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
var GetChargeStationsQueryParams = /** @class */ (function (_super) {
    __extends(GetChargeStationsQueryParams, _super);
    function GetChargeStationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=active" }),
        __metadata("design:type", Boolean)
    ], GetChargeStationsQueryParams.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAt[$gte]" }),
        __metadata("design:type", Date)
    ], GetChargeStationsQueryParams.prototype, "createdAtDollarGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAt[$lte]" }),
        __metadata("design:type", Date)
    ], GetChargeStationsQueryParams.prototype, "createdAtDollarLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_evses" }),
        __metadata("design:type", Boolean)
    ], GetChargeStationsQueryParams.prototype, "includeEvses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_location" }),
        __metadata("design:type", Boolean)
    ], GetChargeStationsQueryParams.prototype, "includeLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_organization" }),
        __metadata("design:type", Boolean)
    ], GetChargeStationsQueryParams.prototype, "includeOrganization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], GetChargeStationsQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=online" }),
        __metadata("design:type", Boolean)
    ], GetChargeStationsQueryParams.prototype, "online", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=organization" }),
        __metadata("design:type", String)
    ], GetChargeStationsQueryParams.prototype, "organization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paginate_enabled" }),
        __metadata("design:type", Boolean)
    ], GetChargeStationsQueryParams.prototype, "paginateEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paginate_limit" }),
        __metadata("design:type", Number)
    ], GetChargeStationsQueryParams.prototype, "paginateLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paginate_page" }),
        __metadata("design:type", String)
    ], GetChargeStationsQueryParams.prototype, "paginatePage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=public" }),
        __metadata("design:type", Boolean)
    ], GetChargeStationsQueryParams.prototype, "public", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", String)
    ], GetChargeStationsQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_order" }),
        __metadata("design:type", String)
    ], GetChargeStationsQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAt[$gte]" }),
        __metadata("design:type", Date)
    ], GetChargeStationsQueryParams.prototype, "updatedAtDollarGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAt[$lte]" }),
        __metadata("design:type", Date)
    ], GetChargeStationsQueryParams.prototype, "updatedAtDollarLte", void 0);
    return GetChargeStationsQueryParams;
}(SpeakeasyBase));
export { GetChargeStationsQueryParams };
var GetChargeStationsRequest = /** @class */ (function (_super) {
    __extends(GetChargeStationsRequest, _super);
    function GetChargeStationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChargeStationsQueryParams)
    ], GetChargeStationsRequest.prototype, "queryParams", void 0);
    return GetChargeStationsRequest;
}(SpeakeasyBase));
export { GetChargeStationsRequest };
var GetChargeStationsResponse = /** @class */ (function (_super) {
    __extends(GetChargeStationsResponse, _super);
    function GetChargeStationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetChargeStationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetChargeStationsResponse.prototype, "statusCode", void 0);
    return GetChargeStationsResponse;
}(SpeakeasyBase));
export { GetChargeStationsResponse };
