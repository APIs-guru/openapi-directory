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
var GetSpaceTopicsPathParams = /** @class */ (function (_super) {
    __extends(GetSpaceTopicsPathParams, _super);
    function GetSpaceTopicsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spaceId" }),
        __metadata("design:type", String)
    ], GetSpaceTopicsPathParams.prototype, "spaceId", void 0);
    return GetSpaceTopicsPathParams;
}(SpeakeasyBase));
export { GetSpaceTopicsPathParams };
export var GetSpaceTopicsSearchDirectionEnum;
(function (GetSpaceTopicsSearchDirectionEnum) {
    GetSpaceTopicsSearchDirectionEnum["Before"] = "BEFORE";
    GetSpaceTopicsSearchDirectionEnum["After"] = "AFTER";
})(GetSpaceTopicsSearchDirectionEnum || (GetSpaceTopicsSearchDirectionEnum = {}));
var GetSpaceTopicsQueryParams = /** @class */ (function (_super) {
    __extends(GetSpaceTopicsQueryParams, _super);
    function GetSpaceTopicsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfResults" }),
        __metadata("design:type", Number)
    ], GetSpaceTopicsQueryParams.prototype, "numberOfResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchDirection" }),
        __metadata("design:type", String)
    ], GetSpaceTopicsQueryParams.prototype, "searchDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" }),
        __metadata("design:type", Date)
    ], GetSpaceTopicsQueryParams.prototype, "timestamp", void 0);
    return GetSpaceTopicsQueryParams;
}(SpeakeasyBase));
export { GetSpaceTopicsQueryParams };
var GetSpaceTopicsSecurity = /** @class */ (function (_super) {
    __extends(GetSpaceTopicsSecurity, _super);
    function GetSpaceTopicsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetSpaceTopicsSecurity.prototype, "oauth", void 0);
    return GetSpaceTopicsSecurity;
}(SpeakeasyBase));
export { GetSpaceTopicsSecurity };
var GetSpaceTopicsRequest = /** @class */ (function (_super) {
    __extends(GetSpaceTopicsRequest, _super);
    function GetSpaceTopicsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSpaceTopicsPathParams)
    ], GetSpaceTopicsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSpaceTopicsQueryParams)
    ], GetSpaceTopicsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSpaceTopicsSecurity)
    ], GetSpaceTopicsRequest.prototype, "security", void 0);
    return GetSpaceTopicsRequest;
}(SpeakeasyBase));
export { GetSpaceTopicsRequest };
var GetSpaceTopicsResponse = /** @class */ (function (_super) {
    __extends(GetSpaceTopicsResponse, _super);
    function GetSpaceTopicsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSpaceTopicsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSpaceTopicsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetSpaceTopicsResponse.prototype, "spaceTopics", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSpaceTopicsResponse.prototype, "statusCode", void 0);
    return GetSpaceTopicsResponse;
}(SpeakeasyBase));
export { GetSpaceTopicsResponse };
