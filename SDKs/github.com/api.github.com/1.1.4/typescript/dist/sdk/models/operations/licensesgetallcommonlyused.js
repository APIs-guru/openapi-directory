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
var LicensesGetAllCommonlyUsedQueryParams = /** @class */ (function (_super) {
    __extends(LicensesGetAllCommonlyUsedQueryParams, _super);
    function LicensesGetAllCommonlyUsedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featured" }),
        __metadata("design:type", Boolean)
    ], LicensesGetAllCommonlyUsedQueryParams.prototype, "featured", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], LicensesGetAllCommonlyUsedQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], LicensesGetAllCommonlyUsedQueryParams.prototype, "perPage", void 0);
    return LicensesGetAllCommonlyUsedQueryParams;
}(SpeakeasyBase));
export { LicensesGetAllCommonlyUsedQueryParams };
var LicensesGetAllCommonlyUsedRequest = /** @class */ (function (_super) {
    __extends(LicensesGetAllCommonlyUsedRequest, _super);
    function LicensesGetAllCommonlyUsedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LicensesGetAllCommonlyUsedQueryParams)
    ], LicensesGetAllCommonlyUsedRequest.prototype, "queryParams", void 0);
    return LicensesGetAllCommonlyUsedRequest;
}(SpeakeasyBase));
export { LicensesGetAllCommonlyUsedRequest };
var LicensesGetAllCommonlyUsedResponse = /** @class */ (function (_super) {
    __extends(LicensesGetAllCommonlyUsedResponse, _super);
    function LicensesGetAllCommonlyUsedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LicensesGetAllCommonlyUsedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LicensesGetAllCommonlyUsedResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.LicenseSimple }),
        __metadata("design:type", Array)
    ], LicensesGetAllCommonlyUsedResponse.prototype, "licenseSimples", void 0);
    return LicensesGetAllCommonlyUsedResponse;
}(SpeakeasyBase));
export { LicensesGetAllCommonlyUsedResponse };
