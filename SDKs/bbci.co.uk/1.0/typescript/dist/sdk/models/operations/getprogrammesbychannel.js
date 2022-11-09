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
var GetProgrammesByChannelPathParams = /** @class */ (function (_super) {
    __extends(GetProgrammesByChannelPathParams, _super);
    function GetProgrammesByChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=channel" }),
        __metadata("design:type", String)
    ], GetProgrammesByChannelPathParams.prototype, "channel", void 0);
    return GetProgrammesByChannelPathParams;
}(SpeakeasyBase));
export { GetProgrammesByChannelPathParams };
var GetProgrammesByChannelQueryParams = /** @class */ (function (_super) {
    __extends(GetProgrammesByChannelQueryParams, _super);
    function GetProgrammesByChannelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=availability" }),
        __metadata("design:type", String)
    ], GetProgrammesByChannelQueryParams.prototype, "availability", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetProgrammesByChannelQueryParams.prototype, "lang", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetProgrammesByChannelQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetProgrammesByChannelQueryParams.prototype, "perPage", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=rights" }),
        __metadata("design:type", String)
    ], GetProgrammesByChannelQueryParams.prototype, "rights", void 0);
    return GetProgrammesByChannelQueryParams;
}(SpeakeasyBase));
export { GetProgrammesByChannelQueryParams };
var GetProgrammesByChannelRequest = /** @class */ (function (_super) {
    __extends(GetProgrammesByChannelRequest, _super);
    function GetProgrammesByChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetProgrammesByChannelPathParams)
    ], GetProgrammesByChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetProgrammesByChannelQueryParams)
    ], GetProgrammesByChannelRequest.prototype, "queryParams", void 0);
    return GetProgrammesByChannelRequest;
}(SpeakeasyBase));
export { GetProgrammesByChannelRequest };
var GetProgrammesByChannelResponse = /** @class */ (function (_super) {
    __extends(GetProgrammesByChannelResponse, _super);
    function GetProgrammesByChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetProgrammesByChannelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetProgrammesByChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetProgrammesByChannelResponse.prototype, "ibl", void 0);
    return GetProgrammesByChannelResponse;
}(SpeakeasyBase));
export { GetProgrammesByChannelResponse };
