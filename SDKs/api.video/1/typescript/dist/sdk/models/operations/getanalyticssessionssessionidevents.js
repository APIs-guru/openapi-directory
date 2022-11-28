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
var GetAnalyticsSessionsSessionIdEventsPathParams = /** @class */ (function (_super) {
    __extends(GetAnalyticsSessionsSessionIdEventsPathParams, _super);
    function GetAnalyticsSessionsSessionIdEventsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionId" }),
        __metadata("design:type", String)
    ], GetAnalyticsSessionsSessionIdEventsPathParams.prototype, "sessionId", void 0);
    return GetAnalyticsSessionsSessionIdEventsPathParams;
}(SpeakeasyBase));
export { GetAnalyticsSessionsSessionIdEventsPathParams };
var GetAnalyticsSessionsSessionIdEventsQueryParams = /** @class */ (function (_super) {
    __extends(GetAnalyticsSessionsSessionIdEventsQueryParams, _super);
    function GetAnalyticsSessionsSessionIdEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPage" }),
        __metadata("design:type", Number)
    ], GetAnalyticsSessionsSessionIdEventsQueryParams.prototype, "currentPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetAnalyticsSessionsSessionIdEventsQueryParams.prototype, "pageSize", void 0);
    return GetAnalyticsSessionsSessionIdEventsQueryParams;
}(SpeakeasyBase));
export { GetAnalyticsSessionsSessionIdEventsQueryParams };
var GetAnalyticsSessionsSessionIdEventsSecurity = /** @class */ (function (_super) {
    __extends(GetAnalyticsSessionsSessionIdEventsSecurity, _super);
    function GetAnalyticsSessionsSessionIdEventsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetAnalyticsSessionsSessionIdEventsSecurity.prototype, "bearerAuth", void 0);
    return GetAnalyticsSessionsSessionIdEventsSecurity;
}(SpeakeasyBase));
export { GetAnalyticsSessionsSessionIdEventsSecurity };
var GetAnalyticsSessionsSessionIdEventsRequest = /** @class */ (function (_super) {
    __extends(GetAnalyticsSessionsSessionIdEventsRequest, _super);
    function GetAnalyticsSessionsSessionIdEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnalyticsSessionsSessionIdEventsPathParams)
    ], GetAnalyticsSessionsSessionIdEventsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnalyticsSessionsSessionIdEventsQueryParams)
    ], GetAnalyticsSessionsSessionIdEventsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnalyticsSessionsSessionIdEventsSecurity)
    ], GetAnalyticsSessionsSessionIdEventsRequest.prototype, "security", void 0);
    return GetAnalyticsSessionsSessionIdEventsRequest;
}(SpeakeasyBase));
export { GetAnalyticsSessionsSessionIdEventsRequest };
var GetAnalyticsSessionsSessionIdEventsResponse = /** @class */ (function (_super) {
    __extends(GetAnalyticsSessionsSessionIdEventsResponse, _super);
    function GetAnalyticsSessionsSessionIdEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAnalyticsSessionsSessionIdEventsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAnalyticsSessionsSessionIdEventsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFound)
    ], GetAnalyticsSessionsSessionIdEventsResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RawStatisticsListPlayerSessionEventsResponse)
    ], GetAnalyticsSessionsSessionIdEventsResponse.prototype, "rawStatisticsListPlayerSessionEventsResponse", void 0);
    return GetAnalyticsSessionsSessionIdEventsResponse;
}(SpeakeasyBase));
export { GetAnalyticsSessionsSessionIdEventsResponse };
