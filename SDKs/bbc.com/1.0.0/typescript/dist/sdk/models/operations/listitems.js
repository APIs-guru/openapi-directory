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
export var ListItemsItemTypeEnum;
(function (ListItemsItemTypeEnum) {
    ListItemsItemTypeEnum["Chapter"] = "chapter";
    ListItemsItemTypeEnum["Highlight"] = "highlight";
    ListItemsItemTypeEnum["Music"] = "music";
    ListItemsItemTypeEnum["Speech"] = "speech";
    ListItemsItemTypeEnum["Other"] = "other";
})(ListItemsItemTypeEnum || (ListItemsItemTypeEnum = {}));
export var ListItemsMixinEnum;
(function (ListItemsMixinEnum) {
    ListItemsMixinEnum["Contributions"] = "contributions";
    ListItemsMixinEnum["Images"] = "images";
    ListItemsMixinEnum["Offset"] = "offset";
    ListItemsMixinEnum["PlayEvent"] = "play_event";
})(ListItemsMixinEnum || (ListItemsMixinEnum = {}));
export var ListItemsSortEnum;
(function (ListItemsSortEnum) {
    ListItemsSortEnum["Pid"] = "pid";
})(ListItemsSortEnum || (ListItemsSortEnum = {}));
export var ListItemsSortDirectionEnum;
(function (ListItemsSortDirectionEnum) {
    ListItemsSortDirectionEnum["Descending"] = "descending";
})(ListItemsSortDirectionEnum || (ListItemsSortDirectionEnum = {}));
var ListItemsQueryParams = /** @class */ (function (_super) {
    __extends(ListItemsQueryParams, _super);
    function ListItemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authority" }),
        __metadata("design:type", String)
    ], ListItemsQueryParams.prototype, "authority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Array)
    ], ListItemsQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id_type" }),
        __metadata("design:type", String)
    ], ListItemsQueryParams.prototype, "idType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_type" }),
        __metadata("design:type", Array)
    ], ListItemsQueryParams.prototype, "itemType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mixin" }),
        __metadata("design:type", Array)
    ], ListItemsQueryParams.prototype, "mixin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListItemsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListItemsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_id" }),
        __metadata("design:type", Array)
    ], ListItemsQueryParams.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_pid" }),
        __metadata("design:type", Array)
    ], ListItemsQueryParams.prototype, "partnerPid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=people" }),
        __metadata("design:type", String)
    ], ListItemsQueryParams.prototype, "people", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pid" }),
        __metadata("design:type", Array)
    ], ListItemsQueryParams.prototype, "pid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=programme" }),
        __metadata("design:type", String)
    ], ListItemsQueryParams.prototype, "programme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], ListItemsQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=segment_event" }),
        __metadata("design:type", String)
    ], ListItemsQueryParams.prototype, "segmentEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ListItemsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_direction" }),
        __metadata("design:type", String)
    ], ListItemsQueryParams.prototype, "sortDirection", void 0);
    return ListItemsQueryParams;
}(SpeakeasyBase));
export { ListItemsQueryParams };
var ListItemsRequest = /** @class */ (function (_super) {
    __extends(ListItemsRequest, _super);
    function ListItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListItemsQueryParams)
    ], ListItemsRequest.prototype, "queryParams", void 0);
    return ListItemsRequest;
}(SpeakeasyBase));
export { ListItemsRequest };
var ListItemsResponse = /** @class */ (function (_super) {
    __extends(ListItemsResponse, _super);
    function ListItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ListItemsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListItemsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], ListItemsResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListItemsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListItemsResponse.prototype, "nitro", void 0);
    return ListItemsResponse;
}(SpeakeasyBase));
export { ListItemsResponse };
