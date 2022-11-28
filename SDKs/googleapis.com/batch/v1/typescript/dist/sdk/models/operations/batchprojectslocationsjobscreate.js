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
var BatchProjectsLocationsJobsCreatePathParams = /** @class */ (function (_super) {
    __extends(BatchProjectsLocationsJobsCreatePathParams, _super);
    function BatchProjectsLocationsJobsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsCreatePathParams.prototype, "parent", void 0);
    return BatchProjectsLocationsJobsCreatePathParams;
}(SpeakeasyBase));
export { BatchProjectsLocationsJobsCreatePathParams };
var BatchProjectsLocationsJobsCreateQueryParams = /** @class */ (function (_super) {
    __extends(BatchProjectsLocationsJobsCreateQueryParams, _super);
    function BatchProjectsLocationsJobsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jobId" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsCreateQueryParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BatchProjectsLocationsJobsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return BatchProjectsLocationsJobsCreateQueryParams;
}(SpeakeasyBase));
export { BatchProjectsLocationsJobsCreateQueryParams };
var BatchProjectsLocationsJobsCreateSecurity = /** @class */ (function (_super) {
    __extends(BatchProjectsLocationsJobsCreateSecurity, _super);
    function BatchProjectsLocationsJobsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BatchProjectsLocationsJobsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BatchProjectsLocationsJobsCreateSecurity.prototype, "oauth2c", void 0);
    return BatchProjectsLocationsJobsCreateSecurity;
}(SpeakeasyBase));
export { BatchProjectsLocationsJobsCreateSecurity };
var BatchProjectsLocationsJobsCreateRequest = /** @class */ (function (_super) {
    __extends(BatchProjectsLocationsJobsCreateRequest, _super);
    function BatchProjectsLocationsJobsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchProjectsLocationsJobsCreatePathParams)
    ], BatchProjectsLocationsJobsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchProjectsLocationsJobsCreateQueryParams)
    ], BatchProjectsLocationsJobsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.JobInput)
    ], BatchProjectsLocationsJobsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchProjectsLocationsJobsCreateSecurity)
    ], BatchProjectsLocationsJobsCreateRequest.prototype, "security", void 0);
    return BatchProjectsLocationsJobsCreateRequest;
}(SpeakeasyBase));
export { BatchProjectsLocationsJobsCreateRequest };
var BatchProjectsLocationsJobsCreateResponse = /** @class */ (function (_super) {
    __extends(BatchProjectsLocationsJobsCreateResponse, _super);
    function BatchProjectsLocationsJobsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Job)
    ], BatchProjectsLocationsJobsCreateResponse.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BatchProjectsLocationsJobsCreateResponse.prototype, "statusCode", void 0);
    return BatchProjectsLocationsJobsCreateResponse;
}(SpeakeasyBase));
export { BatchProjectsLocationsJobsCreateResponse };
