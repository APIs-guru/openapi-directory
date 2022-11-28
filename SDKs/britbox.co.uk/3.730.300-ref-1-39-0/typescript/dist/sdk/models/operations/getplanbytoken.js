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
var GetPlanByTokenPathParams = /** @class */ (function (_super) {
    __extends(GetPlanByTokenPathParams, _super);
    function GetPlanByTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" }),
        __metadata("design:type", String)
    ], GetPlanByTokenPathParams.prototype, "token", void 0);
    return GetPlanByTokenPathParams;
}(SpeakeasyBase));
export { GetPlanByTokenPathParams };
var GetPlanByTokenQueryParams = /** @class */ (function (_super) {
    __extends(GetPlanByTokenQueryParams, _super);
    function GetPlanByTokenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetPlanByTokenQueryParams.prototype, "lang", void 0);
    return GetPlanByTokenQueryParams;
}(SpeakeasyBase));
export { GetPlanByTokenQueryParams };
var GetPlanByTokenRequest = /** @class */ (function (_super) {
    __extends(GetPlanByTokenRequest, _super);
    function GetPlanByTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPlanByTokenPathParams)
    ], GetPlanByTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPlanByTokenQueryParams)
    ], GetPlanByTokenRequest.prototype, "queryParams", void 0);
    return GetPlanByTokenRequest;
}(SpeakeasyBase));
export { GetPlanByTokenRequest };
var GetPlanByTokenResponse = /** @class */ (function (_super) {
    __extends(GetPlanByTokenResponse, _super);
    function GetPlanByTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BtPlanListItem)
    ], GetPlanByTokenResponse.prototype, "btPlanListItem", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPlanByTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetPlanByTokenResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPlanByTokenResponse.prototype, "statusCode", void 0);
    return GetPlanByTokenResponse;
}(SpeakeasyBase));
export { GetPlanByTokenResponse };
