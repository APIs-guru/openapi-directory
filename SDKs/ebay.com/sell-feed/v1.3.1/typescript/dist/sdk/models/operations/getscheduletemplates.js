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
var GetScheduleTemplatesQueryParams = /** @class */ (function (_super) {
    __extends(GetScheduleTemplatesQueryParams, _super);
    function GetScheduleTemplatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=feed_type" }),
        __metadata("design:type", String)
    ], GetScheduleTemplatesQueryParams.prototype, "feedType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], GetScheduleTemplatesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetScheduleTemplatesQueryParams.prototype, "offset", void 0);
    return GetScheduleTemplatesQueryParams;
}(SpeakeasyBase));
export { GetScheduleTemplatesQueryParams };
var GetScheduleTemplatesSecurity = /** @class */ (function (_super) {
    __extends(GetScheduleTemplatesSecurity, _super);
    function GetScheduleTemplatesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetScheduleTemplatesSecurity.prototype, "apiAuth", void 0);
    return GetScheduleTemplatesSecurity;
}(SpeakeasyBase));
export { GetScheduleTemplatesSecurity };
var GetScheduleTemplatesRequest = /** @class */ (function (_super) {
    __extends(GetScheduleTemplatesRequest, _super);
    function GetScheduleTemplatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetScheduleTemplatesQueryParams)
    ], GetScheduleTemplatesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetScheduleTemplatesSecurity)
    ], GetScheduleTemplatesRequest.prototype, "security", void 0);
    return GetScheduleTemplatesRequest;
}(SpeakeasyBase));
export { GetScheduleTemplatesRequest };
var GetScheduleTemplatesResponse = /** @class */ (function (_super) {
    __extends(GetScheduleTemplatesResponse, _super);
    function GetScheduleTemplatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetScheduleTemplatesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScheduleTemplateCollection)
    ], GetScheduleTemplatesResponse.prototype, "scheduleTemplateCollection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetScheduleTemplatesResponse.prototype, "statusCode", void 0);
    return GetScheduleTemplatesResponse;
}(SpeakeasyBase));
export { GetScheduleTemplatesResponse };
