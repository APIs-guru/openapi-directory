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
var GetBillingHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetBillingHistoryPathParams, _super);
    function GetBillingHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" }),
        __metadata("design:type", String)
    ], GetBillingHistoryPathParams.prototype, "platform", void 0);
    return GetBillingHistoryPathParams;
}(SpeakeasyBase));
export { GetBillingHistoryPathParams };
var GetBillingHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetBillingHistoryQueryParams, _super);
    function GetBillingHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetBillingHistoryQueryParams.prototype, "lang", void 0);
    return GetBillingHistoryQueryParams;
}(SpeakeasyBase));
export { GetBillingHistoryQueryParams };
var GetBillingHistorySecurity = /** @class */ (function (_super) {
    __extends(GetBillingHistorySecurity, _super);
    function GetBillingHistorySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], GetBillingHistorySecurity.prototype, "accountAuth", void 0);
    return GetBillingHistorySecurity;
}(SpeakeasyBase));
export { GetBillingHistorySecurity };
var GetBillingHistoryRequest = /** @class */ (function (_super) {
    __extends(GetBillingHistoryRequest, _super);
    function GetBillingHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBillingHistoryPathParams)
    ], GetBillingHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBillingHistoryQueryParams)
    ], GetBillingHistoryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ItvBillingHistoryRequest)
    ], GetBillingHistoryRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBillingHistorySecurity)
    ], GetBillingHistoryRequest.prototype, "security", void 0);
    return GetBillingHistoryRequest;
}(SpeakeasyBase));
export { GetBillingHistoryRequest };
var GetBillingHistoryResponse = /** @class */ (function (_super) {
    __extends(GetBillingHistoryResponse, _super);
    function GetBillingHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBillingHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ItvBillingHistory)
    ], GetBillingHistoryResponse.prototype, "itvBillingHistory", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetBillingHistoryResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBillingHistoryResponse.prototype, "statusCode", void 0);
    return GetBillingHistoryResponse;
}(SpeakeasyBase));
export { GetBillingHistoryResponse };
