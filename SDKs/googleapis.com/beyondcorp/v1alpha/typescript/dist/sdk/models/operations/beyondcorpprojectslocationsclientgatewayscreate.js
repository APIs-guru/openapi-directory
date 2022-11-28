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
var BeyondcorpProjectsLocationsClientGatewaysCreatePathParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientGatewaysCreatePathParams, _super);
    function BeyondcorpProjectsLocationsClientGatewaysCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysCreatePathParams.prototype, "parent", void 0);
    return BeyondcorpProjectsLocationsClientGatewaysCreatePathParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientGatewaysCreatePathParams };
var BeyondcorpProjectsLocationsClientGatewaysCreateQueryParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientGatewaysCreateQueryParams, _super);
    function BeyondcorpProjectsLocationsClientGatewaysCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientGatewayId" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateQueryParams.prototype, "clientGatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateQueryParams.prototype, "validateOnly", void 0);
    return BeyondcorpProjectsLocationsClientGatewaysCreateQueryParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientGatewaysCreateQueryParams };
var BeyondcorpProjectsLocationsClientGatewaysCreateSecurity = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientGatewaysCreateSecurity, _super);
    function BeyondcorpProjectsLocationsClientGatewaysCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateSecurity.prototype, "oauth2c", void 0);
    return BeyondcorpProjectsLocationsClientGatewaysCreateSecurity;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientGatewaysCreateSecurity };
var BeyondcorpProjectsLocationsClientGatewaysCreateRequest = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientGatewaysCreateRequest, _super);
    function BeyondcorpProjectsLocationsClientGatewaysCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsClientGatewaysCreatePathParams)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsClientGatewaysCreateQueryParams)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ClientGatewayInput)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsClientGatewaysCreateSecurity)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateRequest.prototype, "security", void 0);
    return BeyondcorpProjectsLocationsClientGatewaysCreateRequest;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientGatewaysCreateRequest };
var BeyondcorpProjectsLocationsClientGatewaysCreateResponse = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientGatewaysCreateResponse, _super);
    function BeyondcorpProjectsLocationsClientGatewaysCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsClientGatewaysCreateResponse.prototype, "statusCode", void 0);
    return BeyondcorpProjectsLocationsClientGatewaysCreateResponse;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientGatewaysCreateResponse };
