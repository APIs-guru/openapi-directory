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
var CompanyDeepsearchLeiPathParams = /** @class */ (function (_super) {
    __extends(CompanyDeepsearchLeiPathParams, _super);
    function CompanyDeepsearchLeiPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" }),
        __metadata("design:type", String)
    ], CompanyDeepsearchLeiPathParams.prototype, "number", void 0);
    return CompanyDeepsearchLeiPathParams;
}(SpeakeasyBase));
export { CompanyDeepsearchLeiPathParams };
var CompanyDeepsearchLeiQueryParams = /** @class */ (function (_super) {
    __extends(CompanyDeepsearchLeiQueryParams, _super);
    function CompanyDeepsearchLeiQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], CompanyDeepsearchLeiQueryParams.prototype, "page", void 0);
    return CompanyDeepsearchLeiQueryParams;
}(SpeakeasyBase));
export { CompanyDeepsearchLeiQueryParams };
var CompanyDeepsearchLeiSecurity = /** @class */ (function (_super) {
    __extends(CompanyDeepsearchLeiSecurity, _super);
    function CompanyDeepsearchLeiSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], CompanyDeepsearchLeiSecurity.prototype, "userKey", void 0);
    return CompanyDeepsearchLeiSecurity;
}(SpeakeasyBase));
export { CompanyDeepsearchLeiSecurity };
var CompanyDeepsearchLeiRequest = /** @class */ (function (_super) {
    __extends(CompanyDeepsearchLeiRequest, _super);
    function CompanyDeepsearchLeiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompanyDeepsearchLeiPathParams)
    ], CompanyDeepsearchLeiRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompanyDeepsearchLeiQueryParams)
    ], CompanyDeepsearchLeiRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompanyDeepsearchLeiSecurity)
    ], CompanyDeepsearchLeiRequest.prototype, "security", void 0);
    return CompanyDeepsearchLeiRequest;
}(SpeakeasyBase));
export { CompanyDeepsearchLeiRequest };
var CompanyDeepsearchLeiResponse = /** @class */ (function (_super) {
    __extends(CompanyDeepsearchLeiResponse, _super);
    function CompanyDeepsearchLeiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CompanyDeepsearchLeiResponse.prototype, "companyDeepsearchLei200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CompanyDeepsearchLeiResponse.prototype, "companyDeepsearchLeiDefaultApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CompanyDeepsearchLeiResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CompanyDeepsearchLeiResponse.prototype, "statusCode", void 0);
    return CompanyDeepsearchLeiResponse;
}(SpeakeasyBase));
export { CompanyDeepsearchLeiResponse };
