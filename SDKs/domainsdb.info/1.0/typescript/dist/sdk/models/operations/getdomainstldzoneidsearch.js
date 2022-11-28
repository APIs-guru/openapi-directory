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
var GetDomainsTldZoneIdSearchPathParams = /** @class */ (function (_super) {
    __extends(GetDomainsTldZoneIdSearchPathParams, _super);
    function GetDomainsTldZoneIdSearchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone_id" }),
        __metadata("design:type", String)
    ], GetDomainsTldZoneIdSearchPathParams.prototype, "zoneId", void 0);
    return GetDomainsTldZoneIdSearchPathParams;
}(SpeakeasyBase));
export { GetDomainsTldZoneIdSearchPathParams };
var GetDomainsTldZoneIdSearchQueryParams = /** @class */ (function (_super) {
    __extends(GetDomainsTldZoneIdSearchQueryParams, _super);
    function GetDomainsTldZoneIdSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=A" }),
        __metadata("design:type", String)
    ], GetDomainsTldZoneIdSearchQueryParams.prototype, "a", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CNAME" }),
        __metadata("design:type", String)
    ], GetDomainsTldZoneIdSearchQueryParams.prototype, "cname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MX" }),
        __metadata("design:type", String)
    ], GetDomainsTldZoneIdSearchQueryParams.prototype, "mx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NS" }),
        __metadata("design:type", String)
    ], GetDomainsTldZoneIdSearchQueryParams.prototype, "ns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TXT" }),
        __metadata("design:type", String)
    ], GetDomainsTldZoneIdSearchQueryParams.prototype, "txt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetDomainsTldZoneIdSearchQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], GetDomainsTldZoneIdSearchQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" }),
        __metadata("design:type", String)
    ], GetDomainsTldZoneIdSearchQueryParams.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain" }),
        __metadata("design:type", String)
    ], GetDomainsTldZoneIdSearchQueryParams.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isDead" }),
        __metadata("design:type", Boolean)
    ], GetDomainsTldZoneIdSearchQueryParams.prototype, "isDead", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetDomainsTldZoneIdSearchQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", String)
    ], GetDomainsTldZoneIdSearchQueryParams.prototype, "page", void 0);
    return GetDomainsTldZoneIdSearchQueryParams;
}(SpeakeasyBase));
export { GetDomainsTldZoneIdSearchQueryParams };
var GetDomainsTldZoneIdSearchRequest = /** @class */ (function (_super) {
    __extends(GetDomainsTldZoneIdSearchRequest, _super);
    function GetDomainsTldZoneIdSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomainsTldZoneIdSearchPathParams)
    ], GetDomainsTldZoneIdSearchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomainsTldZoneIdSearchQueryParams)
    ], GetDomainsTldZoneIdSearchRequest.prototype, "queryParams", void 0);
    return GetDomainsTldZoneIdSearchRequest;
}(SpeakeasyBase));
export { GetDomainsTldZoneIdSearchRequest };
var GetDomainsTldZoneIdSearchResponse = /** @class */ (function (_super) {
    __extends(GetDomainsTldZoneIdSearchResponse, _super);
    function GetDomainsTldZoneIdSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDomainsTldZoneIdSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchResults)
    ], GetDomainsTldZoneIdSearchResponse.prototype, "searchResults", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDomainsTldZoneIdSearchResponse.prototype, "statusCode", void 0);
    return GetDomainsTldZoneIdSearchResponse;
}(SpeakeasyBase));
export { GetDomainsTldZoneIdSearchResponse };
