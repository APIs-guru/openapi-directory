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
var GetDomainsUpdatesAddedQueryParams = /** @class */ (function (_super) {
    __extends(GetDomainsUpdatesAddedQueryParams, _super);
    function GetDomainsUpdatesAddedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetDomainsUpdatesAddedQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" }),
        __metadata("design:type", String)
    ], GetDomainsUpdatesAddedQueryParams.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetDomainsUpdatesAddedQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", String)
    ], GetDomainsUpdatesAddedQueryParams.prototype, "page", void 0);
    return GetDomainsUpdatesAddedQueryParams;
}(SpeakeasyBase));
export { GetDomainsUpdatesAddedQueryParams };
var GetDomainsUpdatesAddedRequest = /** @class */ (function (_super) {
    __extends(GetDomainsUpdatesAddedRequest, _super);
    function GetDomainsUpdatesAddedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomainsUpdatesAddedQueryParams)
    ], GetDomainsUpdatesAddedRequest.prototype, "queryParams", void 0);
    return GetDomainsUpdatesAddedRequest;
}(SpeakeasyBase));
export { GetDomainsUpdatesAddedRequest };
var GetDomainsUpdatesAddedResponse = /** @class */ (function (_super) {
    __extends(GetDomainsUpdatesAddedResponse, _super);
    function GetDomainsUpdatesAddedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDomainsUpdatesAddedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchResults)
    ], GetDomainsUpdatesAddedResponse.prototype, "searchResults", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDomainsUpdatesAddedResponse.prototype, "statusCode", void 0);
    return GetDomainsUpdatesAddedResponse;
}(SpeakeasyBase));
export { GetDomainsUpdatesAddedResponse };
