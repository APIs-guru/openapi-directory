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
var ConnectionsRevokePathParams = /** @class */ (function (_super) {
    __extends(ConnectionsRevokePathParams, _super);
    function ConnectionsRevokePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=application_id" }),
        __metadata("design:type", String)
    ], ConnectionsRevokePathParams.prototype, "applicationId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=service_id" }),
        __metadata("design:type", String)
    ], ConnectionsRevokePathParams.prototype, "serviceId", void 0);
    return ConnectionsRevokePathParams;
}(SpeakeasyBase));
export { ConnectionsRevokePathParams };
var ConnectionsRevokeQueryParams = /** @class */ (function (_super) {
    __extends(ConnectionsRevokeQueryParams, _super);
    function ConnectionsRevokeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=redirect_uri" }),
        __metadata("design:type", String)
    ], ConnectionsRevokeQueryParams.prototype, "redirectUri", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], ConnectionsRevokeQueryParams.prototype, "state", void 0);
    return ConnectionsRevokeQueryParams;
}(SpeakeasyBase));
export { ConnectionsRevokeQueryParams };
var ConnectionsRevokeRequest = /** @class */ (function (_super) {
    __extends(ConnectionsRevokeRequest, _super);
    function ConnectionsRevokeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ConnectionsRevokePathParams)
    ], ConnectionsRevokeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ConnectionsRevokeQueryParams)
    ], ConnectionsRevokeRequest.prototype, "queryParams", void 0);
    return ConnectionsRevokeRequest;
}(SpeakeasyBase));
export { ConnectionsRevokeRequest };
var ConnectionsRevokeResponse = /** @class */ (function (_super) {
    __extends(ConnectionsRevokeResponse, _super);
    function ConnectionsRevokeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ConnectionsRevokeResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ConnectionsRevokeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ConnectionsRevokeResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ConnectionsRevokeResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ConnectionsRevokeResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ConnectionsRevokeResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ConnectionsRevokeResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ConnectionsRevokeResponse.prototype, "unprocessableResponse", void 0);
    return ConnectionsRevokeResponse;
}(SpeakeasyBase));
export { ConnectionsRevokeResponse };
