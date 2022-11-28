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
var GetCoachesQueryParams = /** @class */ (function (_super) {
    __extends(GetCoachesQueryParams, _super);
    function GetCoachesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=firstName" }),
        __metadata("design:type", String)
    ], GetCoachesQueryParams.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lastName" }),
        __metadata("design:type", String)
    ], GetCoachesQueryParams.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxYear" }),
        __metadata("design:type", Number)
    ], GetCoachesQueryParams.prototype, "maxYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minYear" }),
        __metadata("design:type", Number)
    ], GetCoachesQueryParams.prototype, "minYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team" }),
        __metadata("design:type", String)
    ], GetCoachesQueryParams.prototype, "team", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", Number)
    ], GetCoachesQueryParams.prototype, "year", void 0);
    return GetCoachesQueryParams;
}(SpeakeasyBase));
export { GetCoachesQueryParams };
var GetCoachesRequest = /** @class */ (function (_super) {
    __extends(GetCoachesRequest, _super);
    function GetCoachesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCoachesQueryParams)
    ], GetCoachesRequest.prototype, "queryParams", void 0);
    return GetCoachesRequest;
}(SpeakeasyBase));
export { GetCoachesRequest };
var GetCoachesResponse = /** @class */ (function (_super) {
    __extends(GetCoachesResponse, _super);
    function GetCoachesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Coach }),
        __metadata("design:type", Array)
    ], GetCoachesResponse.prototype, "coaches", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCoachesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCoachesResponse.prototype, "statusCode", void 0);
    return GetCoachesResponse;
}(SpeakeasyBase));
export { GetCoachesResponse };
