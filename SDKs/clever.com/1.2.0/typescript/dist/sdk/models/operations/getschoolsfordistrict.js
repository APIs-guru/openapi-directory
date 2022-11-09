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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetSchoolsForDistrictPathParams = /** @class */ (function (_super) {
    __extends(GetSchoolsForDistrictPathParams, _super);
    function GetSchoolsForDistrictPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSchoolsForDistrictPathParams.prototype, "id", void 0);
    return GetSchoolsForDistrictPathParams;
}(SpeakeasyBase));
export { GetSchoolsForDistrictPathParams };
var GetSchoolsForDistrictQueryParams = /** @class */ (function (_super) {
    __extends(GetSchoolsForDistrictQueryParams, _super);
    function GetSchoolsForDistrictQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ending_before" }),
        __metadata("design:type", String)
    ], GetSchoolsForDistrictQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSchoolsForDistrictQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=starting_after" }),
        __metadata("design:type", String)
    ], GetSchoolsForDistrictQueryParams.prototype, "startingAfter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=where" }),
        __metadata("design:type", String)
    ], GetSchoolsForDistrictQueryParams.prototype, "where", void 0);
    return GetSchoolsForDistrictQueryParams;
}(SpeakeasyBase));
export { GetSchoolsForDistrictQueryParams };
var GetSchoolsForDistrictRequest = /** @class */ (function (_super) {
    __extends(GetSchoolsForDistrictRequest, _super);
    function GetSchoolsForDistrictRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSchoolsForDistrictPathParams)
    ], GetSchoolsForDistrictRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSchoolsForDistrictQueryParams)
    ], GetSchoolsForDistrictRequest.prototype, "queryParams", void 0);
    return GetSchoolsForDistrictRequest;
}(SpeakeasyBase));
export { GetSchoolsForDistrictRequest };
var GetSchoolsForDistrictResponse = /** @class */ (function (_super) {
    __extends(GetSchoolsForDistrictResponse, _super);
    function GetSchoolsForDistrictResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSchoolsForDistrictResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFound)
    ], GetSchoolsForDistrictResponse.prototype, "notFound", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SchoolsResponse)
    ], GetSchoolsForDistrictResponse.prototype, "schoolsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSchoolsForDistrictResponse.prototype, "statusCode", void 0);
    return GetSchoolsForDistrictResponse;
}(SpeakeasyBase));
export { GetSchoolsForDistrictResponse };
