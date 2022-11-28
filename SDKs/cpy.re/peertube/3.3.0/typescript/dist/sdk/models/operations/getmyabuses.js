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
var GetMyAbusesQueryParams = /** @class */ (function (_super) {
    __extends(GetMyAbusesQueryParams, _super);
    function GetMyAbusesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], GetMyAbusesQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Number)
    ], GetMyAbusesQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetMyAbusesQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetMyAbusesQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", Number)
    ], GetMyAbusesQueryParams.prototype, "state", void 0);
    return GetMyAbusesQueryParams;
}(SpeakeasyBase));
export { GetMyAbusesQueryParams };
var GetMyAbusesSecurity = /** @class */ (function (_super) {
    __extends(GetMyAbusesSecurity, _super);
    function GetMyAbusesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetMyAbusesSecurity.prototype, "oAuth2", void 0);
    return GetMyAbusesSecurity;
}(SpeakeasyBase));
export { GetMyAbusesSecurity };
var GetMyAbuses200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetMyAbuses200ApplicationJson, _super);
    function GetMyAbuses200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Array)
    ], GetMyAbuses200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetMyAbuses200ApplicationJson.prototype, "total", void 0);
    return GetMyAbuses200ApplicationJson;
}(SpeakeasyBase));
export { GetMyAbuses200ApplicationJson };
var GetMyAbusesRequest = /** @class */ (function (_super) {
    __extends(GetMyAbusesRequest, _super);
    function GetMyAbusesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMyAbusesQueryParams)
    ], GetMyAbusesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMyAbusesSecurity)
    ], GetMyAbusesRequest.prototype, "security", void 0);
    return GetMyAbusesRequest;
}(SpeakeasyBase));
export { GetMyAbusesRequest };
var GetMyAbusesResponse = /** @class */ (function (_super) {
    __extends(GetMyAbusesResponse, _super);
    function GetMyAbusesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMyAbusesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMyAbusesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMyAbuses200ApplicationJson)
    ], GetMyAbusesResponse.prototype, "getMyAbuses200ApplicationJsonObject", void 0);
    return GetMyAbusesResponse;
}(SpeakeasyBase));
export { GetMyAbusesResponse };
