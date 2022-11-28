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
var ActionsUpdateSelfHostedRunnerGroupForOrgPathParams = /** @class */ (function (_super) {
    __extends(ActionsUpdateSelfHostedRunnerGroupForOrgPathParams, _super);
    function ActionsUpdateSelfHostedRunnerGroupForOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ActionsUpdateSelfHostedRunnerGroupForOrgPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" }),
        __metadata("design:type", Number)
    ], ActionsUpdateSelfHostedRunnerGroupForOrgPathParams.prototype, "runnerGroupId", void 0);
    return ActionsUpdateSelfHostedRunnerGroupForOrgPathParams;
}(SpeakeasyBase));
export { ActionsUpdateSelfHostedRunnerGroupForOrgPathParams };
export var ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum;
(function (ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum) {
    ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum["Selected"] = "selected";
    ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum["All"] = "all";
    ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum["Private"] = "private";
})(ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum || (ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum = {}));
var ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody = /** @class */ (function (_super) {
    __extends(ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody, _super);
    function ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody.prototype, "visibility", void 0);
    return ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody;
}(SpeakeasyBase));
export { ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody };
var ActionsUpdateSelfHostedRunnerGroupForOrgRequest = /** @class */ (function (_super) {
    __extends(ActionsUpdateSelfHostedRunnerGroupForOrgRequest, _super);
    function ActionsUpdateSelfHostedRunnerGroupForOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsUpdateSelfHostedRunnerGroupForOrgPathParams)
    ], ActionsUpdateSelfHostedRunnerGroupForOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody)
    ], ActionsUpdateSelfHostedRunnerGroupForOrgRequest.prototype, "request", void 0);
    return ActionsUpdateSelfHostedRunnerGroupForOrgRequest;
}(SpeakeasyBase));
export { ActionsUpdateSelfHostedRunnerGroupForOrgRequest };
var ActionsUpdateSelfHostedRunnerGroupForOrgResponse = /** @class */ (function (_super) {
    __extends(ActionsUpdateSelfHostedRunnerGroupForOrgResponse, _super);
    function ActionsUpdateSelfHostedRunnerGroupForOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActionsUpdateSelfHostedRunnerGroupForOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActionsUpdateSelfHostedRunnerGroupForOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RunnerGroupsOrg)
    ], ActionsUpdateSelfHostedRunnerGroupForOrgResponse.prototype, "runnerGroupsOrg", void 0);
    return ActionsUpdateSelfHostedRunnerGroupForOrgResponse;
}(SpeakeasyBase));
export { ActionsUpdateSelfHostedRunnerGroupForOrgResponse };
