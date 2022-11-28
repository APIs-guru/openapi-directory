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
var ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams = /** @class */ (function (_super) {
    __extends(ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams, _super);
    function ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" }),
        __metadata("design:type", Number)
    ], ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams.prototype, "runnerGroupId", void 0);
    return ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams;
}(SpeakeasyBase));
export { ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams };
var ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams = /** @class */ (function (_super) {
    __extends(ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams, _super);
    function ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams.prototype, "perPage", void 0);
    return ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams;
}(SpeakeasyBase));
export { ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams };
var ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJson = /** @class */ (function (_super) {
    __extends(ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJson, _super);
    function ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositories", elemType: shared.Repository }),
        __metadata("design:type", Array)
    ], ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJson.prototype, "repositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJson.prototype, "totalCount", void 0);
    return ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJson;
}(SpeakeasyBase));
export { ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJson };
var ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest = /** @class */ (function (_super) {
    __extends(ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest, _super);
    function ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams)
    ], ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams)
    ], ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest.prototype, "queryParams", void 0);
    return ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest;
}(SpeakeasyBase));
export { ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest };
var ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse = /** @class */ (function (_super) {
    __extends(ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse, _super);
    function ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJson)
    ], ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse.prototype, "actionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJsonObject", void 0);
    return ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse;
}(SpeakeasyBase));
export { ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse };
