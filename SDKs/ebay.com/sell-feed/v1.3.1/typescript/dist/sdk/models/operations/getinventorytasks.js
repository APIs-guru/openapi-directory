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
var GetInventoryTasksQueryParams = /** @class */ (function (_super) {
    __extends(GetInventoryTasksQueryParams, _super);
    function GetInventoryTasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_range" }),
        __metadata("design:type", String)
    ], GetInventoryTasksQueryParams.prototype, "dateRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=feed_type" }),
        __metadata("design:type", String)
    ], GetInventoryTasksQueryParams.prototype, "feedType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], GetInventoryTasksQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=look_back_days" }),
        __metadata("design:type", String)
    ], GetInventoryTasksQueryParams.prototype, "lookBackDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetInventoryTasksQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=schedule_id" }),
        __metadata("design:type", String)
    ], GetInventoryTasksQueryParams.prototype, "scheduleId", void 0);
    return GetInventoryTasksQueryParams;
}(SpeakeasyBase));
export { GetInventoryTasksQueryParams };
var GetInventoryTasksSecurity = /** @class */ (function (_super) {
    __extends(GetInventoryTasksSecurity, _super);
    function GetInventoryTasksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetInventoryTasksSecurity.prototype, "apiAuth", void 0);
    return GetInventoryTasksSecurity;
}(SpeakeasyBase));
export { GetInventoryTasksSecurity };
var GetInventoryTasksRequest = /** @class */ (function (_super) {
    __extends(GetInventoryTasksRequest, _super);
    function GetInventoryTasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInventoryTasksQueryParams)
    ], GetInventoryTasksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInventoryTasksSecurity)
    ], GetInventoryTasksRequest.prototype, "security", void 0);
    return GetInventoryTasksRequest;
}(SpeakeasyBase));
export { GetInventoryTasksRequest };
var GetInventoryTasksResponse = /** @class */ (function (_super) {
    __extends(GetInventoryTasksResponse, _super);
    function GetInventoryTasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInventoryTasksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InventoryTaskCollection)
    ], GetInventoryTasksResponse.prototype, "inventoryTaskCollection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInventoryTasksResponse.prototype, "statusCode", void 0);
    return GetInventoryTasksResponse;
}(SpeakeasyBase));
export { GetInventoryTasksResponse };
