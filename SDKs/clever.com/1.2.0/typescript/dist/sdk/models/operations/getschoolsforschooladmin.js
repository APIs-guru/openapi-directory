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
var GetSchoolsForSchoolAdminPathParams = /** @class */ (function (_super) {
    __extends(GetSchoolsForSchoolAdminPathParams, _super);
    function GetSchoolsForSchoolAdminPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSchoolsForSchoolAdminPathParams.prototype, "id", void 0);
    return GetSchoolsForSchoolAdminPathParams;
}(SpeakeasyBase));
export { GetSchoolsForSchoolAdminPathParams };
var GetSchoolsForSchoolAdminQueryParams = /** @class */ (function (_super) {
    __extends(GetSchoolsForSchoolAdminQueryParams, _super);
    function GetSchoolsForSchoolAdminQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ending_before" }),
        __metadata("design:type", String)
    ], GetSchoolsForSchoolAdminQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSchoolsForSchoolAdminQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=starting_after" }),
        __metadata("design:type", String)
    ], GetSchoolsForSchoolAdminQueryParams.prototype, "startingAfter", void 0);
    return GetSchoolsForSchoolAdminQueryParams;
}(SpeakeasyBase));
export { GetSchoolsForSchoolAdminQueryParams };
var GetSchoolsForSchoolAdminRequest = /** @class */ (function (_super) {
    __extends(GetSchoolsForSchoolAdminRequest, _super);
    function GetSchoolsForSchoolAdminRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSchoolsForSchoolAdminPathParams)
    ], GetSchoolsForSchoolAdminRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSchoolsForSchoolAdminQueryParams)
    ], GetSchoolsForSchoolAdminRequest.prototype, "queryParams", void 0);
    return GetSchoolsForSchoolAdminRequest;
}(SpeakeasyBase));
export { GetSchoolsForSchoolAdminRequest };
var GetSchoolsForSchoolAdminResponse = /** @class */ (function (_super) {
    __extends(GetSchoolsForSchoolAdminResponse, _super);
    function GetSchoolsForSchoolAdminResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSchoolsForSchoolAdminResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFound)
    ], GetSchoolsForSchoolAdminResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SchoolsResponse)
    ], GetSchoolsForSchoolAdminResponse.prototype, "schoolsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSchoolsForSchoolAdminResponse.prototype, "statusCode", void 0);
    return GetSchoolsForSchoolAdminResponse;
}(SpeakeasyBase));
export { GetSchoolsForSchoolAdminResponse };
