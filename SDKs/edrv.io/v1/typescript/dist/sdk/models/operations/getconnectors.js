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
var GetConnectorsQueryParams = /** @class */ (function (_super) {
    __extends(GetConnectorsQueryParams, _super);
    function GetConnectorsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAt[$gte]" }),
        __metadata("design:type", Date)
    ], GetConnectorsQueryParams.prototype, "createdAtDollarGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAt[$lte]" }),
        __metadata("design:type", Date)
    ], GetConnectorsQueryParams.prototype, "createdAtDollarLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_evse" }),
        __metadata("design:type", Boolean)
    ], GetConnectorsQueryParams.prototype, "includeEvse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_organization" }),
        __metadata("design:type", Boolean)
    ], GetConnectorsQueryParams.prototype, "includeOrganization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_rate" }),
        __metadata("design:type", Boolean)
    ], GetConnectorsQueryParams.prototype, "includeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paginate_enabled" }),
        __metadata("design:type", Boolean)
    ], GetConnectorsQueryParams.prototype, "paginateEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paginate_limit" }),
        __metadata("design:type", Number)
    ], GetConnectorsQueryParams.prototype, "paginateLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paginate_page" }),
        __metadata("design:type", String)
    ], GetConnectorsQueryParams.prototype, "paginatePage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", String)
    ], GetConnectorsQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_order" }),
        __metadata("design:type", String)
    ], GetConnectorsQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAt[$gte]" }),
        __metadata("design:type", Date)
    ], GetConnectorsQueryParams.prototype, "updatedAtDollarGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAt[$lte]" }),
        __metadata("design:type", Date)
    ], GetConnectorsQueryParams.prototype, "updatedAtDollarLte", void 0);
    return GetConnectorsQueryParams;
}(SpeakeasyBase));
export { GetConnectorsQueryParams };
var GetConnectorsRequest = /** @class */ (function (_super) {
    __extends(GetConnectorsRequest, _super);
    function GetConnectorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConnectorsQueryParams)
    ], GetConnectorsRequest.prototype, "queryParams", void 0);
    return GetConnectorsRequest;
}(SpeakeasyBase));
export { GetConnectorsRequest };
var GetConnectorsResponse = /** @class */ (function (_super) {
    __extends(GetConnectorsResponse, _super);
    function GetConnectorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetConnectorsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetConnectorsResponse.prototype, "statusCode", void 0);
    return GetConnectorsResponse;
}(SpeakeasyBase));
export { GetConnectorsResponse };
