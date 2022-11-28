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
var HistoryListForFolderPathParams = /** @class */ (function (_super) {
    __extends(HistoryListForFolderPathParams, _super);
    function HistoryListForFolderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], HistoryListForFolderPathParams.prototype, "path", void 0);
    return HistoryListForFolderPathParams;
}(SpeakeasyBase));
export { HistoryListForFolderPathParams };
var HistoryListForFolderQueryParams = /** @class */ (function (_super) {
    __extends(HistoryListForFolderQueryParams, _super);
    function HistoryListForFolderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], HistoryListForFolderQueryParams.prototype, "cursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=display" }),
        __metadata("design:type", String)
    ], HistoryListForFolderQueryParams.prototype, "display", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_at" }),
        __metadata("design:type", Date)
    ], HistoryListForFolderQueryParams.prototype, "endAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], HistoryListForFolderQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", Map)
    ], HistoryListForFolderQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_at" }),
        __metadata("design:type", Date)
    ], HistoryListForFolderQueryParams.prototype, "startAt", void 0);
    return HistoryListForFolderQueryParams;
}(SpeakeasyBase));
export { HistoryListForFolderQueryParams };
var HistoryListForFolderRequest = /** @class */ (function (_super) {
    __extends(HistoryListForFolderRequest, _super);
    function HistoryListForFolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HistoryListForFolderPathParams)
    ], HistoryListForFolderRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HistoryListForFolderQueryParams)
    ], HistoryListForFolderRequest.prototype, "queryParams", void 0);
    return HistoryListForFolderRequest;
}(SpeakeasyBase));
export { HistoryListForFolderRequest };
var HistoryListForFolderResponse = /** @class */ (function (_super) {
    __extends(HistoryListForFolderResponse, _super);
    function HistoryListForFolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ActionEntity }),
        __metadata("design:type", Array)
    ], HistoryListForFolderResponse.prototype, "actionEntities", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HistoryListForFolderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HistoryListForFolderResponse.prototype, "statusCode", void 0);
    return HistoryListForFolderResponse;
}(SpeakeasyBase));
export { HistoryListForFolderResponse };
