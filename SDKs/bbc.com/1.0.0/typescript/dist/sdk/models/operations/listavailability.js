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
export var ListAvailabilityAvailabilityEnum;
(function (ListAvailabilityAvailabilityEnum) {
    ListAvailabilityAvailabilityEnum["Available"] = "available";
})(ListAvailabilityAvailabilityEnum || (ListAvailabilityAvailabilityEnum = {}));
export var ListAvailabilitySortEnum;
(function (ListAvailabilitySortEnum) {
    ListAvailabilitySortEnum["ScheduledStart"] = "scheduled_start";
})(ListAvailabilitySortEnum || (ListAvailabilitySortEnum = {}));
export var ListAvailabilitySortDirectionEnum;
(function (ListAvailabilitySortDirectionEnum) {
    ListAvailabilitySortDirectionEnum["Ascending"] = "ascending";
    ListAvailabilitySortDirectionEnum["Descending"] = "descending";
})(ListAvailabilitySortDirectionEnum || (ListAvailabilitySortDirectionEnum = {}));
export var ListAvailabilityTerritoryEnum;
(function (ListAvailabilityTerritoryEnum) {
    ListAvailabilityTerritoryEnum["Uk"] = "uk";
    ListAvailabilityTerritoryEnum["Nonuk"] = "nonuk";
    ListAvailabilityTerritoryEnum["World"] = "world";
})(ListAvailabilityTerritoryEnum || (ListAvailabilityTerritoryEnum = {}));
var ListAvailabilityQueryParams = /** @class */ (function (_super) {
    __extends(ListAvailabilityQueryParams, _super);
    function ListAvailabilityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=availability" }),
        __metadata("design:type", Array)
    ], ListAvailabilityQueryParams.prototype, "availability", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=debug" }),
        __metadata("design:type", Boolean)
    ], ListAvailabilityQueryParams.prototype, "debug", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=descendants_of" }),
        __metadata("design:type", Array)
    ], ListAvailabilityQueryParams.prototype, "descendantsOf", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=media_set" }),
        __metadata("design:type", Array)
    ], ListAvailabilityQueryParams.prototype, "mediaSet", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListAvailabilityQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListAvailabilityQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ListAvailabilityQueryParams.prototype, "sort", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort_direction" }),
        __metadata("design:type", String)
    ], ListAvailabilityQueryParams.prototype, "sortDirection", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=territory" }),
        __metadata("design:type", Array)
    ], ListAvailabilityQueryParams.prototype, "territory", void 0);
    return ListAvailabilityQueryParams;
}(SpeakeasyBase));
export { ListAvailabilityQueryParams };
var ListAvailabilityRequest = /** @class */ (function (_super) {
    __extends(ListAvailabilityRequest, _super);
    function ListAvailabilityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListAvailabilityQueryParams)
    ], ListAvailabilityRequest.prototype, "queryParams", void 0);
    return ListAvailabilityRequest;
}(SpeakeasyBase));
export { ListAvailabilityRequest };
var ListAvailabilityResponse = /** @class */ (function (_super) {
    __extends(ListAvailabilityResponse, _super);
    function ListAvailabilityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ListAvailabilityResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAvailabilityResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], ListAvailabilityResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListAvailabilityResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListAvailabilityResponse.prototype, "nitro", void 0);
    return ListAvailabilityResponse;
}(SpeakeasyBase));
export { ListAvailabilityResponse };
