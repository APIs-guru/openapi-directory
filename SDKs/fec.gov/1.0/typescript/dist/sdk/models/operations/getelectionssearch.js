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
export var GetElectionsSearchOfficeEnum;
(function (GetElectionsSearchOfficeEnum) {
    GetElectionsSearchOfficeEnum["House"] = "house";
    GetElectionsSearchOfficeEnum["Senate"] = "senate";
    GetElectionsSearchOfficeEnum["President"] = "president";
})(GetElectionsSearchOfficeEnum || (GetElectionsSearchOfficeEnum = {}));
var GetElectionsSearchQueryParams = /** @class */ (function (_super) {
    __extends(GetElectionsSearchQueryParams, _super);
    function GetElectionsSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetElectionsSearchQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" }),
        __metadata("design:type", Array)
    ], GetElectionsSearchQueryParams.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=district" }),
        __metadata("design:type", Array)
    ], GetElectionsSearchQueryParams.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=office" }),
        __metadata("design:type", Array)
    ], GetElectionsSearchQueryParams.prototype, "office", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetElectionsSearchQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetElectionsSearchQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", Array)
    ], GetElectionsSearchQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetElectionsSearchQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetElectionsSearchQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetElectionsSearchQueryParams.prototype, "sortNullsLast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", Array)
    ], GetElectionsSearchQueryParams.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" }),
        __metadata("design:type", Array)
    ], GetElectionsSearchQueryParams.prototype, "zip", void 0);
    return GetElectionsSearchQueryParams;
}(SpeakeasyBase));
export { GetElectionsSearchQueryParams };
var GetElectionsSearchRequest = /** @class */ (function (_super) {
    __extends(GetElectionsSearchRequest, _super);
    function GetElectionsSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetElectionsSearchQueryParams)
    ], GetElectionsSearchRequest.prototype, "queryParams", void 0);
    return GetElectionsSearchRequest;
}(SpeakeasyBase));
export { GetElectionsSearchRequest };
var GetElectionsSearchResponse = /** @class */ (function (_super) {
    __extends(GetElectionsSearchResponse, _super);
    function GetElectionsSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetElectionsSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ElectionsListPage)
    ], GetElectionsSearchResponse.prototype, "electionsListPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetElectionsSearchResponse.prototype, "statusCode", void 0);
    return GetElectionsSearchResponse;
}(SpeakeasyBase));
export { GetElectionsSearchResponse };
