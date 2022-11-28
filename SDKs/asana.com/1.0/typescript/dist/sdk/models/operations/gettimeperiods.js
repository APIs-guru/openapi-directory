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
var GetTimePeriodsQueryParams = /** @class */ (function (_super) {
    __extends(GetTimePeriodsQueryParams, _super);
    function GetTimePeriodsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_on" }),
        __metadata("design:type", Date)
    ], GetTimePeriodsQueryParams.prototype, "endOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetTimePeriodsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetTimePeriodsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetTimePeriodsQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetTimePeriodsQueryParams.prototype, "optPretty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_on" }),
        __metadata("design:type", Date)
    ], GetTimePeriodsQueryParams.prototype, "startOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workspace" }),
        __metadata("design:type", String)
    ], GetTimePeriodsQueryParams.prototype, "workspace", void 0);
    return GetTimePeriodsQueryParams;
}(SpeakeasyBase));
export { GetTimePeriodsQueryParams };
var GetTimePeriods200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTimePeriods200ApplicationJson, _super);
    function GetTimePeriods200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.TimePeriodCompact }),
        __metadata("design:type", Array)
    ], GetTimePeriods200ApplicationJson.prototype, "data", void 0);
    return GetTimePeriods200ApplicationJson;
}(SpeakeasyBase));
export { GetTimePeriods200ApplicationJson };
var GetTimePeriodsRequest = /** @class */ (function (_super) {
    __extends(GetTimePeriodsRequest, _super);
    function GetTimePeriodsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTimePeriodsQueryParams)
    ], GetTimePeriodsRequest.prototype, "queryParams", void 0);
    return GetTimePeriodsRequest;
}(SpeakeasyBase));
export { GetTimePeriodsRequest };
var GetTimePeriodsResponse = /** @class */ (function (_super) {
    __extends(GetTimePeriodsResponse, _super);
    function GetTimePeriodsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTimePeriodsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetTimePeriodsResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTimePeriodsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTimePeriods200ApplicationJson)
    ], GetTimePeriodsResponse.prototype, "getTimePeriods200ApplicationJsonObject", void 0);
    return GetTimePeriodsResponse;
}(SpeakeasyBase));
export { GetTimePeriodsResponse };
