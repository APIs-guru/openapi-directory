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
export var ListImagesEmbargoedEnum;
(function (ListImagesEmbargoedEnum) {
    ListImagesEmbargoedEnum["Include"] = "include";
    ListImagesEmbargoedEnum["Exclude"] = "exclude";
    ListImagesEmbargoedEnum["Only"] = "only";
})(ListImagesEmbargoedEnum || (ListImagesEmbargoedEnum = {}));
export var ListImagesImageTypeEnum;
(function (ListImagesImageTypeEnum) {
    ListImagesImageTypeEnum["Standard"] = "standard";
    ListImagesImageTypeEnum["Podcast"] = "podcast";
    ListImagesImageTypeEnum["Store"] = "store";
    ListImagesImageTypeEnum["Portrait"] = "portrait";
    ListImagesImageTypeEnum["Letterbox"] = "letterbox";
})(ListImagesImageTypeEnum || (ListImagesImageTypeEnum = {}));
export var ListImagesSortEnum;
(function (ListImagesSortEnum) {
    ListImagesSortEnum["GroupPosition"] = "group_position";
    ListImagesSortEnum["Pid"] = "pid";
})(ListImagesSortEnum || (ListImagesSortEnum = {}));
export var ListImagesSortDirectionEnum;
(function (ListImagesSortDirectionEnum) {
    ListImagesSortDirectionEnum["Ascending"] = "ascending";
    ListImagesSortDirectionEnum["Descending"] = "descending";
})(ListImagesSortDirectionEnum || (ListImagesSortDirectionEnum = {}));
var ListImagesQueryParams = /** @class */ (function (_super) {
    __extends(ListImagesQueryParams, _super);
    function ListImagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=embargoed" }),
        __metadata("design:type", String)
    ], ListImagesQueryParams.prototype, "embargoed", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], ListImagesQueryParams.prototype, "group", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=image_type" }),
        __metadata("design:type", Array)
    ], ListImagesQueryParams.prototype, "imageType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=is_alternate_image_for" }),
        __metadata("design:type", String)
    ], ListImagesQueryParams.prototype, "isAlternateImageFor", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=is_image_for" }),
        __metadata("design:type", String)
    ], ListImagesQueryParams.prototype, "isImageFor", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListImagesQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListImagesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=partner_id" }),
        __metadata("design:type", Array)
    ], ListImagesQueryParams.prototype, "partnerId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=partner_pid" }),
        __metadata("design:type", Array)
    ], ListImagesQueryParams.prototype, "partnerPid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pid" }),
        __metadata("design:type", Array)
    ], ListImagesQueryParams.prototype, "pid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], ListImagesQueryParams.prototype, "q", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ListImagesQueryParams.prototype, "sort", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort_direction" }),
        __metadata("design:type", String)
    ], ListImagesQueryParams.prototype, "sortDirection", void 0);
    return ListImagesQueryParams;
}(SpeakeasyBase));
export { ListImagesQueryParams };
var ListImagesRequest = /** @class */ (function (_super) {
    __extends(ListImagesRequest, _super);
    function ListImagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListImagesQueryParams)
    ], ListImagesRequest.prototype, "queryParams", void 0);
    return ListImagesRequest;
}(SpeakeasyBase));
export { ListImagesRequest };
var ListImagesResponse = /** @class */ (function (_super) {
    __extends(ListImagesResponse, _super);
    function ListImagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ListImagesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListImagesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], ListImagesResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListImagesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListImagesResponse.prototype, "nitro", void 0);
    return ListImagesResponse;
}(SpeakeasyBase));
export { ListImagesResponse };
