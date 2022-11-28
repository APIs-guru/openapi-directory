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
var GetTeachersForSchoolPathParams = /** @class */ (function (_super) {
    __extends(GetTeachersForSchoolPathParams, _super);
    function GetTeachersForSchoolPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetTeachersForSchoolPathParams.prototype, "id", void 0);
    return GetTeachersForSchoolPathParams;
}(SpeakeasyBase));
export { GetTeachersForSchoolPathParams };
var GetTeachersForSchoolQueryParams = /** @class */ (function (_super) {
    __extends(GetTeachersForSchoolQueryParams, _super);
    function GetTeachersForSchoolQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ending_before" }),
        __metadata("design:type", String)
    ], GetTeachersForSchoolQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetTeachersForSchoolQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=starting_after" }),
        __metadata("design:type", String)
    ], GetTeachersForSchoolQueryParams.prototype, "startingAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=where" }),
        __metadata("design:type", String)
    ], GetTeachersForSchoolQueryParams.prototype, "where", void 0);
    return GetTeachersForSchoolQueryParams;
}(SpeakeasyBase));
export { GetTeachersForSchoolQueryParams };
var GetTeachersForSchoolRequest = /** @class */ (function (_super) {
    __extends(GetTeachersForSchoolRequest, _super);
    function GetTeachersForSchoolRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeachersForSchoolPathParams)
    ], GetTeachersForSchoolRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeachersForSchoolQueryParams)
    ], GetTeachersForSchoolRequest.prototype, "queryParams", void 0);
    return GetTeachersForSchoolRequest;
}(SpeakeasyBase));
export { GetTeachersForSchoolRequest };
var GetTeachersForSchoolResponse = /** @class */ (function (_super) {
    __extends(GetTeachersForSchoolResponse, _super);
    function GetTeachersForSchoolResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeachersForSchoolResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFound)
    ], GetTeachersForSchoolResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeachersForSchoolResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TeachersResponse)
    ], GetTeachersForSchoolResponse.prototype, "teachersResponse", void 0);
    return GetTeachersForSchoolResponse;
}(SpeakeasyBase));
export { GetTeachersForSchoolResponse };
