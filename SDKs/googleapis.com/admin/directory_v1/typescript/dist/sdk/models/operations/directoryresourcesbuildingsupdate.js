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
var DirectoryResourcesBuildingsUpdatePathParams = /** @class */ (function (_super) {
    __extends(DirectoryResourcesBuildingsUpdatePathParams, _super);
    function DirectoryResourcesBuildingsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=buildingId" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsUpdatePathParams.prototype, "buildingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsUpdatePathParams.prototype, "customer", void 0);
    return DirectoryResourcesBuildingsUpdatePathParams;
}(SpeakeasyBase));
export { DirectoryResourcesBuildingsUpdatePathParams };
export var DirectoryResourcesBuildingsUpdateCoordinatesSourceEnum;
(function (DirectoryResourcesBuildingsUpdateCoordinatesSourceEnum) {
    DirectoryResourcesBuildingsUpdateCoordinatesSourceEnum["ClientSpecified"] = "CLIENT_SPECIFIED";
    DirectoryResourcesBuildingsUpdateCoordinatesSourceEnum["ResolvedFromAddress"] = "RESOLVED_FROM_ADDRESS";
    DirectoryResourcesBuildingsUpdateCoordinatesSourceEnum["SourceUnspecified"] = "SOURCE_UNSPECIFIED";
})(DirectoryResourcesBuildingsUpdateCoordinatesSourceEnum || (DirectoryResourcesBuildingsUpdateCoordinatesSourceEnum = {}));
var DirectoryResourcesBuildingsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryResourcesBuildingsUpdateQueryParams, _super);
    function DirectoryResourcesBuildingsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=coordinatesSource" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsUpdateQueryParams.prototype, "coordinatesSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryResourcesBuildingsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryResourcesBuildingsUpdateQueryParams;
}(SpeakeasyBase));
export { DirectoryResourcesBuildingsUpdateQueryParams };
var DirectoryResourcesBuildingsUpdateSecurity = /** @class */ (function (_super) {
    __extends(DirectoryResourcesBuildingsUpdateSecurity, _super);
    function DirectoryResourcesBuildingsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryResourcesBuildingsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryResourcesBuildingsUpdateSecurity.prototype, "oauth2c", void 0);
    return DirectoryResourcesBuildingsUpdateSecurity;
}(SpeakeasyBase));
export { DirectoryResourcesBuildingsUpdateSecurity };
var DirectoryResourcesBuildingsUpdateRequest = /** @class */ (function (_super) {
    __extends(DirectoryResourcesBuildingsUpdateRequest, _super);
    function DirectoryResourcesBuildingsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesBuildingsUpdatePathParams)
    ], DirectoryResourcesBuildingsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesBuildingsUpdateQueryParams)
    ], DirectoryResourcesBuildingsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Building)
    ], DirectoryResourcesBuildingsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesBuildingsUpdateSecurity)
    ], DirectoryResourcesBuildingsUpdateRequest.prototype, "security", void 0);
    return DirectoryResourcesBuildingsUpdateRequest;
}(SpeakeasyBase));
export { DirectoryResourcesBuildingsUpdateRequest };
var DirectoryResourcesBuildingsUpdateResponse = /** @class */ (function (_super) {
    __extends(DirectoryResourcesBuildingsUpdateResponse, _super);
    function DirectoryResourcesBuildingsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Building)
    ], DirectoryResourcesBuildingsUpdateResponse.prototype, "building", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryResourcesBuildingsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryResourcesBuildingsUpdateResponse.prototype, "statusCode", void 0);
    return DirectoryResourcesBuildingsUpdateResponse;
}(SpeakeasyBase));
export { DirectoryResourcesBuildingsUpdateResponse };
