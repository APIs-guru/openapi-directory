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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetSearchDomainItemQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchDomainItemQueryParams, _super);
    function GetSearchDomainItemQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=A" }),
        __metadata("design:type", String)
    ], GetSearchDomainItemQueryParams.prototype, "a", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CNAME" }),
        __metadata("design:type", String)
    ], GetSearchDomainItemQueryParams.prototype, "cname", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MX" }),
        __metadata("design:type", String)
    ], GetSearchDomainItemQueryParams.prototype, "mx", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NS" }),
        __metadata("design:type", String)
    ], GetSearchDomainItemQueryParams.prototype, "ns", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TXT" }),
        __metadata("design:type", String)
    ], GetSearchDomainItemQueryParams.prototype, "txt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetSearchDomainItemQueryParams.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], GetSearchDomainItemQueryParams.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=date" }),
        __metadata("design:type", String)
    ], GetSearchDomainItemQueryParams.prototype, "date", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=domain" }),
        __metadata("design:type", String)
    ], GetSearchDomainItemQueryParams.prototype, "domain", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=isDead" }),
        __metadata("design:type", Boolean)
    ], GetSearchDomainItemQueryParams.prototype, "isDead", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSearchDomainItemQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", String)
    ], GetSearchDomainItemQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=zone" }),
        __metadata("design:type", String)
    ], GetSearchDomainItemQueryParams.prototype, "zone", void 0);
    return GetSearchDomainItemQueryParams;
}(SpeakeasyBase));
export { GetSearchDomainItemQueryParams };
var GetSearchDomainItemRequest = /** @class */ (function (_super) {
    __extends(GetSearchDomainItemRequest, _super);
    function GetSearchDomainItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSearchDomainItemQueryParams)
    ], GetSearchDomainItemRequest.prototype, "queryParams", void 0);
    return GetSearchDomainItemRequest;
}(SpeakeasyBase));
export { GetSearchDomainItemRequest };
var GetSearchDomainItemResponse = /** @class */ (function (_super) {
    __extends(GetSearchDomainItemResponse, _super);
    function GetSearchDomainItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSearchDomainItemResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SearchResults)
    ], GetSearchDomainItemResponse.prototype, "searchResults", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSearchDomainItemResponse.prototype, "statusCode", void 0);
    return GetSearchDomainItemResponse;
}(SpeakeasyBase));
export { GetSearchDomainItemResponse };
