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
var ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams = /** @class */ (function (_super) {
    __extends(ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams, _super);
    function ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" }),
        __metadata("design:type", Number)
    ], ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams.prototype, "runnerGroupId", void 0);
    return ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams;
}(SpeakeasyBase));
export { ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams };
var ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody = /** @class */ (function (_super) {
    __extends(ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody, _super);
    function ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selected_repository_ids" }),
        __metadata("design:type", Array)
    ], ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody.prototype, "selectedRepositoryIds", void 0);
    return ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody;
}(SpeakeasyBase));
export { ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody };
var ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest = /** @class */ (function (_super) {
    __extends(ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest, _super);
    function ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams)
    ], ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody)
    ], ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest.prototype, "request", void 0);
    return ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest;
}(SpeakeasyBase));
export { ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest };
var ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse = /** @class */ (function (_super) {
    __extends(ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse, _super);
    function ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse.prototype, "statusCode", void 0);
    return ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse;
}(SpeakeasyBase));
export { ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse };
