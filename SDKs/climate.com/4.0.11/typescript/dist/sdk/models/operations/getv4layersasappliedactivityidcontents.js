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
var GetV4LayersAsAppliedActivityIdContentsPathParams = /** @class */ (function (_super) {
    __extends(GetV4LayersAsAppliedActivityIdContentsPathParams, _super);
    function GetV4LayersAsAppliedActivityIdContentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=activityId" }),
        __metadata("design:type", String)
    ], GetV4LayersAsAppliedActivityIdContentsPathParams.prototype, "activityId", void 0);
    return GetV4LayersAsAppliedActivityIdContentsPathParams;
}(SpeakeasyBase));
export { GetV4LayersAsAppliedActivityIdContentsPathParams };
var GetV4LayersAsAppliedActivityIdContentsHeaders = /** @class */ (function (_super) {
    __extends(GetV4LayersAsAppliedActivityIdContentsHeaders, _super);
    function GetV4LayersAsAppliedActivityIdContentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], GetV4LayersAsAppliedActivityIdContentsHeaders.prototype, "accept", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Range" }),
        __metadata("design:type", String)
    ], GetV4LayersAsAppliedActivityIdContentsHeaders.prototype, "range", void 0);
    return GetV4LayersAsAppliedActivityIdContentsHeaders;
}(SpeakeasyBase));
export { GetV4LayersAsAppliedActivityIdContentsHeaders };
var GetV4LayersAsAppliedActivityIdContentsSecurityOption1 = /** @class */ (function (_super) {
    __extends(GetV4LayersAsAppliedActivityIdContentsSecurityOption1, _super);
    function GetV4LayersAsAppliedActivityIdContentsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetV4LayersAsAppliedActivityIdContentsSecurityOption1.prototype, "apiKey", void 0);
    return GetV4LayersAsAppliedActivityIdContentsSecurityOption1;
}(SpeakeasyBase));
export { GetV4LayersAsAppliedActivityIdContentsSecurityOption1 };
var GetV4LayersAsAppliedActivityIdContentsSecurityOption2 = /** @class */ (function (_super) {
    __extends(GetV4LayersAsAppliedActivityIdContentsSecurityOption2, _super);
    function GetV4LayersAsAppliedActivityIdContentsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2AuthorizationCode)
    ], GetV4LayersAsAppliedActivityIdContentsSecurityOption2.prototype, "oauth2AuthorizationCode", void 0);
    return GetV4LayersAsAppliedActivityIdContentsSecurityOption2;
}(SpeakeasyBase));
export { GetV4LayersAsAppliedActivityIdContentsSecurityOption2 };
var GetV4LayersAsAppliedActivityIdContentsSecurity = /** @class */ (function (_super) {
    __extends(GetV4LayersAsAppliedActivityIdContentsSecurity, _super);
    function GetV4LayersAsAppliedActivityIdContentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetV4LayersAsAppliedActivityIdContentsSecurityOption1)
    ], GetV4LayersAsAppliedActivityIdContentsSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetV4LayersAsAppliedActivityIdContentsSecurityOption2)
    ], GetV4LayersAsAppliedActivityIdContentsSecurity.prototype, "option2", void 0);
    return GetV4LayersAsAppliedActivityIdContentsSecurity;
}(SpeakeasyBase));
export { GetV4LayersAsAppliedActivityIdContentsSecurity };
var GetV4LayersAsAppliedActivityIdContentsRequest = /** @class */ (function (_super) {
    __extends(GetV4LayersAsAppliedActivityIdContentsRequest, _super);
    function GetV4LayersAsAppliedActivityIdContentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetV4LayersAsAppliedActivityIdContentsPathParams)
    ], GetV4LayersAsAppliedActivityIdContentsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetV4LayersAsAppliedActivityIdContentsHeaders)
    ], GetV4LayersAsAppliedActivityIdContentsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetV4LayersAsAppliedActivityIdContentsSecurity)
    ], GetV4LayersAsAppliedActivityIdContentsRequest.prototype, "security", void 0);
    return GetV4LayersAsAppliedActivityIdContentsRequest;
}(SpeakeasyBase));
export { GetV4LayersAsAppliedActivityIdContentsRequest };
var GetV4LayersAsAppliedActivityIdContentsResponse = /** @class */ (function (_super) {
    __extends(GetV4LayersAsAppliedActivityIdContentsResponse, _super);
    function GetV4LayersAsAppliedActivityIdContentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetV4LayersAsAppliedActivityIdContentsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetV4LayersAsAppliedActivityIdContentsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetV4LayersAsAppliedActivityIdContentsResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], GetV4LayersAsAppliedActivityIdContentsResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetV4LayersAsAppliedActivityIdContentsResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetV4LayersAsAppliedActivityIdContentsResponse.prototype, "statusCode", void 0);
    return GetV4LayersAsAppliedActivityIdContentsResponse;
}(SpeakeasyBase));
export { GetV4LayersAsAppliedActivityIdContentsResponse };
