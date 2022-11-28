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
var ActionsListSelfHostedRunnersForRepoPathParams = /** @class */ (function (_super) {
    __extends(ActionsListSelfHostedRunnersForRepoPathParams, _super);
    function ActionsListSelfHostedRunnersForRepoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ActionsListSelfHostedRunnersForRepoPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ActionsListSelfHostedRunnersForRepoPathParams.prototype, "repo", void 0);
    return ActionsListSelfHostedRunnersForRepoPathParams;
}(SpeakeasyBase));
export { ActionsListSelfHostedRunnersForRepoPathParams };
var ActionsListSelfHostedRunnersForRepoQueryParams = /** @class */ (function (_super) {
    __extends(ActionsListSelfHostedRunnersForRepoQueryParams, _super);
    function ActionsListSelfHostedRunnersForRepoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ActionsListSelfHostedRunnersForRepoQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ActionsListSelfHostedRunnersForRepoQueryParams.prototype, "perPage", void 0);
    return ActionsListSelfHostedRunnersForRepoQueryParams;
}(SpeakeasyBase));
export { ActionsListSelfHostedRunnersForRepoQueryParams };
var ActionsListSelfHostedRunnersForRepo200ApplicationJson = /** @class */ (function (_super) {
    __extends(ActionsListSelfHostedRunnersForRepo200ApplicationJson, _super);
    function ActionsListSelfHostedRunnersForRepo200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runners", elemType: shared.RunnerNoLabels }),
        __metadata("design:type", Array)
    ], ActionsListSelfHostedRunnersForRepo200ApplicationJson.prototype, "runners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], ActionsListSelfHostedRunnersForRepo200ApplicationJson.prototype, "totalCount", void 0);
    return ActionsListSelfHostedRunnersForRepo200ApplicationJson;
}(SpeakeasyBase));
export { ActionsListSelfHostedRunnersForRepo200ApplicationJson };
var ActionsListSelfHostedRunnersForRepoRequest = /** @class */ (function (_super) {
    __extends(ActionsListSelfHostedRunnersForRepoRequest, _super);
    function ActionsListSelfHostedRunnersForRepoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListSelfHostedRunnersForRepoPathParams)
    ], ActionsListSelfHostedRunnersForRepoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListSelfHostedRunnersForRepoQueryParams)
    ], ActionsListSelfHostedRunnersForRepoRequest.prototype, "queryParams", void 0);
    return ActionsListSelfHostedRunnersForRepoRequest;
}(SpeakeasyBase));
export { ActionsListSelfHostedRunnersForRepoRequest };
var ActionsListSelfHostedRunnersForRepoResponse = /** @class */ (function (_super) {
    __extends(ActionsListSelfHostedRunnersForRepoResponse, _super);
    function ActionsListSelfHostedRunnersForRepoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActionsListSelfHostedRunnersForRepoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ActionsListSelfHostedRunnersForRepoResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActionsListSelfHostedRunnersForRepoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListSelfHostedRunnersForRepo200ApplicationJson)
    ], ActionsListSelfHostedRunnersForRepoResponse.prototype, "actionsListSelfHostedRunnersForRepo200ApplicationJsonObject", void 0);
    return ActionsListSelfHostedRunnersForRepoResponse;
}(SpeakeasyBase));
export { ActionsListSelfHostedRunnersForRepoResponse };
