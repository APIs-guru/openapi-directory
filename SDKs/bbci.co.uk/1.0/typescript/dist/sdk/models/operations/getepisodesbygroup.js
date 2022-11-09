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
var GetEpisodesByGroupPathParams = /** @class */ (function (_super) {
    __extends(GetEpisodesByGroupPathParams, _super);
    function GetEpisodesByGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=pid" }),
        __metadata("design:type", String)
    ], GetEpisodesByGroupPathParams.prototype, "pid", void 0);
    return GetEpisodesByGroupPathParams;
}(SpeakeasyBase));
export { GetEpisodesByGroupPathParams };
var GetEpisodesByGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetEpisodesByGroupQueryParams, _super);
    function GetEpisodesByGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=availability" }),
        __metadata("design:type", String)
    ], GetEpisodesByGroupQueryParams.prototype, "availability", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=initial_child_count" }),
        __metadata("design:type", Number)
    ], GetEpisodesByGroupQueryParams.prototype, "initialChildCount", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=mixin" }),
        __metadata("design:type", Array)
    ], GetEpisodesByGroupQueryParams.prototype, "mixin", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetEpisodesByGroupQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetEpisodesByGroupQueryParams.prototype, "perPage", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=rights" }),
        __metadata("design:type", String)
    ], GetEpisodesByGroupQueryParams.prototype, "rights", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetEpisodesByGroupQueryParams.prototype, "sort", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort_direction" }),
        __metadata("design:type", String)
    ], GetEpisodesByGroupQueryParams.prototype, "sortDirection", void 0);
    return GetEpisodesByGroupQueryParams;
}(SpeakeasyBase));
export { GetEpisodesByGroupQueryParams };
var GetEpisodesByGroupRequest = /** @class */ (function (_super) {
    __extends(GetEpisodesByGroupRequest, _super);
    function GetEpisodesByGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetEpisodesByGroupPathParams)
    ], GetEpisodesByGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetEpisodesByGroupQueryParams)
    ], GetEpisodesByGroupRequest.prototype, "queryParams", void 0);
    return GetEpisodesByGroupRequest;
}(SpeakeasyBase));
export { GetEpisodesByGroupRequest };
var GetEpisodesByGroupResponse = /** @class */ (function (_super) {
    __extends(GetEpisodesByGroupResponse, _super);
    function GetEpisodesByGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetEpisodesByGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetEpisodesByGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetEpisodesByGroupResponse.prototype, "ibl", void 0);
    return GetEpisodesByGroupResponse;
}(SpeakeasyBase));
export { GetEpisodesByGroupResponse };
