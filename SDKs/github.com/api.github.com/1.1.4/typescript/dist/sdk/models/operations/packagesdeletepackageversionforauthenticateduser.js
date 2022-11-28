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
var PackagesDeletePackageVersionForAuthenticatedUserPathParams = /** @class */ (function (_super) {
    __extends(PackagesDeletePackageVersionForAuthenticatedUserPathParams, _super);
    function PackagesDeletePackageVersionForAuthenticatedUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_name" }),
        __metadata("design:type", String)
    ], PackagesDeletePackageVersionForAuthenticatedUserPathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_type" }),
        __metadata("design:type", String)
    ], PackagesDeletePackageVersionForAuthenticatedUserPathParams.prototype, "packageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_version_id" }),
        __metadata("design:type", Number)
    ], PackagesDeletePackageVersionForAuthenticatedUserPathParams.prototype, "packageVersionId", void 0);
    return PackagesDeletePackageVersionForAuthenticatedUserPathParams;
}(SpeakeasyBase));
export { PackagesDeletePackageVersionForAuthenticatedUserPathParams };
var PackagesDeletePackageVersionForAuthenticatedUserRequest = /** @class */ (function (_super) {
    __extends(PackagesDeletePackageVersionForAuthenticatedUserRequest, _super);
    function PackagesDeletePackageVersionForAuthenticatedUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PackagesDeletePackageVersionForAuthenticatedUserPathParams)
    ], PackagesDeletePackageVersionForAuthenticatedUserRequest.prototype, "pathParams", void 0);
    return PackagesDeletePackageVersionForAuthenticatedUserRequest;
}(SpeakeasyBase));
export { PackagesDeletePackageVersionForAuthenticatedUserRequest };
var PackagesDeletePackageVersionForAuthenticatedUserResponse = /** @class */ (function (_super) {
    __extends(PackagesDeletePackageVersionForAuthenticatedUserResponse, _super);
    function PackagesDeletePackageVersionForAuthenticatedUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PackagesDeletePackageVersionForAuthenticatedUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PackagesDeletePackageVersionForAuthenticatedUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], PackagesDeletePackageVersionForAuthenticatedUserResponse.prototype, "basicError", void 0);
    return PackagesDeletePackageVersionForAuthenticatedUserResponse;
}(SpeakeasyBase));
export { PackagesDeletePackageVersionForAuthenticatedUserResponse };
