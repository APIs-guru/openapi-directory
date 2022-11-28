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
var GetDrivesQueryParams = /** @class */ (function (_super) {
    __extends(GetDrivesQueryParams, _super);
    function GetDrivesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conference" }),
        __metadata("design:type", String)
    ], GetDrivesQueryParams.prototype, "conference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=defense" }),
        __metadata("design:type", String)
    ], GetDrivesQueryParams.prototype, "defense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=defenseConference" }),
        __metadata("design:type", String)
    ], GetDrivesQueryParams.prototype, "defenseConference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offense" }),
        __metadata("design:type", String)
    ], GetDrivesQueryParams.prototype, "offense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offenseConference" }),
        __metadata("design:type", String)
    ], GetDrivesQueryParams.prototype, "offenseConference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seasonType" }),
        __metadata("design:type", String)
    ], GetDrivesQueryParams.prototype, "seasonType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team" }),
        __metadata("design:type", String)
    ], GetDrivesQueryParams.prototype, "team", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=week" }),
        __metadata("design:type", Number)
    ], GetDrivesQueryParams.prototype, "week", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", Number)
    ], GetDrivesQueryParams.prototype, "year", void 0);
    return GetDrivesQueryParams;
}(SpeakeasyBase));
export { GetDrivesQueryParams };
var GetDrivesRequest = /** @class */ (function (_super) {
    __extends(GetDrivesRequest, _super);
    function GetDrivesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDrivesQueryParams)
    ], GetDrivesRequest.prototype, "queryParams", void 0);
    return GetDrivesRequest;
}(SpeakeasyBase));
export { GetDrivesRequest };
var GetDrivesResponse = /** @class */ (function (_super) {
    __extends(GetDrivesResponse, _super);
    function GetDrivesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDrivesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Drive }),
        __metadata("design:type", Array)
    ], GetDrivesResponse.prototype, "drives", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDrivesResponse.prototype, "statusCode", void 0);
    return GetDrivesResponse;
}(SpeakeasyBase));
export { GetDrivesResponse };
