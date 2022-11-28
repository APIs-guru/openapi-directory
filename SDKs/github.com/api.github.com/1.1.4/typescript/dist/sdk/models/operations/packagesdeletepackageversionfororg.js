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
var PackagesDeletePackageVersionForOrgPathParams = /** @class */ (function (_super) {
    __extends(PackagesDeletePackageVersionForOrgPathParams, _super);
    function PackagesDeletePackageVersionForOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], PackagesDeletePackageVersionForOrgPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_name" }),
        __metadata("design:type", String)
    ], PackagesDeletePackageVersionForOrgPathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_type" }),
        __metadata("design:type", String)
    ], PackagesDeletePackageVersionForOrgPathParams.prototype, "packageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_version_id" }),
        __metadata("design:type", Number)
    ], PackagesDeletePackageVersionForOrgPathParams.prototype, "packageVersionId", void 0);
    return PackagesDeletePackageVersionForOrgPathParams;
}(SpeakeasyBase));
export { PackagesDeletePackageVersionForOrgPathParams };
var PackagesDeletePackageVersionForOrgRequest = /** @class */ (function (_super) {
    __extends(PackagesDeletePackageVersionForOrgRequest, _super);
    function PackagesDeletePackageVersionForOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PackagesDeletePackageVersionForOrgPathParams)
    ], PackagesDeletePackageVersionForOrgRequest.prototype, "pathParams", void 0);
    return PackagesDeletePackageVersionForOrgRequest;
}(SpeakeasyBase));
export { PackagesDeletePackageVersionForOrgRequest };
var PackagesDeletePackageVersionForOrgResponse = /** @class */ (function (_super) {
    __extends(PackagesDeletePackageVersionForOrgResponse, _super);
    function PackagesDeletePackageVersionForOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PackagesDeletePackageVersionForOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PackagesDeletePackageVersionForOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], PackagesDeletePackageVersionForOrgResponse.prototype, "basicError", void 0);
    return PackagesDeletePackageVersionForOrgResponse;
}(SpeakeasyBase));
export { PackagesDeletePackageVersionForOrgResponse };
