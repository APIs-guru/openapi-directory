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
var GetItemWatchedStatusPathParams = /** @class */ (function (_super) {
    __extends(GetItemWatchedStatusPathParams, _super);
    function GetItemWatchedStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetItemWatchedStatusPathParams.prototype, "itemId", void 0);
    return GetItemWatchedStatusPathParams;
}(SpeakeasyBase));
export { GetItemWatchedStatusPathParams };
var GetItemWatchedStatusQueryParams = /** @class */ (function (_super) {
    __extends(GetItemWatchedStatusQueryParams, _super);
    function GetItemWatchedStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], GetItemWatchedStatusQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetItemWatchedStatusQueryParams.prototype, "lang", void 0);
    return GetItemWatchedStatusQueryParams;
}(SpeakeasyBase));
export { GetItemWatchedStatusQueryParams };
var GetItemWatchedStatusSecurity = /** @class */ (function (_super) {
    __extends(GetItemWatchedStatusSecurity, _super);
    function GetItemWatchedStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeProfileAuth)
    ], GetItemWatchedStatusSecurity.prototype, "profileAuth", void 0);
    return GetItemWatchedStatusSecurity;
}(SpeakeasyBase));
export { GetItemWatchedStatusSecurity };
var GetItemWatchedStatusRequest = /** @class */ (function (_super) {
    __extends(GetItemWatchedStatusRequest, _super);
    function GetItemWatchedStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemWatchedStatusPathParams)
    ], GetItemWatchedStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemWatchedStatusQueryParams)
    ], GetItemWatchedStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemWatchedStatusSecurity)
    ], GetItemWatchedStatusRequest.prototype, "security", void 0);
    return GetItemWatchedStatusRequest;
}(SpeakeasyBase));
export { GetItemWatchedStatusRequest };
var GetItemWatchedStatusResponse = /** @class */ (function (_super) {
    __extends(GetItemWatchedStatusResponse, _super);
    function GetItemWatchedStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetItemWatchedStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetItemWatchedStatusResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetItemWatchedStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Watched)
    ], GetItemWatchedStatusResponse.prototype, "watched", void 0);
    return GetItemWatchedStatusResponse;
}(SpeakeasyBase));
export { GetItemWatchedStatusResponse };
