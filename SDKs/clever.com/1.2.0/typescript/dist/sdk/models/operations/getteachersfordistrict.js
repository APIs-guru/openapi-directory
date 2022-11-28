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
var GetTeachersForDistrictPathParams = /** @class */ (function (_super) {
    __extends(GetTeachersForDistrictPathParams, _super);
    function GetTeachersForDistrictPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetTeachersForDistrictPathParams.prototype, "id", void 0);
    return GetTeachersForDistrictPathParams;
}(SpeakeasyBase));
export { GetTeachersForDistrictPathParams };
var GetTeachersForDistrictQueryParams = /** @class */ (function (_super) {
    __extends(GetTeachersForDistrictQueryParams, _super);
    function GetTeachersForDistrictQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ending_before" }),
        __metadata("design:type", String)
    ], GetTeachersForDistrictQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetTeachersForDistrictQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=starting_after" }),
        __metadata("design:type", String)
    ], GetTeachersForDistrictQueryParams.prototype, "startingAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=where" }),
        __metadata("design:type", String)
    ], GetTeachersForDistrictQueryParams.prototype, "where", void 0);
    return GetTeachersForDistrictQueryParams;
}(SpeakeasyBase));
export { GetTeachersForDistrictQueryParams };
var GetTeachersForDistrictRequest = /** @class */ (function (_super) {
    __extends(GetTeachersForDistrictRequest, _super);
    function GetTeachersForDistrictRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeachersForDistrictPathParams)
    ], GetTeachersForDistrictRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeachersForDistrictQueryParams)
    ], GetTeachersForDistrictRequest.prototype, "queryParams", void 0);
    return GetTeachersForDistrictRequest;
}(SpeakeasyBase));
export { GetTeachersForDistrictRequest };
var GetTeachersForDistrictResponse = /** @class */ (function (_super) {
    __extends(GetTeachersForDistrictResponse, _super);
    function GetTeachersForDistrictResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeachersForDistrictResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFound)
    ], GetTeachersForDistrictResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeachersForDistrictResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TeachersResponse)
    ], GetTeachersForDistrictResponse.prototype, "teachersResponse", void 0);
    return GetTeachersForDistrictResponse;
}(SpeakeasyBase));
export { GetTeachersForDistrictResponse };
