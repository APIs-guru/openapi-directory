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
var GetPlayerUsageQueryParams = /** @class */ (function (_super) {
    __extends(GetPlayerUsageQueryParams, _super);
    function GetPlayerUsageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conference" }),
        __metadata("design:type", String)
    ], GetPlayerUsageQueryParams.prototype, "conference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeGarbageTime" }),
        __metadata("design:type", Boolean)
    ], GetPlayerUsageQueryParams.prototype, "excludeGarbageTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playerId" }),
        __metadata("design:type", Number)
    ], GetPlayerUsageQueryParams.prototype, "playerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=position" }),
        __metadata("design:type", String)
    ], GetPlayerUsageQueryParams.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team" }),
        __metadata("design:type", String)
    ], GetPlayerUsageQueryParams.prototype, "team", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", Number)
    ], GetPlayerUsageQueryParams.prototype, "year", void 0);
    return GetPlayerUsageQueryParams;
}(SpeakeasyBase));
export { GetPlayerUsageQueryParams };
var GetPlayerUsageRequest = /** @class */ (function (_super) {
    __extends(GetPlayerUsageRequest, _super);
    function GetPlayerUsageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPlayerUsageQueryParams)
    ], GetPlayerUsageRequest.prototype, "queryParams", void 0);
    return GetPlayerUsageRequest;
}(SpeakeasyBase));
export { GetPlayerUsageRequest };
var GetPlayerUsageResponse = /** @class */ (function (_super) {
    __extends(GetPlayerUsageResponse, _super);
    function GetPlayerUsageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPlayerUsageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.PlayerUsage }),
        __metadata("design:type", Array)
    ], GetPlayerUsageResponse.prototype, "playerUsages", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPlayerUsageResponse.prototype, "statusCode", void 0);
    return GetPlayerUsageResponse;
}(SpeakeasyBase));
export { GetPlayerUsageResponse };
