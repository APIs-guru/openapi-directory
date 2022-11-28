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
var GetStudentsForDistrictPathParams = /** @class */ (function (_super) {
    __extends(GetStudentsForDistrictPathParams, _super);
    function GetStudentsForDistrictPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetStudentsForDistrictPathParams.prototype, "id", void 0);
    return GetStudentsForDistrictPathParams;
}(SpeakeasyBase));
export { GetStudentsForDistrictPathParams };
var GetStudentsForDistrictQueryParams = /** @class */ (function (_super) {
    __extends(GetStudentsForDistrictQueryParams, _super);
    function GetStudentsForDistrictQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ending_before" }),
        __metadata("design:type", String)
    ], GetStudentsForDistrictQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetStudentsForDistrictQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=starting_after" }),
        __metadata("design:type", String)
    ], GetStudentsForDistrictQueryParams.prototype, "startingAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=where" }),
        __metadata("design:type", String)
    ], GetStudentsForDistrictQueryParams.prototype, "where", void 0);
    return GetStudentsForDistrictQueryParams;
}(SpeakeasyBase));
export { GetStudentsForDistrictQueryParams };
var GetStudentsForDistrictRequest = /** @class */ (function (_super) {
    __extends(GetStudentsForDistrictRequest, _super);
    function GetStudentsForDistrictRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStudentsForDistrictPathParams)
    ], GetStudentsForDistrictRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStudentsForDistrictQueryParams)
    ], GetStudentsForDistrictRequest.prototype, "queryParams", void 0);
    return GetStudentsForDistrictRequest;
}(SpeakeasyBase));
export { GetStudentsForDistrictRequest };
var GetStudentsForDistrictResponse = /** @class */ (function (_super) {
    __extends(GetStudentsForDistrictResponse, _super);
    function GetStudentsForDistrictResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetStudentsForDistrictResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFound)
    ], GetStudentsForDistrictResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetStudentsForDistrictResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StudentsResponse)
    ], GetStudentsForDistrictResponse.prototype, "studentsResponse", void 0);
    return GetStudentsForDistrictResponse;
}(SpeakeasyBase));
export { GetStudentsForDistrictResponse };
