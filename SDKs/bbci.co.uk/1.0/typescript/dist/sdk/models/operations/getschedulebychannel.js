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
var GetScheduleByChannelPathParams = /** @class */ (function (_super) {
    __extends(GetScheduleByChannelPathParams, _super);
    function GetScheduleByChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=channel" }),
        __metadata("design:type", String)
    ], GetScheduleByChannelPathParams.prototype, "channel", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=date" }),
        __metadata("design:type", String)
    ], GetScheduleByChannelPathParams.prototype, "date", void 0);
    return GetScheduleByChannelPathParams;
}(SpeakeasyBase));
export { GetScheduleByChannelPathParams };
var GetScheduleByChannelQueryParams = /** @class */ (function (_super) {
    __extends(GetScheduleByChannelQueryParams, _super);
    function GetScheduleByChannelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=availability" }),
        __metadata("design:type", String)
    ], GetScheduleByChannelQueryParams.prototype, "availability", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetScheduleByChannelQueryParams.prototype, "lang", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=rights" }),
        __metadata("design:type", String)
    ], GetScheduleByChannelQueryParams.prototype, "rights", void 0);
    return GetScheduleByChannelQueryParams;
}(SpeakeasyBase));
export { GetScheduleByChannelQueryParams };
var GetScheduleByChannelRequest = /** @class */ (function (_super) {
    __extends(GetScheduleByChannelRequest, _super);
    function GetScheduleByChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetScheduleByChannelPathParams)
    ], GetScheduleByChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetScheduleByChannelQueryParams)
    ], GetScheduleByChannelRequest.prototype, "queryParams", void 0);
    return GetScheduleByChannelRequest;
}(SpeakeasyBase));
export { GetScheduleByChannelRequest };
var GetScheduleByChannelResponse = /** @class */ (function (_super) {
    __extends(GetScheduleByChannelResponse, _super);
    function GetScheduleByChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetScheduleByChannelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetScheduleByChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetScheduleByChannelResponse.prototype, "ibl", void 0);
    return GetScheduleByChannelResponse;
}(SpeakeasyBase));
export { GetScheduleByChannelResponse };
