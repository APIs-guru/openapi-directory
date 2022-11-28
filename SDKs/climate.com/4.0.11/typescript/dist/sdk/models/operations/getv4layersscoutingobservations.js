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
var GetV4LayersScoutingObservationsQueryParams = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsQueryParams, _super);
    function GetV4LayersScoutingObservationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurredAfter" }),
        __metadata("design:type", Date)
    ], GetV4LayersScoutingObservationsQueryParams.prototype, "occurredAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurredBefore" }),
        __metadata("design:type", Date)
    ], GetV4LayersScoutingObservationsQueryParams.prototype, "occurredBefore", void 0);
    return GetV4LayersScoutingObservationsQueryParams;
}(SpeakeasyBase));
export { GetV4LayersScoutingObservationsQueryParams };
var GetV4LayersScoutingObservationsHeaders = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsHeaders, _super);
    function GetV4LayersScoutingObservationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Limit" }),
        __metadata("design:type", Number)
    ], GetV4LayersScoutingObservationsHeaders.prototype, "xLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Next-Token" }),
        __metadata("design:type", String)
    ], GetV4LayersScoutingObservationsHeaders.prototype, "xNextToken", void 0);
    return GetV4LayersScoutingObservationsHeaders;
}(SpeakeasyBase));
export { GetV4LayersScoutingObservationsHeaders };
var GetV4LayersScoutingObservationsSecurity = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsSecurity, _super);
    function GetV4LayersScoutingObservationsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetV4LayersScoutingObservationsSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2AuthorizationCode)
    ], GetV4LayersScoutingObservationsSecurity.prototype, "oauth2AuthorizationCode", void 0);
    return GetV4LayersScoutingObservationsSecurity;
}(SpeakeasyBase));
export { GetV4LayersScoutingObservationsSecurity };
var GetV4LayersScoutingObservationsRequest = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsRequest, _super);
    function GetV4LayersScoutingObservationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV4LayersScoutingObservationsQueryParams)
    ], GetV4LayersScoutingObservationsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV4LayersScoutingObservationsHeaders)
    ], GetV4LayersScoutingObservationsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV4LayersScoutingObservationsSecurity)
    ], GetV4LayersScoutingObservationsRequest.prototype, "security", void 0);
    return GetV4LayersScoutingObservationsRequest;
}(SpeakeasyBase));
export { GetV4LayersScoutingObservationsRequest };
var GetV4LayersScoutingObservationsResponse = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsResponse, _super);
    function GetV4LayersScoutingObservationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV4LayersScoutingObservationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetV4LayersScoutingObservationsResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetV4LayersScoutingObservationsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetV4LayersScoutingObservationsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetV4LayersScoutingObservationsResponse.prototype, "scoutingObservations", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV4LayersScoutingObservationsResponse.prototype, "statusCode", void 0);
    return GetV4LayersScoutingObservationsResponse;
}(SpeakeasyBase));
export { GetV4LayersScoutingObservationsResponse };
