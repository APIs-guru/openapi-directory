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
var AdexchangebuyerProposalsGetPathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerProposalsGetPathParams, _super);
    function AdexchangebuyerProposalsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=proposalId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsGetPathParams.prototype, "proposalId", void 0);
    return AdexchangebuyerProposalsGetPathParams;
}(SpeakeasyBase));
export { AdexchangebuyerProposalsGetPathParams };
var AdexchangebuyerProposalsGetQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerProposalsGetQueryParams, _super);
    function AdexchangebuyerProposalsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerProposalsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsGetQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerProposalsGetQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerProposalsGetQueryParams };
var AdexchangebuyerProposalsGetSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerProposalsGetSecurity, _super);
    function AdexchangebuyerProposalsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerProposalsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerProposalsGetSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerProposalsGetSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerProposalsGetSecurity };
var AdexchangebuyerProposalsGetRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerProposalsGetRequest, _super);
    function AdexchangebuyerProposalsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerProposalsGetPathParams)
    ], AdexchangebuyerProposalsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerProposalsGetQueryParams)
    ], AdexchangebuyerProposalsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerProposalsGetSecurity)
    ], AdexchangebuyerProposalsGetRequest.prototype, "security", void 0);
    return AdexchangebuyerProposalsGetRequest;
}(SpeakeasyBase));
export { AdexchangebuyerProposalsGetRequest };
var AdexchangebuyerProposalsGetResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerProposalsGetResponse, _super);
    function AdexchangebuyerProposalsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerProposalsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Proposal)
    ], AdexchangebuyerProposalsGetResponse.prototype, "proposal", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerProposalsGetResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerProposalsGetResponse;
}(SpeakeasyBase));
export { AdexchangebuyerProposalsGetResponse };
