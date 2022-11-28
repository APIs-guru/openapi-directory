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
var GetListingStructurePoliciesPathParams = /** @class */ (function (_super) {
    __extends(GetListingStructurePoliciesPathParams, _super);
    function GetListingStructurePoliciesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=marketplace_id" }),
        __metadata("design:type", String)
    ], GetListingStructurePoliciesPathParams.prototype, "marketplaceId", void 0);
    return GetListingStructurePoliciesPathParams;
}(SpeakeasyBase));
export { GetListingStructurePoliciesPathParams };
var GetListingStructurePoliciesQueryParams = /** @class */ (function (_super) {
    __extends(GetListingStructurePoliciesQueryParams, _super);
    function GetListingStructurePoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetListingStructurePoliciesQueryParams.prototype, "filter", void 0);
    return GetListingStructurePoliciesQueryParams;
}(SpeakeasyBase));
export { GetListingStructurePoliciesQueryParams };
var GetListingStructurePoliciesSecurity = /** @class */ (function (_super) {
    __extends(GetListingStructurePoliciesSecurity, _super);
    function GetListingStructurePoliciesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetListingStructurePoliciesSecurity.prototype, "apiAuth", void 0);
    return GetListingStructurePoliciesSecurity;
}(SpeakeasyBase));
export { GetListingStructurePoliciesSecurity };
var GetListingStructurePoliciesRequest = /** @class */ (function (_super) {
    __extends(GetListingStructurePoliciesRequest, _super);
    function GetListingStructurePoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListingStructurePoliciesPathParams)
    ], GetListingStructurePoliciesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListingStructurePoliciesQueryParams)
    ], GetListingStructurePoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListingStructurePoliciesSecurity)
    ], GetListingStructurePoliciesRequest.prototype, "security", void 0);
    return GetListingStructurePoliciesRequest;
}(SpeakeasyBase));
export { GetListingStructurePoliciesRequest };
var GetListingStructurePoliciesResponse = /** @class */ (function (_super) {
    __extends(GetListingStructurePoliciesResponse, _super);
    function GetListingStructurePoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListingStructurePoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListingStructurePolicyResponse)
    ], GetListingStructurePoliciesResponse.prototype, "listingStructurePolicyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListingStructurePoliciesResponse.prototype, "statusCode", void 0);
    return GetListingStructurePoliciesResponse;
}(SpeakeasyBase));
export { GetListingStructurePoliciesResponse };
