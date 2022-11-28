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
export var DataPointsGetSortDirectionEnum;
(function (DataPointsGetSortDirectionEnum) {
    DataPointsGetSortDirectionEnum["Asc"] = "asc";
    DataPointsGetSortDirectionEnum["Desc"] = "desc";
})(DataPointsGetSortDirectionEnum || (DataPointsGetSortDirectionEnum = {}));
export var DataPointsGetStatusEnum;
(function (DataPointsGetStatusEnum) {
    DataPointsGetStatusEnum["Deleted"] = "deleted";
    DataPointsGetStatusEnum["Active"] = "active";
    DataPointsGetStatusEnum["Paused"] = "paused";
    DataPointsGetStatusEnum["Spam"] = "spam";
})(DataPointsGetStatusEnum || (DataPointsGetStatusEnum = {}));
export var DataPointsGetTypeEnum;
(function (DataPointsGetTypeEnum) {
    DataPointsGetTypeEnum["Tp"] = "tp";
    DataPointsGetTypeEnum["Tl"] = "tl";
})(DataPointsGetTypeEnum || (DataPointsGetTypeEnum = {}));
var DataPointsGetQueryParams = /** @class */ (function (_super) {
    __extends(DataPointsGetQueryParams, _super);
    function DataPointsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAfter" }),
        __metadata("design:type", String)
    ], DataPointsGetQueryParams.prototype, "createdAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdBefore" }),
        __metadata("design:type", String)
    ], DataPointsGetQueryParams.prototype, "createdBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DataPointsGetQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DataPointsGetQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onlyFavorites" }),
        __metadata("design:type", Boolean)
    ], DataPointsGetQueryParams.prototype, "onlyFavorites", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], DataPointsGetQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortDirection" }),
        __metadata("design:type", String)
    ], DataPointsGetQueryParams.prototype, "sortDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], DataPointsGetQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", String)
    ], DataPointsGetQueryParams.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textSearch" }),
        __metadata("design:type", String)
    ], DataPointsGetQueryParams.prototype, "textSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DataPointsGetQueryParams.prototype, "type", void 0);
    return DataPointsGetQueryParams;
}(SpeakeasyBase));
export { DataPointsGetQueryParams };
var DataPointsGetRequest = /** @class */ (function (_super) {
    __extends(DataPointsGetRequest, _super);
    function DataPointsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataPointsGetQueryParams)
    ], DataPointsGetRequest.prototype, "queryParams", void 0);
    return DataPointsGetRequest;
}(SpeakeasyBase));
export { DataPointsGetRequest };
var DataPointsGetResponse = /** @class */ (function (_super) {
    __extends(DataPointsGetResponse, _super);
    function DataPointsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64)
    ], DataPointsGetResponse.prototype, "apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataPointsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataPointsGetResponse.prototype, "statusCode", void 0);
    return DataPointsGetResponse;
}(SpeakeasyBase));
export { DataPointsGetResponse };
