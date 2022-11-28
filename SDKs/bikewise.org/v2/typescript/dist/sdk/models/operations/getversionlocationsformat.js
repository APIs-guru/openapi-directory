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
export var GetVersionLocationsFormatIncidentTypeEnum;
(function (GetVersionLocationsFormatIncidentTypeEnum) {
    GetVersionLocationsFormatIncidentTypeEnum["Crash"] = "crash";
    GetVersionLocationsFormatIncidentTypeEnum["Hazard"] = "hazard";
    GetVersionLocationsFormatIncidentTypeEnum["Theft"] = "theft";
    GetVersionLocationsFormatIncidentTypeEnum["Unconfirmed"] = "unconfirmed";
    GetVersionLocationsFormatIncidentTypeEnum["InfrastructureIssue"] = "infrastructure_issue";
    GetVersionLocationsFormatIncidentTypeEnum["ChopShop"] = "chop_shop";
})(GetVersionLocationsFormatIncidentTypeEnum || (GetVersionLocationsFormatIncidentTypeEnum = {}));
var GetVersionLocationsFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetVersionLocationsFormatQueryParams, _super);
    function GetVersionLocationsFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all" }),
        __metadata("design:type", Boolean)
    ], GetVersionLocationsFormatQueryParams.prototype, "all", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=incident_type" }),
        __metadata("design:type", String)
    ], GetVersionLocationsFormatQueryParams.prototype, "incidentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetVersionLocationsFormatQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurred_after" }),
        __metadata("design:type", Number)
    ], GetVersionLocationsFormatQueryParams.prototype, "occurredAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurred_before" }),
        __metadata("design:type", Number)
    ], GetVersionLocationsFormatQueryParams.prototype, "occurredBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proximity" }),
        __metadata("design:type", String)
    ], GetVersionLocationsFormatQueryParams.prototype, "proximity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proximity_square" }),
        __metadata("design:type", Number)
    ], GetVersionLocationsFormatQueryParams.prototype, "proximitySquare", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetVersionLocationsFormatQueryParams.prototype, "query", void 0);
    return GetVersionLocationsFormatQueryParams;
}(SpeakeasyBase));
export { GetVersionLocationsFormatQueryParams };
var GetVersionLocationsFormatRequest = /** @class */ (function (_super) {
    __extends(GetVersionLocationsFormatRequest, _super);
    function GetVersionLocationsFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVersionLocationsFormatQueryParams)
    ], GetVersionLocationsFormatRequest.prototype, "queryParams", void 0);
    return GetVersionLocationsFormatRequest;
}(SpeakeasyBase));
export { GetVersionLocationsFormatRequest };
var GetVersionLocationsFormatResponse = /** @class */ (function (_super) {
    __extends(GetVersionLocationsFormatResponse, _super);
    function GetVersionLocationsFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVersionLocationsFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVersionLocationsFormatResponse.prototype, "statusCode", void 0);
    return GetVersionLocationsFormatResponse;
}(SpeakeasyBase));
export { GetVersionLocationsFormatResponse };
