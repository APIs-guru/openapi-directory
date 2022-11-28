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
export var WorkTypeApiSearchQueryOptionsOrderEnum;
(function (WorkTypeApiSearchQueryOptionsOrderEnum) {
    WorkTypeApiSearchQueryOptionsOrderEnum["None"] = "None";
    WorkTypeApiSearchQueryOptionsOrderEnum["Asc"] = "Asc";
    WorkTypeApiSearchQueryOptionsOrderEnum["Desc"] = "Desc";
})(WorkTypeApiSearchQueryOptionsOrderEnum || (WorkTypeApiSearchQueryOptionsOrderEnum = {}));
var WorkTypeApiSearchQueryParams = /** @class */ (function (_super) {
    __extends(WorkTypeApiSearchQueryParams, _super);
    function WorkTypeApiSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryOptions.order" }),
        __metadata("design:type", String)
    ], WorkTypeApiSearchQueryParams.prototype, "queryOptionsOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryOptions.orderBy" }),
        __metadata("design:type", String)
    ], WorkTypeApiSearchQueryParams.prototype, "queryOptionsOrderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryOptions.page" }),
        __metadata("design:type", Number)
    ], WorkTypeApiSearchQueryParams.prototype, "queryOptionsPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryOptions.pageSize" }),
        __metadata("design:type", Number)
    ], WorkTypeApiSearchQueryParams.prototype, "queryOptionsPageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryOptions.query" }),
        __metadata("design:type", String)
    ], WorkTypeApiSearchQueryParams.prototype, "queryOptionsQuery", void 0);
    return WorkTypeApiSearchQueryParams;
}(SpeakeasyBase));
export { WorkTypeApiSearchQueryParams };
var WorkTypeApiSearchHeaders = /** @class */ (function (_super) {
    __extends(WorkTypeApiSearchHeaders, _super);
    function WorkTypeApiSearchHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" }),
        __metadata("design:type", String)
    ], WorkTypeApiSearchHeaders.prototype, "xAuthKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" }),
        __metadata("design:type", String)
    ], WorkTypeApiSearchHeaders.prototype, "xAuthSecret", void 0);
    return WorkTypeApiSearchHeaders;
}(SpeakeasyBase));
export { WorkTypeApiSearchHeaders };
var WorkTypeApiSearchRequest = /** @class */ (function (_super) {
    __extends(WorkTypeApiSearchRequest, _super);
    function WorkTypeApiSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WorkTypeApiSearchQueryParams)
    ], WorkTypeApiSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WorkTypeApiSearchHeaders)
    ], WorkTypeApiSearchRequest.prototype, "headers", void 0);
    return WorkTypeApiSearchRequest;
}(SpeakeasyBase));
export { WorkTypeApiSearchRequest };
var WorkTypeApiSearchResponse = /** @class */ (function (_super) {
    __extends(WorkTypeApiSearchResponse, _super);
    function WorkTypeApiSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], WorkTypeApiSearchResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], WorkTypeApiSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WorkTypeApiSearchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.WorkTypeDetailsApiModel }),
        __metadata("design:type", Array)
    ], WorkTypeApiSearchResponse.prototype, "workTypeDetailsApiModels", void 0);
    return WorkTypeApiSearchResponse;
}(SpeakeasyBase));
export { WorkTypeApiSearchResponse };
