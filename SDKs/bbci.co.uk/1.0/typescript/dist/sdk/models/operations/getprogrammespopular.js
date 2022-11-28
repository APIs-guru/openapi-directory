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
var GetProgrammesPopularQueryParams = /** @class */ (function (_super) {
    __extends(GetProgrammesPopularQueryParams, _super);
    function GetProgrammesPopularQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=availability" }),
        __metadata("design:type", String)
    ], GetProgrammesPopularQueryParams.prototype, "availability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=initial_child_count" }),
        __metadata("design:type", Number)
    ], GetProgrammesPopularQueryParams.prototype, "initialChildCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mixin" }),
        __metadata("design:type", Array)
    ], GetProgrammesPopularQueryParams.prototype, "mixin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetProgrammesPopularQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetProgrammesPopularQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rights" }),
        __metadata("design:type", String)
    ], GetProgrammesPopularQueryParams.prototype, "rights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetProgrammesPopularQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_direction" }),
        __metadata("design:type", String)
    ], GetProgrammesPopularQueryParams.prototype, "sortDirection", void 0);
    return GetProgrammesPopularQueryParams;
}(SpeakeasyBase));
export { GetProgrammesPopularQueryParams };
var GetProgrammesPopularRequest = /** @class */ (function (_super) {
    __extends(GetProgrammesPopularRequest, _super);
    function GetProgrammesPopularRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProgrammesPopularQueryParams)
    ], GetProgrammesPopularRequest.prototype, "queryParams", void 0);
    return GetProgrammesPopularRequest;
}(SpeakeasyBase));
export { GetProgrammesPopularRequest };
var GetProgrammesPopularResponse = /** @class */ (function (_super) {
    __extends(GetProgrammesPopularResponse, _super);
    function GetProgrammesPopularResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProgrammesPopularResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProgrammesPopularResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetProgrammesPopularResponse.prototype, "ibl", void 0);
    return GetProgrammesPopularResponse;
}(SpeakeasyBase));
export { GetProgrammesPopularResponse };
