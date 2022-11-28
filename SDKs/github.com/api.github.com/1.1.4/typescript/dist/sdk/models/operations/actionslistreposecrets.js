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
var ActionsListRepoSecretsPathParams = /** @class */ (function (_super) {
    __extends(ActionsListRepoSecretsPathParams, _super);
    function ActionsListRepoSecretsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ActionsListRepoSecretsPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ActionsListRepoSecretsPathParams.prototype, "repo", void 0);
    return ActionsListRepoSecretsPathParams;
}(SpeakeasyBase));
export { ActionsListRepoSecretsPathParams };
var ActionsListRepoSecretsQueryParams = /** @class */ (function (_super) {
    __extends(ActionsListRepoSecretsQueryParams, _super);
    function ActionsListRepoSecretsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ActionsListRepoSecretsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ActionsListRepoSecretsQueryParams.prototype, "perPage", void 0);
    return ActionsListRepoSecretsQueryParams;
}(SpeakeasyBase));
export { ActionsListRepoSecretsQueryParams };
var ActionsListRepoSecrets200ApplicationJson = /** @class */ (function (_super) {
    __extends(ActionsListRepoSecrets200ApplicationJson, _super);
    function ActionsListRepoSecrets200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secrets", elemType: shared.ActionsSecret }),
        __metadata("design:type", Array)
    ], ActionsListRepoSecrets200ApplicationJson.prototype, "secrets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], ActionsListRepoSecrets200ApplicationJson.prototype, "totalCount", void 0);
    return ActionsListRepoSecrets200ApplicationJson;
}(SpeakeasyBase));
export { ActionsListRepoSecrets200ApplicationJson };
var ActionsListRepoSecretsRequest = /** @class */ (function (_super) {
    __extends(ActionsListRepoSecretsRequest, _super);
    function ActionsListRepoSecretsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListRepoSecretsPathParams)
    ], ActionsListRepoSecretsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListRepoSecretsQueryParams)
    ], ActionsListRepoSecretsRequest.prototype, "queryParams", void 0);
    return ActionsListRepoSecretsRequest;
}(SpeakeasyBase));
export { ActionsListRepoSecretsRequest };
var ActionsListRepoSecretsResponse = /** @class */ (function (_super) {
    __extends(ActionsListRepoSecretsResponse, _super);
    function ActionsListRepoSecretsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActionsListRepoSecretsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ActionsListRepoSecretsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActionsListRepoSecretsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListRepoSecrets200ApplicationJson)
    ], ActionsListRepoSecretsResponse.prototype, "actionsListRepoSecrets200ApplicationJsonObject", void 0);
    return ActionsListRepoSecretsResponse;
}(SpeakeasyBase));
export { ActionsListRepoSecretsResponse };
