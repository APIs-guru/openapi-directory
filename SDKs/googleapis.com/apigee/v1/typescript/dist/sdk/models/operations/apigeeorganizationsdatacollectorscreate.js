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
var ApigeeOrganizationsDatacollectorsCreatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDatacollectorsCreatePathParams, _super);
    function ApigeeOrganizationsDatacollectorsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDatacollectorsCreatePathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsDatacollectorsCreatePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsDatacollectorsCreatePathParams };
var ApigeeOrganizationsDatacollectorsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDatacollectorsCreateQueryParams, _super);
    function ApigeeOrganizationsDatacollectorsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDatacollectorsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDatacollectorsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDatacollectorsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDatacollectorsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dataCollectorId" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDatacollectorsCreateQueryParams.prototype, "dataCollectorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDatacollectorsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDatacollectorsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDatacollectorsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsDatacollectorsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDatacollectorsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDatacollectorsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDatacollectorsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsDatacollectorsCreateQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsDatacollectorsCreateQueryParams };
var ApigeeOrganizationsDatacollectorsCreateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDatacollectorsCreateSecurity, _super);
    function ApigeeOrganizationsDatacollectorsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsDatacollectorsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsDatacollectorsCreateSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsDatacollectorsCreateSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsDatacollectorsCreateSecurity };
var ApigeeOrganizationsDatacollectorsCreateRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDatacollectorsCreateRequest, _super);
    function ApigeeOrganizationsDatacollectorsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDatacollectorsCreatePathParams)
    ], ApigeeOrganizationsDatacollectorsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDatacollectorsCreateQueryParams)
    ], ApigeeOrganizationsDatacollectorsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1DataCollectorInput)
    ], ApigeeOrganizationsDatacollectorsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDatacollectorsCreateSecurity)
    ], ApigeeOrganizationsDatacollectorsCreateRequest.prototype, "security", void 0);
    return ApigeeOrganizationsDatacollectorsCreateRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsDatacollectorsCreateRequest };
var ApigeeOrganizationsDatacollectorsCreateResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDatacollectorsCreateResponse, _super);
    function ApigeeOrganizationsDatacollectorsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDatacollectorsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1DataCollector)
    ], ApigeeOrganizationsDatacollectorsCreateResponse.prototype, "googleCloudApigeeV1DataCollector", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsDatacollectorsCreateResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsDatacollectorsCreateResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsDatacollectorsCreateResponse };
