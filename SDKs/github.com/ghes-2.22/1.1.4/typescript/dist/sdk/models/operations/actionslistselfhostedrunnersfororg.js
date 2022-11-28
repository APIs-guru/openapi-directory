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
var ActionsListSelfHostedRunnersForOrgPathParams = /** @class */ (function (_super) {
    __extends(ActionsListSelfHostedRunnersForOrgPathParams, _super);
    function ActionsListSelfHostedRunnersForOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ActionsListSelfHostedRunnersForOrgPathParams.prototype, "org", void 0);
    return ActionsListSelfHostedRunnersForOrgPathParams;
}(SpeakeasyBase));
export { ActionsListSelfHostedRunnersForOrgPathParams };
var ActionsListSelfHostedRunnersForOrgQueryParams = /** @class */ (function (_super) {
    __extends(ActionsListSelfHostedRunnersForOrgQueryParams, _super);
    function ActionsListSelfHostedRunnersForOrgQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ActionsListSelfHostedRunnersForOrgQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ActionsListSelfHostedRunnersForOrgQueryParams.prototype, "perPage", void 0);
    return ActionsListSelfHostedRunnersForOrgQueryParams;
}(SpeakeasyBase));
export { ActionsListSelfHostedRunnersForOrgQueryParams };
var ActionsListSelfHostedRunnersForOrg200ApplicationJson = /** @class */ (function (_super) {
    __extends(ActionsListSelfHostedRunnersForOrg200ApplicationJson, _super);
    function ActionsListSelfHostedRunnersForOrg200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runners", elemType: shared.RunnerNoLabels }),
        __metadata("design:type", Array)
    ], ActionsListSelfHostedRunnersForOrg200ApplicationJson.prototype, "runners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], ActionsListSelfHostedRunnersForOrg200ApplicationJson.prototype, "totalCount", void 0);
    return ActionsListSelfHostedRunnersForOrg200ApplicationJson;
}(SpeakeasyBase));
export { ActionsListSelfHostedRunnersForOrg200ApplicationJson };
var ActionsListSelfHostedRunnersForOrgRequest = /** @class */ (function (_super) {
    __extends(ActionsListSelfHostedRunnersForOrgRequest, _super);
    function ActionsListSelfHostedRunnersForOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListSelfHostedRunnersForOrgPathParams)
    ], ActionsListSelfHostedRunnersForOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListSelfHostedRunnersForOrgQueryParams)
    ], ActionsListSelfHostedRunnersForOrgRequest.prototype, "queryParams", void 0);
    return ActionsListSelfHostedRunnersForOrgRequest;
}(SpeakeasyBase));
export { ActionsListSelfHostedRunnersForOrgRequest };
var ActionsListSelfHostedRunnersForOrgResponse = /** @class */ (function (_super) {
    __extends(ActionsListSelfHostedRunnersForOrgResponse, _super);
    function ActionsListSelfHostedRunnersForOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActionsListSelfHostedRunnersForOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ActionsListSelfHostedRunnersForOrgResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActionsListSelfHostedRunnersForOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListSelfHostedRunnersForOrg200ApplicationJson)
    ], ActionsListSelfHostedRunnersForOrgResponse.prototype, "actionsListSelfHostedRunnersForOrg200ApplicationJsonObject", void 0);
    return ActionsListSelfHostedRunnersForOrgResponse;
}(SpeakeasyBase));
export { ActionsListSelfHostedRunnersForOrgResponse };
