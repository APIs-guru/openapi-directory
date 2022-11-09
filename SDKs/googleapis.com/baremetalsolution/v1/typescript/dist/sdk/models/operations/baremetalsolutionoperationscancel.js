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
var BaremetalsolutionOperationsCancelPathParams = /** @class */ (function (_super) {
    __extends(BaremetalsolutionOperationsCancelPathParams, _super);
    function BaremetalsolutionOperationsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BaremetalsolutionOperationsCancelPathParams.prototype, "name", void 0);
    return BaremetalsolutionOperationsCancelPathParams;
}(SpeakeasyBase));
export { BaremetalsolutionOperationsCancelPathParams };
var BaremetalsolutionOperationsCancelQueryParams = /** @class */ (function (_super) {
    __extends(BaremetalsolutionOperationsCancelQueryParams, _super);
    function BaremetalsolutionOperationsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BaremetalsolutionOperationsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BaremetalsolutionOperationsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BaremetalsolutionOperationsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BaremetalsolutionOperationsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BaremetalsolutionOperationsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BaremetalsolutionOperationsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BaremetalsolutionOperationsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BaremetalsolutionOperationsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BaremetalsolutionOperationsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BaremetalsolutionOperationsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BaremetalsolutionOperationsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return BaremetalsolutionOperationsCancelQueryParams;
}(SpeakeasyBase));
export { BaremetalsolutionOperationsCancelQueryParams };
var BaremetalsolutionOperationsCancelSecurity = /** @class */ (function (_super) {
    __extends(BaremetalsolutionOperationsCancelSecurity, _super);
    function BaremetalsolutionOperationsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BaremetalsolutionOperationsCancelSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BaremetalsolutionOperationsCancelSecurity.prototype, "oauth2c", void 0);
    return BaremetalsolutionOperationsCancelSecurity;
}(SpeakeasyBase));
export { BaremetalsolutionOperationsCancelSecurity };
var BaremetalsolutionOperationsCancelRequest = /** @class */ (function (_super) {
    __extends(BaremetalsolutionOperationsCancelRequest, _super);
    function BaremetalsolutionOperationsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BaremetalsolutionOperationsCancelPathParams)
    ], BaremetalsolutionOperationsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BaremetalsolutionOperationsCancelQueryParams)
    ], BaremetalsolutionOperationsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], BaremetalsolutionOperationsCancelRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BaremetalsolutionOperationsCancelSecurity)
    ], BaremetalsolutionOperationsCancelRequest.prototype, "security", void 0);
    return BaremetalsolutionOperationsCancelRequest;
}(SpeakeasyBase));
export { BaremetalsolutionOperationsCancelRequest };
var BaremetalsolutionOperationsCancelResponse = /** @class */ (function (_super) {
    __extends(BaremetalsolutionOperationsCancelResponse, _super);
    function BaremetalsolutionOperationsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BaremetalsolutionOperationsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], BaremetalsolutionOperationsCancelResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BaremetalsolutionOperationsCancelResponse.prototype, "statusCode", void 0);
    return BaremetalsolutionOperationsCancelResponse;
}(SpeakeasyBase));
export { BaremetalsolutionOperationsCancelResponse };
