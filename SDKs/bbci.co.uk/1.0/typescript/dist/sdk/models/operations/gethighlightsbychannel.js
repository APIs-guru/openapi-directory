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
var GetHighlightsByChannelPathParams = /** @class */ (function (_super) {
    __extends(GetHighlightsByChannelPathParams, _super);
    function GetHighlightsByChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=channel" }),
        __metadata("design:type", String)
    ], GetHighlightsByChannelPathParams.prototype, "channel", void 0);
    return GetHighlightsByChannelPathParams;
}(SpeakeasyBase));
export { GetHighlightsByChannelPathParams };
var GetHighlightsByChannelQueryParams = /** @class */ (function (_super) {
    __extends(GetHighlightsByChannelQueryParams, _super);
    function GetHighlightsByChannelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=availability" }),
        __metadata("design:type", String)
    ], GetHighlightsByChannelQueryParams.prototype, "availability", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetHighlightsByChannelQueryParams.prototype, "lang", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=live" }),
        __metadata("design:type", Boolean)
    ], GetHighlightsByChannelQueryParams.prototype, "live", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=mixin" }),
        __metadata("design:type", Array)
    ], GetHighlightsByChannelQueryParams.prototype, "mixin", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=rights" }),
        __metadata("design:type", String)
    ], GetHighlightsByChannelQueryParams.prototype, "rights", void 0);
    return GetHighlightsByChannelQueryParams;
}(SpeakeasyBase));
export { GetHighlightsByChannelQueryParams };
var GetHighlightsByChannelRequest = /** @class */ (function (_super) {
    __extends(GetHighlightsByChannelRequest, _super);
    function GetHighlightsByChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetHighlightsByChannelPathParams)
    ], GetHighlightsByChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetHighlightsByChannelQueryParams)
    ], GetHighlightsByChannelRequest.prototype, "queryParams", void 0);
    return GetHighlightsByChannelRequest;
}(SpeakeasyBase));
export { GetHighlightsByChannelRequest };
var GetHighlightsByChannelResponse = /** @class */ (function (_super) {
    __extends(GetHighlightsByChannelResponse, _super);
    function GetHighlightsByChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetHighlightsByChannelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetHighlightsByChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetHighlightsByChannelResponse.prototype, "ibl", void 0);
    return GetHighlightsByChannelResponse;
}(SpeakeasyBase));
export { GetHighlightsByChannelResponse };
