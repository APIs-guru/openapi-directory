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
export var GetAbusesFilterEnum;
(function (GetAbusesFilterEnum) {
    GetAbusesFilterEnum["Video"] = "video";
    GetAbusesFilterEnum["Comment"] = "comment";
    GetAbusesFilterEnum["Account"] = "account";
})(GetAbusesFilterEnum || (GetAbusesFilterEnum = {}));
export var GetAbusesVideoIsEnum;
(function (GetAbusesVideoIsEnum) {
    GetAbusesVideoIsEnum["Deleted"] = "deleted";
    GetAbusesVideoIsEnum["Blacklisted"] = "blacklisted";
})(GetAbusesVideoIsEnum || (GetAbusesVideoIsEnum = {}));
var GetAbusesQueryParams = /** @class */ (function (_super) {
    __extends(GetAbusesQueryParams, _super);
    function GetAbusesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], GetAbusesQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetAbusesQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Number)
    ], GetAbusesQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=predefinedReason" }),
        __metadata("design:type", Array)
    ], GetAbusesQueryParams.prototype, "predefinedReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GetAbusesQueryParams.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchReportee" }),
        __metadata("design:type", String)
    ], GetAbusesQueryParams.prototype, "searchReportee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchReporter" }),
        __metadata("design:type", String)
    ], GetAbusesQueryParams.prototype, "searchReporter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchVideo" }),
        __metadata("design:type", String)
    ], GetAbusesQueryParams.prototype, "searchVideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchVideoChannel" }),
        __metadata("design:type", String)
    ], GetAbusesQueryParams.prototype, "searchVideoChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetAbusesQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetAbusesQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", Number)
    ], GetAbusesQueryParams.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoIs" }),
        __metadata("design:type", String)
    ], GetAbusesQueryParams.prototype, "videoIs", void 0);
    return GetAbusesQueryParams;
}(SpeakeasyBase));
export { GetAbusesQueryParams };
var GetAbusesSecurity = /** @class */ (function (_super) {
    __extends(GetAbusesSecurity, _super);
    function GetAbusesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetAbusesSecurity.prototype, "oAuth2", void 0);
    return GetAbusesSecurity;
}(SpeakeasyBase));
export { GetAbusesSecurity };
var GetAbuses200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAbuses200ApplicationJson, _super);
    function GetAbuses200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Array)
    ], GetAbuses200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetAbuses200ApplicationJson.prototype, "total", void 0);
    return GetAbuses200ApplicationJson;
}(SpeakeasyBase));
export { GetAbuses200ApplicationJson };
var GetAbusesRequest = /** @class */ (function (_super) {
    __extends(GetAbusesRequest, _super);
    function GetAbusesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAbusesQueryParams)
    ], GetAbusesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAbusesSecurity)
    ], GetAbusesRequest.prototype, "security", void 0);
    return GetAbusesRequest;
}(SpeakeasyBase));
export { GetAbusesRequest };
var GetAbusesResponse = /** @class */ (function (_super) {
    __extends(GetAbusesResponse, _super);
    function GetAbusesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAbusesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAbusesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAbuses200ApplicationJson)
    ], GetAbusesResponse.prototype, "getAbuses200ApplicationJsonObject", void 0);
    return GetAbusesResponse;
}(SpeakeasyBase));
export { GetAbusesResponse };
