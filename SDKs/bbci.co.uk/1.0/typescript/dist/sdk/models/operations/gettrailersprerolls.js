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
var GetTrailersPreRollsPathParams = /** @class */ (function (_super) {
    __extends(GetTrailersPreRollsPathParams, _super);
    function GetTrailersPreRollsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pid" }),
        __metadata("design:type", String)
    ], GetTrailersPreRollsPathParams.prototype, "pid", void 0);
    return GetTrailersPreRollsPathParams;
}(SpeakeasyBase));
export { GetTrailersPreRollsPathParams };
var GetTrailersPreRollsQueryParams = /** @class */ (function (_super) {
    __extends(GetTrailersPreRollsQueryParams, _super);
    function GetTrailersPreRollsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=availability" }),
        __metadata("design:type", String)
    ], GetTrailersPreRollsQueryParams.prototype, "availability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rights" }),
        __metadata("design:type", String)
    ], GetTrailersPreRollsQueryParams.prototype, "rights", void 0);
    return GetTrailersPreRollsQueryParams;
}(SpeakeasyBase));
export { GetTrailersPreRollsQueryParams };
var GetTrailersPreRollsRequest = /** @class */ (function (_super) {
    __extends(GetTrailersPreRollsRequest, _super);
    function GetTrailersPreRollsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTrailersPreRollsPathParams)
    ], GetTrailersPreRollsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTrailersPreRollsQueryParams)
    ], GetTrailersPreRollsRequest.prototype, "queryParams", void 0);
    return GetTrailersPreRollsRequest;
}(SpeakeasyBase));
export { GetTrailersPreRollsRequest };
var GetTrailersPreRollsResponse = /** @class */ (function (_super) {
    __extends(GetTrailersPreRollsResponse, _super);
    function GetTrailersPreRollsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTrailersPreRollsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTrailersPreRollsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetTrailersPreRollsResponse.prototype, "ibl", void 0);
    return GetTrailersPreRollsResponse;
}(SpeakeasyBase));
export { GetTrailersPreRollsResponse };
