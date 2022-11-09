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
var GetV4LayersScoutingObservationsScoutingObservationIdPathParams = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsScoutingObservationIdPathParams, _super);
    function GetV4LayersScoutingObservationsScoutingObservationIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=scoutingObservationId" }),
        __metadata("design:type", String)
    ], GetV4LayersScoutingObservationsScoutingObservationIdPathParams.prototype, "scoutingObservationId", void 0);
    return GetV4LayersScoutingObservationsScoutingObservationIdPathParams;
}(SpeakeasyBase));
export { GetV4LayersScoutingObservationsScoutingObservationIdPathParams };
var GetV4LayersScoutingObservationsScoutingObservationIdSecurityOption1 = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsScoutingObservationIdSecurityOption1, _super);
    function GetV4LayersScoutingObservationsScoutingObservationIdSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetV4LayersScoutingObservationsScoutingObservationIdSecurityOption1.prototype, "apiKey", void 0);
    return GetV4LayersScoutingObservationsScoutingObservationIdSecurityOption1;
}(SpeakeasyBase));
export { GetV4LayersScoutingObservationsScoutingObservationIdSecurityOption1 };
var GetV4LayersScoutingObservationsScoutingObservationIdSecurityOption2 = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsScoutingObservationIdSecurityOption2, _super);
    function GetV4LayersScoutingObservationsScoutingObservationIdSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2AuthorizationCode)
    ], GetV4LayersScoutingObservationsScoutingObservationIdSecurityOption2.prototype, "oauth2AuthorizationCode", void 0);
    return GetV4LayersScoutingObservationsScoutingObservationIdSecurityOption2;
}(SpeakeasyBase));
export { GetV4LayersScoutingObservationsScoutingObservationIdSecurityOption2 };
var GetV4LayersScoutingObservationsScoutingObservationIdSecurity = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsScoutingObservationIdSecurity, _super);
    function GetV4LayersScoutingObservationsScoutingObservationIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetV4LayersScoutingObservationsScoutingObservationIdSecurityOption1)
    ], GetV4LayersScoutingObservationsScoutingObservationIdSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetV4LayersScoutingObservationsScoutingObservationIdSecurityOption2)
    ], GetV4LayersScoutingObservationsScoutingObservationIdSecurity.prototype, "option2", void 0);
    return GetV4LayersScoutingObservationsScoutingObservationIdSecurity;
}(SpeakeasyBase));
export { GetV4LayersScoutingObservationsScoutingObservationIdSecurity };
var GetV4LayersScoutingObservationsScoutingObservationIdRequest = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsScoutingObservationIdRequest, _super);
    function GetV4LayersScoutingObservationsScoutingObservationIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetV4LayersScoutingObservationsScoutingObservationIdPathParams)
    ], GetV4LayersScoutingObservationsScoutingObservationIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetV4LayersScoutingObservationsScoutingObservationIdSecurity)
    ], GetV4LayersScoutingObservationsScoutingObservationIdRequest.prototype, "security", void 0);
    return GetV4LayersScoutingObservationsScoutingObservationIdRequest;
}(SpeakeasyBase));
export { GetV4LayersScoutingObservationsScoutingObservationIdRequest };
var GetV4LayersScoutingObservationsScoutingObservationIdResponse = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsScoutingObservationIdResponse, _super);
    function GetV4LayersScoutingObservationsScoutingObservationIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetV4LayersScoutingObservationsScoutingObservationIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], GetV4LayersScoutingObservationsScoutingObservationIdResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetV4LayersScoutingObservationsScoutingObservationIdResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ScoutingObservation)
    ], GetV4LayersScoutingObservationsScoutingObservationIdResponse.prototype, "scoutingObservation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetV4LayersScoutingObservationsScoutingObservationIdResponse.prototype, "statusCode", void 0);
    return GetV4LayersScoutingObservationsScoutingObservationIdResponse;
}(SpeakeasyBase));
export { GetV4LayersScoutingObservationsScoutingObservationIdResponse };
