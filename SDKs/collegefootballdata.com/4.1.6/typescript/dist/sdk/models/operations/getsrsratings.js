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
var GetSrsRatingsQueryParams = /** @class */ (function (_super) {
    __extends(GetSrsRatingsQueryParams, _super);
    function GetSrsRatingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conference" }),
        __metadata("design:type", String)
    ], GetSrsRatingsQueryParams.prototype, "conference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team" }),
        __metadata("design:type", String)
    ], GetSrsRatingsQueryParams.prototype, "team", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", Number)
    ], GetSrsRatingsQueryParams.prototype, "year", void 0);
    return GetSrsRatingsQueryParams;
}(SpeakeasyBase));
export { GetSrsRatingsQueryParams };
var GetSrsRatingsRequest = /** @class */ (function (_super) {
    __extends(GetSrsRatingsRequest, _super);
    function GetSrsRatingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSrsRatingsQueryParams)
    ], GetSrsRatingsRequest.prototype, "queryParams", void 0);
    return GetSrsRatingsRequest;
}(SpeakeasyBase));
export { GetSrsRatingsRequest };
var GetSrsRatingsResponse = /** @class */ (function (_super) {
    __extends(GetSrsRatingsResponse, _super);
    function GetSrsRatingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSrsRatingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSrsRatingsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TeamSrsRating }),
        __metadata("design:type", Array)
    ], GetSrsRatingsResponse.prototype, "teamSrsRatings", void 0);
    return GetSrsRatingsResponse;
}(SpeakeasyBase));
export { GetSrsRatingsResponse };
