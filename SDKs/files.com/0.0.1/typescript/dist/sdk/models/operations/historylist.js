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
var HistoryListQueryParams = /** @class */ (function (_super) {
    __extends(HistoryListQueryParams, _super);
    function HistoryListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], HistoryListQueryParams.prototype, "cursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=display" }),
        __metadata("design:type", String)
    ], HistoryListQueryParams.prototype, "display", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_at" }),
        __metadata("design:type", Date)
    ], HistoryListQueryParams.prototype, "endAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", Map)
    ], HistoryListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_gt" }),
        __metadata("design:type", Map)
    ], HistoryListQueryParams.prototype, "filterGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_gteq" }),
        __metadata("design:type", Map)
    ], HistoryListQueryParams.prototype, "filterGteq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_like" }),
        __metadata("design:type", Map)
    ], HistoryListQueryParams.prototype, "filterLike", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_lt" }),
        __metadata("design:type", Map)
    ], HistoryListQueryParams.prototype, "filterLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_lteq" }),
        __metadata("design:type", Map)
    ], HistoryListQueryParams.prototype, "filterLteq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], HistoryListQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", Map)
    ], HistoryListQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_at" }),
        __metadata("design:type", Date)
    ], HistoryListQueryParams.prototype, "startAt", void 0);
    return HistoryListQueryParams;
}(SpeakeasyBase));
export { HistoryListQueryParams };
var HistoryListRequest = /** @class */ (function (_super) {
    __extends(HistoryListRequest, _super);
    function HistoryListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HistoryListQueryParams)
    ], HistoryListRequest.prototype, "queryParams", void 0);
    return HistoryListRequest;
}(SpeakeasyBase));
export { HistoryListRequest };
var HistoryListResponse = /** @class */ (function (_super) {
    __extends(HistoryListResponse, _super);
    function HistoryListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ActionEntity }),
        __metadata("design:type", Array)
    ], HistoryListResponse.prototype, "actionEntities", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HistoryListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HistoryListResponse.prototype, "statusCode", void 0);
    return HistoryListResponse;
}(SpeakeasyBase));
export { HistoryListResponse };
