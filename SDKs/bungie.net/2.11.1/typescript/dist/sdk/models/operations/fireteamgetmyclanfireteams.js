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
var FireteamGetMyClanFireteamsPathParams = /** @class */ (function (_super) {
    __extends(FireteamGetMyClanFireteamsPathParams, _super);
    function FireteamGetMyClanFireteamsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", Number)
    ], FireteamGetMyClanFireteamsPathParams.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=includeClosed" }),
        __metadata("design:type", Boolean)
    ], FireteamGetMyClanFireteamsPathParams.prototype, "includeClosed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=page" }),
        __metadata("design:type", Number)
    ], FireteamGetMyClanFireteamsPathParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" }),
        __metadata("design:type", Number)
    ], FireteamGetMyClanFireteamsPathParams.prototype, "platform", void 0);
    return FireteamGetMyClanFireteamsPathParams;
}(SpeakeasyBase));
export { FireteamGetMyClanFireteamsPathParams };
var FireteamGetMyClanFireteamsQueryParams = /** @class */ (function (_super) {
    __extends(FireteamGetMyClanFireteamsQueryParams, _super);
    function FireteamGetMyClanFireteamsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupFilter" }),
        __metadata("design:type", Boolean)
    ], FireteamGetMyClanFireteamsQueryParams.prototype, "groupFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=langFilter" }),
        __metadata("design:type", String)
    ], FireteamGetMyClanFireteamsQueryParams.prototype, "langFilter", void 0);
    return FireteamGetMyClanFireteamsQueryParams;
}(SpeakeasyBase));
export { FireteamGetMyClanFireteamsQueryParams };
var FireteamGetMyClanFireteamsSecurity = /** @class */ (function (_super) {
    __extends(FireteamGetMyClanFireteamsSecurity, _super);
    function FireteamGetMyClanFireteamsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FireteamGetMyClanFireteamsSecurity.prototype, "oauth2", void 0);
    return FireteamGetMyClanFireteamsSecurity;
}(SpeakeasyBase));
export { FireteamGetMyClanFireteamsSecurity };
var FireteamGetMyClanFireteamsRequest = /** @class */ (function (_super) {
    __extends(FireteamGetMyClanFireteamsRequest, _super);
    function FireteamGetMyClanFireteamsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FireteamGetMyClanFireteamsPathParams)
    ], FireteamGetMyClanFireteamsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FireteamGetMyClanFireteamsQueryParams)
    ], FireteamGetMyClanFireteamsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FireteamGetMyClanFireteamsSecurity)
    ], FireteamGetMyClanFireteamsRequest.prototype, "security", void 0);
    return FireteamGetMyClanFireteamsRequest;
}(SpeakeasyBase));
export { FireteamGetMyClanFireteamsRequest };
var FireteamGetMyClanFireteamsResponse = /** @class */ (function (_super) {
    __extends(FireteamGetMyClanFireteamsResponse, _super);
    function FireteamGetMyClanFireteamsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], FireteamGetMyClanFireteamsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FireteamGetMyClanFireteamsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FireteamGetMyClanFireteamsResponse.prototype, "statusCode", void 0);
    return FireteamGetMyClanFireteamsResponse;
}(SpeakeasyBase));
export { FireteamGetMyClanFireteamsResponse };
