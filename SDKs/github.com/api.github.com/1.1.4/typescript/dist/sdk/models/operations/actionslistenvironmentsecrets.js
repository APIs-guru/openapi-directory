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
var ActionsListEnvironmentSecretsPathParams = /** @class */ (function (_super) {
    __extends(ActionsListEnvironmentSecretsPathParams, _super);
    function ActionsListEnvironmentSecretsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environment_name" }),
        __metadata("design:type", String)
    ], ActionsListEnvironmentSecretsPathParams.prototype, "environmentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_id" }),
        __metadata("design:type", Number)
    ], ActionsListEnvironmentSecretsPathParams.prototype, "repositoryId", void 0);
    return ActionsListEnvironmentSecretsPathParams;
}(SpeakeasyBase));
export { ActionsListEnvironmentSecretsPathParams };
var ActionsListEnvironmentSecretsQueryParams = /** @class */ (function (_super) {
    __extends(ActionsListEnvironmentSecretsQueryParams, _super);
    function ActionsListEnvironmentSecretsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ActionsListEnvironmentSecretsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ActionsListEnvironmentSecretsQueryParams.prototype, "perPage", void 0);
    return ActionsListEnvironmentSecretsQueryParams;
}(SpeakeasyBase));
export { ActionsListEnvironmentSecretsQueryParams };
var ActionsListEnvironmentSecrets200ApplicationJson = /** @class */ (function (_super) {
    __extends(ActionsListEnvironmentSecrets200ApplicationJson, _super);
    function ActionsListEnvironmentSecrets200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secrets", elemType: shared.ActionsSecret }),
        __metadata("design:type", Array)
    ], ActionsListEnvironmentSecrets200ApplicationJson.prototype, "secrets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], ActionsListEnvironmentSecrets200ApplicationJson.prototype, "totalCount", void 0);
    return ActionsListEnvironmentSecrets200ApplicationJson;
}(SpeakeasyBase));
export { ActionsListEnvironmentSecrets200ApplicationJson };
var ActionsListEnvironmentSecretsRequest = /** @class */ (function (_super) {
    __extends(ActionsListEnvironmentSecretsRequest, _super);
    function ActionsListEnvironmentSecretsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListEnvironmentSecretsPathParams)
    ], ActionsListEnvironmentSecretsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListEnvironmentSecretsQueryParams)
    ], ActionsListEnvironmentSecretsRequest.prototype, "queryParams", void 0);
    return ActionsListEnvironmentSecretsRequest;
}(SpeakeasyBase));
export { ActionsListEnvironmentSecretsRequest };
var ActionsListEnvironmentSecretsResponse = /** @class */ (function (_super) {
    __extends(ActionsListEnvironmentSecretsResponse, _super);
    function ActionsListEnvironmentSecretsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActionsListEnvironmentSecretsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ActionsListEnvironmentSecretsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActionsListEnvironmentSecretsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListEnvironmentSecrets200ApplicationJson)
    ], ActionsListEnvironmentSecretsResponse.prototype, "actionsListEnvironmentSecrets200ApplicationJsonObject", void 0);
    return ActionsListEnvironmentSecretsResponse;
}(SpeakeasyBase));
export { ActionsListEnvironmentSecretsResponse };
