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
var GetProductAdoptionPoliciesPathParams = /** @class */ (function (_super) {
    __extends(GetProductAdoptionPoliciesPathParams, _super);
    function GetProductAdoptionPoliciesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=marketplace_id" }),
        __metadata("design:type", String)
    ], GetProductAdoptionPoliciesPathParams.prototype, "marketplaceId", void 0);
    return GetProductAdoptionPoliciesPathParams;
}(SpeakeasyBase));
export { GetProductAdoptionPoliciesPathParams };
var GetProductAdoptionPoliciesQueryParams = /** @class */ (function (_super) {
    __extends(GetProductAdoptionPoliciesQueryParams, _super);
    function GetProductAdoptionPoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetProductAdoptionPoliciesQueryParams.prototype, "filter", void 0);
    return GetProductAdoptionPoliciesQueryParams;
}(SpeakeasyBase));
export { GetProductAdoptionPoliciesQueryParams };
var GetProductAdoptionPoliciesSecurity = /** @class */ (function (_super) {
    __extends(GetProductAdoptionPoliciesSecurity, _super);
    function GetProductAdoptionPoliciesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetProductAdoptionPoliciesSecurity.prototype, "apiAuth", void 0);
    return GetProductAdoptionPoliciesSecurity;
}(SpeakeasyBase));
export { GetProductAdoptionPoliciesSecurity };
var GetProductAdoptionPoliciesRequest = /** @class */ (function (_super) {
    __extends(GetProductAdoptionPoliciesRequest, _super);
    function GetProductAdoptionPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProductAdoptionPoliciesPathParams)
    ], GetProductAdoptionPoliciesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProductAdoptionPoliciesQueryParams)
    ], GetProductAdoptionPoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProductAdoptionPoliciesSecurity)
    ], GetProductAdoptionPoliciesRequest.prototype, "security", void 0);
    return GetProductAdoptionPoliciesRequest;
}(SpeakeasyBase));
export { GetProductAdoptionPoliciesRequest };
var GetProductAdoptionPoliciesResponse = /** @class */ (function (_super) {
    __extends(GetProductAdoptionPoliciesResponse, _super);
    function GetProductAdoptionPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProductAdoptionPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProductAdoptionPolicyResponse)
    ], GetProductAdoptionPoliciesResponse.prototype, "productAdoptionPolicyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProductAdoptionPoliciesResponse.prototype, "statusCode", void 0);
    return GetProductAdoptionPoliciesResponse;
}(SpeakeasyBase));
export { GetProductAdoptionPoliciesResponse };
