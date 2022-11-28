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
var GetV4LayersAsPlantedQueryParams = /** @class */ (function (_super) {
    __extends(GetV4LayersAsPlantedQueryParams, _super);
    function GetV4LayersAsPlantedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurredAfter" }),
        __metadata("design:type", Date)
    ], GetV4LayersAsPlantedQueryParams.prototype, "occurredAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurredBefore" }),
        __metadata("design:type", Date)
    ], GetV4LayersAsPlantedQueryParams.prototype, "occurredBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceOwnerId" }),
        __metadata("design:type", String)
    ], GetV4LayersAsPlantedQueryParams.prototype, "resourceOwnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAfter" }),
        __metadata("design:type", Date)
    ], GetV4LayersAsPlantedQueryParams.prototype, "updatedAfter", void 0);
    return GetV4LayersAsPlantedQueryParams;
}(SpeakeasyBase));
export { GetV4LayersAsPlantedQueryParams };
var GetV4LayersAsPlantedHeaders = /** @class */ (function (_super) {
    __extends(GetV4LayersAsPlantedHeaders, _super);
    function GetV4LayersAsPlantedHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], GetV4LayersAsPlantedHeaders.prototype, "accept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Limit" }),
        __metadata("design:type", Number)
    ], GetV4LayersAsPlantedHeaders.prototype, "xLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Next-Token" }),
        __metadata("design:type", String)
    ], GetV4LayersAsPlantedHeaders.prototype, "xNextToken", void 0);
    return GetV4LayersAsPlantedHeaders;
}(SpeakeasyBase));
export { GetV4LayersAsPlantedHeaders };
var GetV4LayersAsPlantedSecurity = /** @class */ (function (_super) {
    __extends(GetV4LayersAsPlantedSecurity, _super);
    function GetV4LayersAsPlantedSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetV4LayersAsPlantedSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2AuthorizationCode)
    ], GetV4LayersAsPlantedSecurity.prototype, "oauth2AuthorizationCode", void 0);
    return GetV4LayersAsPlantedSecurity;
}(SpeakeasyBase));
export { GetV4LayersAsPlantedSecurity };
var GetV4LayersAsPlantedRequest = /** @class */ (function (_super) {
    __extends(GetV4LayersAsPlantedRequest, _super);
    function GetV4LayersAsPlantedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV4LayersAsPlantedQueryParams)
    ], GetV4LayersAsPlantedRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV4LayersAsPlantedHeaders)
    ], GetV4LayersAsPlantedRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV4LayersAsPlantedSecurity)
    ], GetV4LayersAsPlantedRequest.prototype, "security", void 0);
    return GetV4LayersAsPlantedRequest;
}(SpeakeasyBase));
export { GetV4LayersAsPlantedRequest };
var GetV4LayersAsPlantedResponse = /** @class */ (function (_super) {
    __extends(GetV4LayersAsPlantedResponse, _super);
    function GetV4LayersAsPlantedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV4LayersAsPlantedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetV4LayersAsPlantedResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetV4LayersAsPlantedResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetV4LayersAsPlantedResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetV4LayersAsPlantedResponse.prototype, "plantingActivities", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV4LayersAsPlantedResponse.prototype, "statusCode", void 0);
    return GetV4LayersAsPlantedResponse;
}(SpeakeasyBase));
export { GetV4LayersAsPlantedResponse };
