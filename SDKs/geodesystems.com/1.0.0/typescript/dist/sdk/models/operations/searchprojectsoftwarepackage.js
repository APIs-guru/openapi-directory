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
var SearchProjectSoftwarepackageQueryParams = /** @class */ (function (_super) {
    __extends(SearchProjectSoftwarepackageQueryParams, _super);
    function SearchProjectSoftwarepackageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.project_softwarepackage.capabilities" }),
        __metadata("design:type", String)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "searchProjectSoftwarepackageCapabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.project_softwarepackage.domain" }),
        __metadata("design:type", String)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "searchProjectSoftwarepackageDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.project_softwarepackage.license" }),
        __metadata("design:type", String)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "searchProjectSoftwarepackageLicense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.project_softwarepackage.platform" }),
        __metadata("design:type", String)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "searchProjectSoftwarepackagePlatform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.project_softwarepackage.software_type" }),
        __metadata("design:type", String)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "searchProjectSoftwarepackageSoftwareType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.project_softwarepackage.software_use" }),
        __metadata("design:type", String)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "searchProjectSoftwarepackageSoftwareUse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.project_softwarepackage.status" }),
        __metadata("design:type", String)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "searchProjectSoftwarepackageStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchProjectSoftwarepackageQueryParams.prototype, "todate", void 0);
    return SearchProjectSoftwarepackageQueryParams;
}(SpeakeasyBase));
export { SearchProjectSoftwarepackageQueryParams };
var SearchProjectSoftwarepackageRequest = /** @class */ (function (_super) {
    __extends(SearchProjectSoftwarepackageRequest, _super);
    function SearchProjectSoftwarepackageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchProjectSoftwarepackageQueryParams)
    ], SearchProjectSoftwarepackageRequest.prototype, "queryParams", void 0);
    return SearchProjectSoftwarepackageRequest;
}(SpeakeasyBase));
export { SearchProjectSoftwarepackageRequest };
var SearchProjectSoftwarepackageResponse = /** @class */ (function (_super) {
    __extends(SearchProjectSoftwarepackageResponse, _super);
    function SearchProjectSoftwarepackageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchProjectSoftwarepackageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchProjectSoftwarepackageResponse.prototype, "statusCode", void 0);
    return SearchProjectSoftwarepackageResponse;
}(SpeakeasyBase));
export { SearchProjectSoftwarepackageResponse };
