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
var FireteamGetAvailableClanFireteamsPathParams = /** @class */ (function (_super) {
    __extends(FireteamGetAvailableClanFireteamsPathParams, _super);
    function FireteamGetAvailableClanFireteamsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=activityType" }),
        __metadata("design:type", Number)
    ], FireteamGetAvailableClanFireteamsPathParams.prototype, "activityType", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=dateRange" }),
        __metadata("design:type", Number)
    ], FireteamGetAvailableClanFireteamsPathParams.prototype, "dateRange", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", Number)
    ], FireteamGetAvailableClanFireteamsPathParams.prototype, "groupId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=page" }),
        __metadata("design:type", Number)
    ], FireteamGetAvailableClanFireteamsPathParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=platform" }),
        __metadata("design:type", Number)
    ], FireteamGetAvailableClanFireteamsPathParams.prototype, "platform", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=publicOnly" }),
        __metadata("design:type", Number)
    ], FireteamGetAvailableClanFireteamsPathParams.prototype, "publicOnly", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=slotFilter" }),
        __metadata("design:type", Number)
    ], FireteamGetAvailableClanFireteamsPathParams.prototype, "slotFilter", void 0);
    return FireteamGetAvailableClanFireteamsPathParams;
}(SpeakeasyBase));
export { FireteamGetAvailableClanFireteamsPathParams };
var FireteamGetAvailableClanFireteamsQueryParams = /** @class */ (function (_super) {
    __extends(FireteamGetAvailableClanFireteamsQueryParams, _super);
    function FireteamGetAvailableClanFireteamsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=langFilter" }),
        __metadata("design:type", String)
    ], FireteamGetAvailableClanFireteamsQueryParams.prototype, "langFilter", void 0);
    return FireteamGetAvailableClanFireteamsQueryParams;
}(SpeakeasyBase));
export { FireteamGetAvailableClanFireteamsQueryParams };
var FireteamGetAvailableClanFireteamsSecurity = /** @class */ (function (_super) {
    __extends(FireteamGetAvailableClanFireteamsSecurity, _super);
    function FireteamGetAvailableClanFireteamsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FireteamGetAvailableClanFireteamsSecurity.prototype, "oauth2", void 0);
    return FireteamGetAvailableClanFireteamsSecurity;
}(SpeakeasyBase));
export { FireteamGetAvailableClanFireteamsSecurity };
var FireteamGetAvailableClanFireteamsRequest = /** @class */ (function (_super) {
    __extends(FireteamGetAvailableClanFireteamsRequest, _super);
    function FireteamGetAvailableClanFireteamsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FireteamGetAvailableClanFireteamsPathParams)
    ], FireteamGetAvailableClanFireteamsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FireteamGetAvailableClanFireteamsQueryParams)
    ], FireteamGetAvailableClanFireteamsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FireteamGetAvailableClanFireteamsSecurity)
    ], FireteamGetAvailableClanFireteamsRequest.prototype, "security", void 0);
    return FireteamGetAvailableClanFireteamsRequest;
}(SpeakeasyBase));
export { FireteamGetAvailableClanFireteamsRequest };
var FireteamGetAvailableClanFireteamsResponse = /** @class */ (function (_super) {
    __extends(FireteamGetAvailableClanFireteamsResponse, _super);
    function FireteamGetAvailableClanFireteamsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], FireteamGetAvailableClanFireteamsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FireteamGetAvailableClanFireteamsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FireteamGetAvailableClanFireteamsResponse.prototype, "statusCode", void 0);
    return FireteamGetAvailableClanFireteamsResponse;
}(SpeakeasyBase));
export { FireteamGetAvailableClanFireteamsResponse };
