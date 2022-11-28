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
var BeyondcorpProjectsLocationsConnectorsPatchPathParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectorsPatchPathParams, _super);
    function BeyondcorpProjectsLocationsConnectorsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsPatchPathParams.prototype, "name", void 0);
    return BeyondcorpProjectsLocationsConnectorsPatchPathParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectorsPatchPathParams };
var BeyondcorpProjectsLocationsConnectorsPatchQueryParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectorsPatchQueryParams, _super);
    function BeyondcorpProjectsLocationsConnectorsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsConnectorsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsPatchQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsPatchQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsConnectorsPatchQueryParams.prototype, "validateOnly", void 0);
    return BeyondcorpProjectsLocationsConnectorsPatchQueryParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectorsPatchQueryParams };
var BeyondcorpProjectsLocationsConnectorsPatchSecurity = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectorsPatchSecurity, _super);
    function BeyondcorpProjectsLocationsConnectorsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BeyondcorpProjectsLocationsConnectorsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BeyondcorpProjectsLocationsConnectorsPatchSecurity.prototype, "oauth2c", void 0);
    return BeyondcorpProjectsLocationsConnectorsPatchSecurity;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectorsPatchSecurity };
var BeyondcorpProjectsLocationsConnectorsPatchRequest = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectorsPatchRequest, _super);
    function BeyondcorpProjectsLocationsConnectorsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsConnectorsPatchPathParams)
    ], BeyondcorpProjectsLocationsConnectorsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsConnectorsPatchQueryParams)
    ], BeyondcorpProjectsLocationsConnectorsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ConnectorInput)
    ], BeyondcorpProjectsLocationsConnectorsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsConnectorsPatchSecurity)
    ], BeyondcorpProjectsLocationsConnectorsPatchRequest.prototype, "security", void 0);
    return BeyondcorpProjectsLocationsConnectorsPatchRequest;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectorsPatchRequest };
var BeyondcorpProjectsLocationsConnectorsPatchResponse = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectorsPatchResponse, _super);
    function BeyondcorpProjectsLocationsConnectorsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], BeyondcorpProjectsLocationsConnectorsPatchResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsConnectorsPatchResponse.prototype, "statusCode", void 0);
    return BeyondcorpProjectsLocationsConnectorsPatchResponse;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectorsPatchResponse };
