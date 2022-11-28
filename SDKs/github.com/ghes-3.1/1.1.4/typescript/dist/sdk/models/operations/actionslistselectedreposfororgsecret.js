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
var ActionsListSelectedReposForOrgSecretPathParams = /** @class */ (function (_super) {
    __extends(ActionsListSelectedReposForOrgSecretPathParams, _super);
    function ActionsListSelectedReposForOrgSecretPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ActionsListSelectedReposForOrgSecretPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=secret_name" }),
        __metadata("design:type", String)
    ], ActionsListSelectedReposForOrgSecretPathParams.prototype, "secretName", void 0);
    return ActionsListSelectedReposForOrgSecretPathParams;
}(SpeakeasyBase));
export { ActionsListSelectedReposForOrgSecretPathParams };
var ActionsListSelectedReposForOrgSecretQueryParams = /** @class */ (function (_super) {
    __extends(ActionsListSelectedReposForOrgSecretQueryParams, _super);
    function ActionsListSelectedReposForOrgSecretQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ActionsListSelectedReposForOrgSecretQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ActionsListSelectedReposForOrgSecretQueryParams.prototype, "perPage", void 0);
    return ActionsListSelectedReposForOrgSecretQueryParams;
}(SpeakeasyBase));
export { ActionsListSelectedReposForOrgSecretQueryParams };
var ActionsListSelectedReposForOrgSecret200ApplicationJson = /** @class */ (function (_super) {
    __extends(ActionsListSelectedReposForOrgSecret200ApplicationJson, _super);
    function ActionsListSelectedReposForOrgSecret200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositories", elemType: shared.MinimalRepository }),
        __metadata("design:type", Array)
    ], ActionsListSelectedReposForOrgSecret200ApplicationJson.prototype, "repositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], ActionsListSelectedReposForOrgSecret200ApplicationJson.prototype, "totalCount", void 0);
    return ActionsListSelectedReposForOrgSecret200ApplicationJson;
}(SpeakeasyBase));
export { ActionsListSelectedReposForOrgSecret200ApplicationJson };
var ActionsListSelectedReposForOrgSecretRequest = /** @class */ (function (_super) {
    __extends(ActionsListSelectedReposForOrgSecretRequest, _super);
    function ActionsListSelectedReposForOrgSecretRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListSelectedReposForOrgSecretPathParams)
    ], ActionsListSelectedReposForOrgSecretRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListSelectedReposForOrgSecretQueryParams)
    ], ActionsListSelectedReposForOrgSecretRequest.prototype, "queryParams", void 0);
    return ActionsListSelectedReposForOrgSecretRequest;
}(SpeakeasyBase));
export { ActionsListSelectedReposForOrgSecretRequest };
var ActionsListSelectedReposForOrgSecretResponse = /** @class */ (function (_super) {
    __extends(ActionsListSelectedReposForOrgSecretResponse, _super);
    function ActionsListSelectedReposForOrgSecretResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActionsListSelectedReposForOrgSecretResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActionsListSelectedReposForOrgSecretResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListSelectedReposForOrgSecret200ApplicationJson)
    ], ActionsListSelectedReposForOrgSecretResponse.prototype, "actionsListSelectedReposForOrgSecret200ApplicationJsonObject", void 0);
    return ActionsListSelectedReposForOrgSecretResponse;
}(SpeakeasyBase));
export { ActionsListSelectedReposForOrgSecretResponse };
