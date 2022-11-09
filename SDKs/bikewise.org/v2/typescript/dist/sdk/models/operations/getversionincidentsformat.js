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
export var GetVersionIncidentsFormatIncidentTypeEnum;
(function (GetVersionIncidentsFormatIncidentTypeEnum) {
    GetVersionIncidentsFormatIncidentTypeEnum["Crash"] = "crash";
    GetVersionIncidentsFormatIncidentTypeEnum["Hazard"] = "hazard";
    GetVersionIncidentsFormatIncidentTypeEnum["Theft"] = "theft";
    GetVersionIncidentsFormatIncidentTypeEnum["Unconfirmed"] = "unconfirmed";
    GetVersionIncidentsFormatIncidentTypeEnum["InfrastructureIssue"] = "infrastructure_issue";
    GetVersionIncidentsFormatIncidentTypeEnum["ChopShop"] = "chop_shop";
})(GetVersionIncidentsFormatIncidentTypeEnum || (GetVersionIncidentsFormatIncidentTypeEnum = {}));
var GetVersionIncidentsFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetVersionIncidentsFormatQueryParams, _super);
    function GetVersionIncidentsFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=incident_type" }),
        __metadata("design:type", String)
    ], GetVersionIncidentsFormatQueryParams.prototype, "incidentType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=occurred_after" }),
        __metadata("design:type", Number)
    ], GetVersionIncidentsFormatQueryParams.prototype, "occurredAfter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=occurred_before" }),
        __metadata("design:type", Number)
    ], GetVersionIncidentsFormatQueryParams.prototype, "occurredBefore", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVersionIncidentsFormatQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetVersionIncidentsFormatQueryParams.prototype, "perPage", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=proximity" }),
        __metadata("design:type", String)
    ], GetVersionIncidentsFormatQueryParams.prototype, "proximity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=proximity_square" }),
        __metadata("design:type", Number)
    ], GetVersionIncidentsFormatQueryParams.prototype, "proximitySquare", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetVersionIncidentsFormatQueryParams.prototype, "query", void 0);
    return GetVersionIncidentsFormatQueryParams;
}(SpeakeasyBase));
export { GetVersionIncidentsFormatQueryParams };
var GetVersionIncidentsFormatRequest = /** @class */ (function (_super) {
    __extends(GetVersionIncidentsFormatRequest, _super);
    function GetVersionIncidentsFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetVersionIncidentsFormatQueryParams)
    ], GetVersionIncidentsFormatRequest.prototype, "queryParams", void 0);
    return GetVersionIncidentsFormatRequest;
}(SpeakeasyBase));
export { GetVersionIncidentsFormatRequest };
var GetVersionIncidentsFormatResponse = /** @class */ (function (_super) {
    __extends(GetVersionIncidentsFormatResponse, _super);
    function GetVersionIncidentsFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetVersionIncidentsFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetVersionIncidentsFormatResponse.prototype, "statusCode", void 0);
    return GetVersionIncidentsFormatResponse;
}(SpeakeasyBase));
export { GetVersionIncidentsFormatResponse };
