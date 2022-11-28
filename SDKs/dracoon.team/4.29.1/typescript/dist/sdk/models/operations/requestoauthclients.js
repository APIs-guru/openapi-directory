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
var RequestOAuthClientsQueryParams = /** @class */ (function (_super) {
    __extends(RequestOAuthClientsQueryParams, _super);
    function RequestOAuthClientsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RequestOAuthClientsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], RequestOAuthClientsQueryParams.prototype, "sort", void 0);
    return RequestOAuthClientsQueryParams;
}(SpeakeasyBase));
export { RequestOAuthClientsQueryParams };
var RequestOAuthClientsHeaders = /** @class */ (function (_super) {
    __extends(RequestOAuthClientsHeaders, _super);
    function RequestOAuthClientsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestOAuthClientsHeaders.prototype, "xSdsAuthToken", void 0);
    return RequestOAuthClientsHeaders;
}(SpeakeasyBase));
export { RequestOAuthClientsHeaders };
var RequestOAuthClientsRequest = /** @class */ (function (_super) {
    __extends(RequestOAuthClientsRequest, _super);
    function RequestOAuthClientsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestOAuthClientsQueryParams)
    ], RequestOAuthClientsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestOAuthClientsHeaders)
    ], RequestOAuthClientsRequest.prototype, "headers", void 0);
    return RequestOAuthClientsRequest;
}(SpeakeasyBase));
export { RequestOAuthClientsRequest };
var RequestOAuthClientsResponse = /** @class */ (function (_super) {
    __extends(RequestOAuthClientsResponse, _super);
    function RequestOAuthClientsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestOAuthClientsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestOAuthClientsResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.OAuthClient }),
        __metadata("design:type", Array)
    ], RequestOAuthClientsResponse.prototype, "oAuthClients", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestOAuthClientsResponse.prototype, "statusCode", void 0);
    return RequestOAuthClientsResponse;
}(SpeakeasyBase));
export { RequestOAuthClientsResponse };
