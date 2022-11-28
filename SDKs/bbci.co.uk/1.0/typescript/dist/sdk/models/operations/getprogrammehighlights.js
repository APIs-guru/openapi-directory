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
var GetProgrammeHighlightsQueryParams = /** @class */ (function (_super) {
    __extends(GetProgrammeHighlightsQueryParams, _super);
    function GetProgrammeHighlightsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=availability" }),
        __metadata("design:type", String)
    ], GetProgrammeHighlightsQueryParams.prototype, "availability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetProgrammeHighlightsQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mixin" }),
        __metadata("design:type", Array)
    ], GetProgrammeHighlightsQueryParams.prototype, "mixin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rights" }),
        __metadata("design:type", String)
    ], GetProgrammeHighlightsQueryParams.prototype, "rights", void 0);
    return GetProgrammeHighlightsQueryParams;
}(SpeakeasyBase));
export { GetProgrammeHighlightsQueryParams };
var GetProgrammeHighlightsRequest = /** @class */ (function (_super) {
    __extends(GetProgrammeHighlightsRequest, _super);
    function GetProgrammeHighlightsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProgrammeHighlightsQueryParams)
    ], GetProgrammeHighlightsRequest.prototype, "queryParams", void 0);
    return GetProgrammeHighlightsRequest;
}(SpeakeasyBase));
export { GetProgrammeHighlightsRequest };
var GetProgrammeHighlightsResponse = /** @class */ (function (_super) {
    __extends(GetProgrammeHighlightsResponse, _super);
    function GetProgrammeHighlightsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProgrammeHighlightsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProgrammeHighlightsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetProgrammeHighlightsResponse.prototype, "ibl", void 0);
    return GetProgrammeHighlightsResponse;
}(SpeakeasyBase));
export { GetProgrammeHighlightsResponse };
