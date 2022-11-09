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
var GetEpisodesByParentPidPathParams = /** @class */ (function (_super) {
    __extends(GetEpisodesByParentPidPathParams, _super);
    function GetEpisodesByParentPidPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=pid" }),
        __metadata("design:type", String)
    ], GetEpisodesByParentPidPathParams.prototype, "pid", void 0);
    return GetEpisodesByParentPidPathParams;
}(SpeakeasyBase));
export { GetEpisodesByParentPidPathParams };
var GetEpisodesByParentPidQueryParams = /** @class */ (function (_super) {
    __extends(GetEpisodesByParentPidQueryParams, _super);
    function GetEpisodesByParentPidQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=availability" }),
        __metadata("design:type", String)
    ], GetEpisodesByParentPidQueryParams.prototype, "availability", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=initial_child_count" }),
        __metadata("design:type", Number)
    ], GetEpisodesByParentPidQueryParams.prototype, "initialChildCount", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=rights" }),
        __metadata("design:type", String)
    ], GetEpisodesByParentPidQueryParams.prototype, "rights", void 0);
    return GetEpisodesByParentPidQueryParams;
}(SpeakeasyBase));
export { GetEpisodesByParentPidQueryParams };
var GetEpisodesByParentPidRequest = /** @class */ (function (_super) {
    __extends(GetEpisodesByParentPidRequest, _super);
    function GetEpisodesByParentPidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetEpisodesByParentPidPathParams)
    ], GetEpisodesByParentPidRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetEpisodesByParentPidQueryParams)
    ], GetEpisodesByParentPidRequest.prototype, "queryParams", void 0);
    return GetEpisodesByParentPidRequest;
}(SpeakeasyBase));
export { GetEpisodesByParentPidRequest };
var GetEpisodesByParentPidResponse = /** @class */ (function (_super) {
    __extends(GetEpisodesByParentPidResponse, _super);
    function GetEpisodesByParentPidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetEpisodesByParentPidResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetEpisodesByParentPidResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetEpisodesByParentPidResponse.prototype, "ibl", void 0);
    return GetEpisodesByParentPidResponse;
}(SpeakeasyBase));
export { GetEpisodesByParentPidResponse };
