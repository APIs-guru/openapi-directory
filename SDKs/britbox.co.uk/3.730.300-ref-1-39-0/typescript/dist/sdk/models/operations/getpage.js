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
export var GetPageItemDetailExpandEnum;
(function (GetPageItemDetailExpandEnum) {
    GetPageItemDetailExpandEnum["All"] = "all";
    GetPageItemDetailExpandEnum["Children"] = "children";
    GetPageItemDetailExpandEnum["Ancestors"] = "ancestors";
})(GetPageItemDetailExpandEnum || (GetPageItemDetailExpandEnum = {}));
export var GetPageItemDetailSelectSeasonEnum;
(function (GetPageItemDetailSelectSeasonEnum) {
    GetPageItemDetailSelectSeasonEnum["First"] = "first";
    GetPageItemDetailSelectSeasonEnum["Latest"] = "latest";
})(GetPageItemDetailSelectSeasonEnum || (GetPageItemDetailSelectSeasonEnum = {}));
export var GetPageTextEntryFormatEnum;
(function (GetPageTextEntryFormatEnum) {
    GetPageTextEntryFormatEnum["Markdown"] = "markdown";
    GetPageTextEntryFormatEnum["Html"] = "html";
})(GetPageTextEntryFormatEnum || (GetPageTextEntryFormatEnum = {}));
var GetPageQueryParams = /** @class */ (function (_super) {
    __extends(GetPageQueryParams, _super);
    function GetPageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" }),
        __metadata("design:type", String)
    ], GetPageQueryParams.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], GetPageQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_detail_expand" }),
        __metadata("design:type", String)
    ], GetPageQueryParams.prototype, "itemDetailExpand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_detail_select_season" }),
        __metadata("design:type", String)
    ], GetPageQueryParams.prototype, "itemDetailSelectSeason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetPageQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=list_page_size" }),
        __metadata("design:type", Number)
    ], GetPageQueryParams.prototype, "listPageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=list_page_size_large" }),
        __metadata("design:type", Number)
    ], GetPageQueryParams.prototype, "listPageSizeLarge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_list_prefetch" }),
        __metadata("design:type", Number)
    ], GetPageQueryParams.prototype, "maxListPrefetch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_rating" }),
        __metadata("design:type", String)
    ], GetPageQueryParams.prototype, "maxRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" }),
        __metadata("design:type", String)
    ], GetPageQueryParams.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=segments" }),
        __metadata("design:type", Array)
    ], GetPageQueryParams.prototype, "segments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sub" }),
        __metadata("design:type", String)
    ], GetPageQueryParams.prototype, "sub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text_entry_format" }),
        __metadata("design:type", String)
    ], GetPageQueryParams.prototype, "textEntryFormat", void 0);
    return GetPageQueryParams;
}(SpeakeasyBase));
export { GetPageQueryParams };
var GetPageRequest = /** @class */ (function (_super) {
    __extends(GetPageRequest, _super);
    function GetPageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPageQueryParams)
    ], GetPageRequest.prototype, "queryParams", void 0);
    return GetPageRequest;
}(SpeakeasyBase));
export { GetPageRequest };
var GetPageResponse = /** @class */ (function (_super) {
    __extends(GetPageResponse, _super);
    function GetPageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Page)
    ], GetPageResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetPageResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPageResponse.prototype, "statusCode", void 0);
    return GetPageResponse;
}(SpeakeasyBase));
export { GetPageResponse };
