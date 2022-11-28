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
var GetSpaceRepliesPathParams = /** @class */ (function (_super) {
    __extends(GetSpaceRepliesPathParams, _super);
    function GetSpaceRepliesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spaceId" }),
        __metadata("design:type", String)
    ], GetSpaceRepliesPathParams.prototype, "spaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topicId" }),
        __metadata("design:type", String)
    ], GetSpaceRepliesPathParams.prototype, "topicId", void 0);
    return GetSpaceRepliesPathParams;
}(SpeakeasyBase));
export { GetSpaceRepliesPathParams };
export var GetSpaceRepliesSearchDirectionEnum;
(function (GetSpaceRepliesSearchDirectionEnum) {
    GetSpaceRepliesSearchDirectionEnum["Before"] = "BEFORE";
    GetSpaceRepliesSearchDirectionEnum["After"] = "AFTER";
})(GetSpaceRepliesSearchDirectionEnum || (GetSpaceRepliesSearchDirectionEnum = {}));
var GetSpaceRepliesQueryParams = /** @class */ (function (_super) {
    __extends(GetSpaceRepliesQueryParams, _super);
    function GetSpaceRepliesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfResults" }),
        __metadata("design:type", Number)
    ], GetSpaceRepliesQueryParams.prototype, "numberOfResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchDirection" }),
        __metadata("design:type", String)
    ], GetSpaceRepliesQueryParams.prototype, "searchDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" }),
        __metadata("design:type", Date)
    ], GetSpaceRepliesQueryParams.prototype, "timestamp", void 0);
    return GetSpaceRepliesQueryParams;
}(SpeakeasyBase));
export { GetSpaceRepliesQueryParams };
var GetSpaceRepliesSecurity = /** @class */ (function (_super) {
    __extends(GetSpaceRepliesSecurity, _super);
    function GetSpaceRepliesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetSpaceRepliesSecurity.prototype, "oauth", void 0);
    return GetSpaceRepliesSecurity;
}(SpeakeasyBase));
export { GetSpaceRepliesSecurity };
var GetSpaceRepliesRequest = /** @class */ (function (_super) {
    __extends(GetSpaceRepliesRequest, _super);
    function GetSpaceRepliesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSpaceRepliesPathParams)
    ], GetSpaceRepliesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSpaceRepliesQueryParams)
    ], GetSpaceRepliesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSpaceRepliesSecurity)
    ], GetSpaceRepliesRequest.prototype, "security", void 0);
    return GetSpaceRepliesRequest;
}(SpeakeasyBase));
export { GetSpaceRepliesRequest };
var GetSpaceRepliesResponse = /** @class */ (function (_super) {
    __extends(GetSpaceRepliesResponse, _super);
    function GetSpaceRepliesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSpaceRepliesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSpaceRepliesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSpaceRepliesResponse.prototype, "spaceReply", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSpaceRepliesResponse.prototype, "statusCode", void 0);
    return GetSpaceRepliesResponse;
}(SpeakeasyBase));
export { GetSpaceRepliesResponse };
