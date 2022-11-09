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
var GetUserWatchingQueryParams = /** @class */ (function (_super) {
    __extends(GetUserWatchingQueryParams, _super);
    function GetUserWatchingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=identity_cookie" }),
        __metadata("design:type", Number)
    ], GetUserWatchingQueryParams.prototype, "identityCookie", void 0);
    return GetUserWatchingQueryParams;
}(SpeakeasyBase));
export { GetUserWatchingQueryParams };
var GetUserWatchingRequest = /** @class */ (function (_super) {
    __extends(GetUserWatchingRequest, _super);
    function GetUserWatchingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetUserWatchingQueryParams)
    ], GetUserWatchingRequest.prototype, "queryParams", void 0);
    return GetUserWatchingRequest;
}(SpeakeasyBase));
export { GetUserWatchingRequest };
var GetUserWatchingResponse = /** @class */ (function (_super) {
    __extends(GetUserWatchingResponse, _super);
    function GetUserWatchingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetUserWatchingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetUserWatchingResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetUserWatchingResponse.prototype, "ibl", void 0);
    return GetUserWatchingResponse;
}(SpeakeasyBase));
export { GetUserWatchingResponse };
