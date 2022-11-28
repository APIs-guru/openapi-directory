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
var CreateOrReplaceSalesTaxPathParams = /** @class */ (function (_super) {
    __extends(CreateOrReplaceSalesTaxPathParams, _super);
    function CreateOrReplaceSalesTaxPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryCode" }),
        __metadata("design:type", String)
    ], CreateOrReplaceSalesTaxPathParams.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jurisdictionId" }),
        __metadata("design:type", String)
    ], CreateOrReplaceSalesTaxPathParams.prototype, "jurisdictionId", void 0);
    return CreateOrReplaceSalesTaxPathParams;
}(SpeakeasyBase));
export { CreateOrReplaceSalesTaxPathParams };
var CreateOrReplaceSalesTaxSecurity = /** @class */ (function (_super) {
    __extends(CreateOrReplaceSalesTaxSecurity, _super);
    function CreateOrReplaceSalesTaxSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], CreateOrReplaceSalesTaxSecurity.prototype, "apiAuth", void 0);
    return CreateOrReplaceSalesTaxSecurity;
}(SpeakeasyBase));
export { CreateOrReplaceSalesTaxSecurity };
var CreateOrReplaceSalesTaxRequest = /** @class */ (function (_super) {
    __extends(CreateOrReplaceSalesTaxRequest, _super);
    function CreateOrReplaceSalesTaxRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateOrReplaceSalesTaxPathParams)
    ], CreateOrReplaceSalesTaxRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SalesTaxBase)
    ], CreateOrReplaceSalesTaxRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateOrReplaceSalesTaxSecurity)
    ], CreateOrReplaceSalesTaxRequest.prototype, "security", void 0);
    return CreateOrReplaceSalesTaxRequest;
}(SpeakeasyBase));
export { CreateOrReplaceSalesTaxRequest };
var CreateOrReplaceSalesTaxResponse = /** @class */ (function (_super) {
    __extends(CreateOrReplaceSalesTaxResponse, _super);
    function CreateOrReplaceSalesTaxResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateOrReplaceSalesTaxResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateOrReplaceSalesTaxResponse.prototype, "statusCode", void 0);
    return CreateOrReplaceSalesTaxResponse;
}(SpeakeasyBase));
export { CreateOrReplaceSalesTaxResponse };
