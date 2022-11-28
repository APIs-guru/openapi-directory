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
var GetEpisodesByCategoryPathParams = /** @class */ (function (_super) {
    __extends(GetEpisodesByCategoryPathParams, _super);
    function GetEpisodesByCategoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" }),
        __metadata("design:type", String)
    ], GetEpisodesByCategoryPathParams.prototype, "category", void 0);
    return GetEpisodesByCategoryPathParams;
}(SpeakeasyBase));
export { GetEpisodesByCategoryPathParams };
export var GetEpisodesByCategorySortEnum;
(function (GetEpisodesByCategorySortEnum) {
    GetEpisodesByCategorySortEnum["Recent"] = "recent";
    GetEpisodesByCategorySortEnum["Popular"] = "popular";
})(GetEpisodesByCategorySortEnum || (GetEpisodesByCategorySortEnum = {}));
var GetEpisodesByCategoryQueryParams = /** @class */ (function (_super) {
    __extends(GetEpisodesByCategoryQueryParams, _super);
    function GetEpisodesByCategoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=availability" }),
        __metadata("design:type", String)
    ], GetEpisodesByCategoryQueryParams.prototype, "availability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetEpisodesByCategoryQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetEpisodesByCategoryQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetEpisodesByCategoryQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rights" }),
        __metadata("design:type", String)
    ], GetEpisodesByCategoryQueryParams.prototype, "rights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetEpisodesByCategoryQueryParams.prototype, "sort", void 0);
    return GetEpisodesByCategoryQueryParams;
}(SpeakeasyBase));
export { GetEpisodesByCategoryQueryParams };
var GetEpisodesByCategoryRequest = /** @class */ (function (_super) {
    __extends(GetEpisodesByCategoryRequest, _super);
    function GetEpisodesByCategoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEpisodesByCategoryPathParams)
    ], GetEpisodesByCategoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEpisodesByCategoryQueryParams)
    ], GetEpisodesByCategoryRequest.prototype, "queryParams", void 0);
    return GetEpisodesByCategoryRequest;
}(SpeakeasyBase));
export { GetEpisodesByCategoryRequest };
var GetEpisodesByCategoryResponse = /** @class */ (function (_super) {
    __extends(GetEpisodesByCategoryResponse, _super);
    function GetEpisodesByCategoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEpisodesByCategoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEpisodesByCategoryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEpisodesByCategoryResponse.prototype, "ibl", void 0);
    return GetEpisodesByCategoryResponse;
}(SpeakeasyBase));
export { GetEpisodesByCategoryResponse };
