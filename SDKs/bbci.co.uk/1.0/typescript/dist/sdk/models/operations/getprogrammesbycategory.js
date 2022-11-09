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
var GetProgrammesByCategoryPathParams = /** @class */ (function (_super) {
    __extends(GetProgrammesByCategoryPathParams, _super);
    function GetProgrammesByCategoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=category" }),
        __metadata("design:type", String)
    ], GetProgrammesByCategoryPathParams.prototype, "category", void 0);
    return GetProgrammesByCategoryPathParams;
}(SpeakeasyBase));
export { GetProgrammesByCategoryPathParams };
var GetProgrammesByCategoryQueryParams = /** @class */ (function (_super) {
    __extends(GetProgrammesByCategoryQueryParams, _super);
    function GetProgrammesByCategoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=availability" }),
        __metadata("design:type", String)
    ], GetProgrammesByCategoryQueryParams.prototype, "availability", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetProgrammesByCategoryQueryParams.prototype, "lang", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetProgrammesByCategoryQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetProgrammesByCategoryQueryParams.prototype, "perPage", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=rights" }),
        __metadata("design:type", String)
    ], GetProgrammesByCategoryQueryParams.prototype, "rights", void 0);
    return GetProgrammesByCategoryQueryParams;
}(SpeakeasyBase));
export { GetProgrammesByCategoryQueryParams };
var GetProgrammesByCategoryRequest = /** @class */ (function (_super) {
    __extends(GetProgrammesByCategoryRequest, _super);
    function GetProgrammesByCategoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetProgrammesByCategoryPathParams)
    ], GetProgrammesByCategoryRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetProgrammesByCategoryQueryParams)
    ], GetProgrammesByCategoryRequest.prototype, "queryParams", void 0);
    return GetProgrammesByCategoryRequest;
}(SpeakeasyBase));
export { GetProgrammesByCategoryRequest };
var GetProgrammesByCategoryResponse = /** @class */ (function (_super) {
    __extends(GetProgrammesByCategoryResponse, _super);
    function GetProgrammesByCategoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetProgrammesByCategoryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetProgrammesByCategoryResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetProgrammesByCategoryResponse.prototype, "ibl", void 0);
    return GetProgrammesByCategoryResponse;
}(SpeakeasyBase));
export { GetProgrammesByCategoryResponse };
