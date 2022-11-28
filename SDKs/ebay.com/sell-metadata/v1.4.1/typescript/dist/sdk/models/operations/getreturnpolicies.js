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
var GetReturnPoliciesPathParams = /** @class */ (function (_super) {
    __extends(GetReturnPoliciesPathParams, _super);
    function GetReturnPoliciesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=marketplace_id" }),
        __metadata("design:type", String)
    ], GetReturnPoliciesPathParams.prototype, "marketplaceId", void 0);
    return GetReturnPoliciesPathParams;
}(SpeakeasyBase));
export { GetReturnPoliciesPathParams };
var GetReturnPoliciesQueryParams = /** @class */ (function (_super) {
    __extends(GetReturnPoliciesQueryParams, _super);
    function GetReturnPoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetReturnPoliciesQueryParams.prototype, "filter", void 0);
    return GetReturnPoliciesQueryParams;
}(SpeakeasyBase));
export { GetReturnPoliciesQueryParams };
var GetReturnPoliciesSecurity = /** @class */ (function (_super) {
    __extends(GetReturnPoliciesSecurity, _super);
    function GetReturnPoliciesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetReturnPoliciesSecurity.prototype, "apiAuth", void 0);
    return GetReturnPoliciesSecurity;
}(SpeakeasyBase));
export { GetReturnPoliciesSecurity };
var GetReturnPoliciesRequest = /** @class */ (function (_super) {
    __extends(GetReturnPoliciesRequest, _super);
    function GetReturnPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReturnPoliciesPathParams)
    ], GetReturnPoliciesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReturnPoliciesQueryParams)
    ], GetReturnPoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReturnPoliciesSecurity)
    ], GetReturnPoliciesRequest.prototype, "security", void 0);
    return GetReturnPoliciesRequest;
}(SpeakeasyBase));
export { GetReturnPoliciesRequest };
var GetReturnPoliciesResponse = /** @class */ (function (_super) {
    __extends(GetReturnPoliciesResponse, _super);
    function GetReturnPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetReturnPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ReturnPolicyResponse)
    ], GetReturnPoliciesResponse.prototype, "returnPolicyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetReturnPoliciesResponse.prototype, "statusCode", void 0);
    return GetReturnPoliciesResponse;
}(SpeakeasyBase));
export { GetReturnPoliciesResponse };
