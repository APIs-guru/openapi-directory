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
var GetStatisticsItemPathParams = /** @class */ (function (_super) {
    __extends(GetStatisticsItemPathParams, _super);
    function GetStatisticsItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=zone" }),
        __metadata("design:type", String)
    ], GetStatisticsItemPathParams.prototype, "zone", void 0);
    return GetStatisticsItemPathParams;
}(SpeakeasyBase));
export { GetStatisticsItemPathParams };
var GetStatisticsItemQueryParams = /** @class */ (function (_super) {
    __extends(GetStatisticsItemQueryParams, _super);
    function GetStatisticsItemQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetStatisticsItemQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", String)
    ], GetStatisticsItemQueryParams.prototype, "page", void 0);
    return GetStatisticsItemQueryParams;
}(SpeakeasyBase));
export { GetStatisticsItemQueryParams };
var GetStatisticsItemRequest = /** @class */ (function (_super) {
    __extends(GetStatisticsItemRequest, _super);
    function GetStatisticsItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetStatisticsItemPathParams)
    ], GetStatisticsItemRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetStatisticsItemQueryParams)
    ], GetStatisticsItemRequest.prototype, "queryParams", void 0);
    return GetStatisticsItemRequest;
}(SpeakeasyBase));
export { GetStatisticsItemRequest };
var GetStatisticsItemResponse = /** @class */ (function (_super) {
    __extends(GetStatisticsItemResponse, _super);
    function GetStatisticsItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetStatisticsItemResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetStatisticsItemResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ZoneStats)
    ], GetStatisticsItemResponse.prototype, "zoneStats", void 0);
    return GetStatisticsItemResponse;
}(SpeakeasyBase));
export { GetStatisticsItemResponse };
