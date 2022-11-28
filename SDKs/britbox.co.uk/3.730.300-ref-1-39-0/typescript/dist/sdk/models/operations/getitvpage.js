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
export var GetItvPageItemDetailExpandEnum;
(function (GetItvPageItemDetailExpandEnum) {
    GetItvPageItemDetailExpandEnum["All"] = "all";
    GetItvPageItemDetailExpandEnum["Children"] = "children";
    GetItvPageItemDetailExpandEnum["Ancestors"] = "ancestors";
})(GetItvPageItemDetailExpandEnum || (GetItvPageItemDetailExpandEnum = {}));
export var GetItvPageItemDetailSelectSeasonEnum;
(function (GetItvPageItemDetailSelectSeasonEnum) {
    GetItvPageItemDetailSelectSeasonEnum["First"] = "first";
    GetItvPageItemDetailSelectSeasonEnum["Latest"] = "latest";
})(GetItvPageItemDetailSelectSeasonEnum || (GetItvPageItemDetailSelectSeasonEnum = {}));
export var GetItvPageTextEntryFormatEnum;
(function (GetItvPageTextEntryFormatEnum) {
    GetItvPageTextEntryFormatEnum["Markdown"] = "markdown";
    GetItvPageTextEntryFormatEnum["Html"] = "html";
})(GetItvPageTextEntryFormatEnum || (GetItvPageTextEntryFormatEnum = {}));
var GetItvPageQueryParams = /** @class */ (function (_super) {
    __extends(GetItvPageQueryParams, _super);
    function GetItvPageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" }),
        __metadata("design:type", String)
    ], GetItvPageQueryParams.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], GetItvPageQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_detail_expand" }),
        __metadata("design:type", String)
    ], GetItvPageQueryParams.prototype, "itemDetailExpand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_detail_select_season" }),
        __metadata("design:type", String)
    ], GetItvPageQueryParams.prototype, "itemDetailSelectSeason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetItvPageQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=list_page_size" }),
        __metadata("design:type", Number)
    ], GetItvPageQueryParams.prototype, "listPageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=list_page_size_large" }),
        __metadata("design:type", Number)
    ], GetItvPageQueryParams.prototype, "listPageSizeLarge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_list_prefetch" }),
        __metadata("design:type", Number)
    ], GetItvPageQueryParams.prototype, "maxListPrefetch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_rating" }),
        __metadata("design:type", String)
    ], GetItvPageQueryParams.prototype, "maxRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" }),
        __metadata("design:type", String)
    ], GetItvPageQueryParams.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=segments" }),
        __metadata("design:type", Array)
    ], GetItvPageQueryParams.prototype, "segments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sub" }),
        __metadata("design:type", String)
    ], GetItvPageQueryParams.prototype, "sub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text_entry_format" }),
        __metadata("design:type", String)
    ], GetItvPageQueryParams.prototype, "textEntryFormat", void 0);
    return GetItvPageQueryParams;
}(SpeakeasyBase));
export { GetItvPageQueryParams };
var GetItvPageRequest = /** @class */ (function (_super) {
    __extends(GetItvPageRequest, _super);
    function GetItvPageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItvPageQueryParams)
    ], GetItvPageRequest.prototype, "queryParams", void 0);
    return GetItvPageRequest;
}(SpeakeasyBase));
export { GetItvPageRequest };
var GetItvPageResponse = /** @class */ (function (_super) {
    __extends(GetItvPageResponse, _super);
    function GetItvPageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetItvPageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Page)
    ], GetItvPageResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetItvPageResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetItvPageResponse.prototype, "statusCode", void 0);
    return GetItvPageResponse;
}(SpeakeasyBase));
export { GetItvPageResponse };
