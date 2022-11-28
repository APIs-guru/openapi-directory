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
var GetAccountPathParams = /** @class */ (function (_super) {
    __extends(GetAccountPathParams, _super);
    function GetAccountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], GetAccountPathParams.prototype, "accountId", void 0);
    return GetAccountPathParams;
}(SpeakeasyBase));
export { GetAccountPathParams };
var GetAccountQueryParams = /** @class */ (function (_super) {
    __extends(GetAccountQueryParams, _super);
    function GetAccountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=account_id" }),
        __metadata("design:type", Number)
    ], GetAccountQueryParams.prototype, "accountId", void 0);
    return GetAccountQueryParams;
}(SpeakeasyBase));
export { GetAccountQueryParams };
var GetAccountRequest = /** @class */ (function (_super) {
    __extends(GetAccountRequest, _super);
    function GetAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountPathParams)
    ], GetAccountRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountQueryParams)
    ], GetAccountRequest.prototype, "queryParams", void 0);
    return GetAccountRequest;
}(SpeakeasyBase));
export { GetAccountRequest };
var GetAccountResponse = /** @class */ (function (_super) {
    __extends(GetAccountResponse, _super);
    function GetAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccountDetail)
    ], GetAccountResponse.prototype, "accountDetail", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountResponse.prototype, "statusCode", void 0);
    return GetAccountResponse;
}(SpeakeasyBase));
export { GetAccountResponse };
