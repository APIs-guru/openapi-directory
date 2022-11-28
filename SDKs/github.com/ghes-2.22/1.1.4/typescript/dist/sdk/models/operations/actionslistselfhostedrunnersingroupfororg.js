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
var ActionsListSelfHostedRunnersInGroupForOrgPathParams = /** @class */ (function (_super) {
    __extends(ActionsListSelfHostedRunnersInGroupForOrgPathParams, _super);
    function ActionsListSelfHostedRunnersInGroupForOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ActionsListSelfHostedRunnersInGroupForOrgPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" }),
        __metadata("design:type", Number)
    ], ActionsListSelfHostedRunnersInGroupForOrgPathParams.prototype, "runnerGroupId", void 0);
    return ActionsListSelfHostedRunnersInGroupForOrgPathParams;
}(SpeakeasyBase));
export { ActionsListSelfHostedRunnersInGroupForOrgPathParams };
var ActionsListSelfHostedRunnersInGroupForOrgQueryParams = /** @class */ (function (_super) {
    __extends(ActionsListSelfHostedRunnersInGroupForOrgQueryParams, _super);
    function ActionsListSelfHostedRunnersInGroupForOrgQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ActionsListSelfHostedRunnersInGroupForOrgQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ActionsListSelfHostedRunnersInGroupForOrgQueryParams.prototype, "perPage", void 0);
    return ActionsListSelfHostedRunnersInGroupForOrgQueryParams;
}(SpeakeasyBase));
export { ActionsListSelfHostedRunnersInGroupForOrgQueryParams };
var ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJson = /** @class */ (function (_super) {
    __extends(ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJson, _super);
    function ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runners", elemType: shared.RunnerNoLabels }),
        __metadata("design:type", Array)
    ], ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJson.prototype, "runners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJson.prototype, "totalCount", void 0);
    return ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJson;
}(SpeakeasyBase));
export { ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJson };
var ActionsListSelfHostedRunnersInGroupForOrgRequest = /** @class */ (function (_super) {
    __extends(ActionsListSelfHostedRunnersInGroupForOrgRequest, _super);
    function ActionsListSelfHostedRunnersInGroupForOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListSelfHostedRunnersInGroupForOrgPathParams)
    ], ActionsListSelfHostedRunnersInGroupForOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListSelfHostedRunnersInGroupForOrgQueryParams)
    ], ActionsListSelfHostedRunnersInGroupForOrgRequest.prototype, "queryParams", void 0);
    return ActionsListSelfHostedRunnersInGroupForOrgRequest;
}(SpeakeasyBase));
export { ActionsListSelfHostedRunnersInGroupForOrgRequest };
var ActionsListSelfHostedRunnersInGroupForOrgResponse = /** @class */ (function (_super) {
    __extends(ActionsListSelfHostedRunnersInGroupForOrgResponse, _super);
    function ActionsListSelfHostedRunnersInGroupForOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActionsListSelfHostedRunnersInGroupForOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ActionsListSelfHostedRunnersInGroupForOrgResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActionsListSelfHostedRunnersInGroupForOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJson)
    ], ActionsListSelfHostedRunnersInGroupForOrgResponse.prototype, "actionsListSelfHostedRunnersInGroupForOrg200ApplicationJsonObject", void 0);
    return ActionsListSelfHostedRunnersInGroupForOrgResponse;
}(SpeakeasyBase));
export { ActionsListSelfHostedRunnersInGroupForOrgResponse };
