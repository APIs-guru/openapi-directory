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
export var GetVersionLocationsMarkersFormatIncidentTypeEnum;
(function (GetVersionLocationsMarkersFormatIncidentTypeEnum) {
    GetVersionLocationsMarkersFormatIncidentTypeEnum["Crash"] = "crash";
    GetVersionLocationsMarkersFormatIncidentTypeEnum["Hazard"] = "hazard";
    GetVersionLocationsMarkersFormatIncidentTypeEnum["Theft"] = "theft";
    GetVersionLocationsMarkersFormatIncidentTypeEnum["Unconfirmed"] = "unconfirmed";
    GetVersionLocationsMarkersFormatIncidentTypeEnum["InfrastructureIssue"] = "infrastructure_issue";
    GetVersionLocationsMarkersFormatIncidentTypeEnum["ChopShop"] = "chop_shop";
})(GetVersionLocationsMarkersFormatIncidentTypeEnum || (GetVersionLocationsMarkersFormatIncidentTypeEnum = {}));
var GetVersionLocationsMarkersFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetVersionLocationsMarkersFormatQueryParams, _super);
    function GetVersionLocationsMarkersFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all" }),
        __metadata("design:type", Boolean)
    ], GetVersionLocationsMarkersFormatQueryParams.prototype, "all", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=incident_type" }),
        __metadata("design:type", String)
    ], GetVersionLocationsMarkersFormatQueryParams.prototype, "incidentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetVersionLocationsMarkersFormatQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurred_after" }),
        __metadata("design:type", Number)
    ], GetVersionLocationsMarkersFormatQueryParams.prototype, "occurredAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurred_before" }),
        __metadata("design:type", Number)
    ], GetVersionLocationsMarkersFormatQueryParams.prototype, "occurredBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proximity" }),
        __metadata("design:type", String)
    ], GetVersionLocationsMarkersFormatQueryParams.prototype, "proximity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proximity_square" }),
        __metadata("design:type", Number)
    ], GetVersionLocationsMarkersFormatQueryParams.prototype, "proximitySquare", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetVersionLocationsMarkersFormatQueryParams.prototype, "query", void 0);
    return GetVersionLocationsMarkersFormatQueryParams;
}(SpeakeasyBase));
export { GetVersionLocationsMarkersFormatQueryParams };
var GetVersionLocationsMarkersFormatRequest = /** @class */ (function (_super) {
    __extends(GetVersionLocationsMarkersFormatRequest, _super);
    function GetVersionLocationsMarkersFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVersionLocationsMarkersFormatQueryParams)
    ], GetVersionLocationsMarkersFormatRequest.prototype, "queryParams", void 0);
    return GetVersionLocationsMarkersFormatRequest;
}(SpeakeasyBase));
export { GetVersionLocationsMarkersFormatRequest };
var GetVersionLocationsMarkersFormatResponse = /** @class */ (function (_super) {
    __extends(GetVersionLocationsMarkersFormatResponse, _super);
    function GetVersionLocationsMarkersFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVersionLocationsMarkersFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVersionLocationsMarkersFormatResponse.prototype, "statusCode", void 0);
    return GetVersionLocationsMarkersFormatResponse;
}(SpeakeasyBase));
export { GetVersionLocationsMarkersFormatResponse };
