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
var PackagesGetPackageVersionForOrganizationPathParams = /** @class */ (function (_super) {
    __extends(PackagesGetPackageVersionForOrganizationPathParams, _super);
    function PackagesGetPackageVersionForOrganizationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], PackagesGetPackageVersionForOrganizationPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_name" }),
        __metadata("design:type", String)
    ], PackagesGetPackageVersionForOrganizationPathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_type" }),
        __metadata("design:type", String)
    ], PackagesGetPackageVersionForOrganizationPathParams.prototype, "packageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_version_id" }),
        __metadata("design:type", Number)
    ], PackagesGetPackageVersionForOrganizationPathParams.prototype, "packageVersionId", void 0);
    return PackagesGetPackageVersionForOrganizationPathParams;
}(SpeakeasyBase));
export { PackagesGetPackageVersionForOrganizationPathParams };
var PackagesGetPackageVersionForOrganizationRequest = /** @class */ (function (_super) {
    __extends(PackagesGetPackageVersionForOrganizationRequest, _super);
    function PackagesGetPackageVersionForOrganizationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PackagesGetPackageVersionForOrganizationPathParams)
    ], PackagesGetPackageVersionForOrganizationRequest.prototype, "pathParams", void 0);
    return PackagesGetPackageVersionForOrganizationRequest;
}(SpeakeasyBase));
export { PackagesGetPackageVersionForOrganizationRequest };
var PackagesGetPackageVersionForOrganizationResponse = /** @class */ (function (_super) {
    __extends(PackagesGetPackageVersionForOrganizationResponse, _super);
    function PackagesGetPackageVersionForOrganizationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PackagesGetPackageVersionForOrganizationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PackagesGetPackageVersionForOrganizationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PackageVersion)
    ], PackagesGetPackageVersionForOrganizationResponse.prototype, "packageVersion", void 0);
    return PackagesGetPackageVersionForOrganizationResponse;
}(SpeakeasyBase));
export { PackagesGetPackageVersionForOrganizationResponse };
