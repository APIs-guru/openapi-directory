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
var ActionsListOrgSecretsPathParams = /** @class */ (function (_super) {
    __extends(ActionsListOrgSecretsPathParams, _super);
    function ActionsListOrgSecretsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ActionsListOrgSecretsPathParams.prototype, "org", void 0);
    return ActionsListOrgSecretsPathParams;
}(SpeakeasyBase));
export { ActionsListOrgSecretsPathParams };
var ActionsListOrgSecretsQueryParams = /** @class */ (function (_super) {
    __extends(ActionsListOrgSecretsQueryParams, _super);
    function ActionsListOrgSecretsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ActionsListOrgSecretsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ActionsListOrgSecretsQueryParams.prototype, "perPage", void 0);
    return ActionsListOrgSecretsQueryParams;
}(SpeakeasyBase));
export { ActionsListOrgSecretsQueryParams };
var ActionsListOrgSecrets200ApplicationJson = /** @class */ (function (_super) {
    __extends(ActionsListOrgSecrets200ApplicationJson, _super);
    function ActionsListOrgSecrets200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secrets", elemType: shared.OrganizationActionsSecret }),
        __metadata("design:type", Array)
    ], ActionsListOrgSecrets200ApplicationJson.prototype, "secrets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], ActionsListOrgSecrets200ApplicationJson.prototype, "totalCount", void 0);
    return ActionsListOrgSecrets200ApplicationJson;
}(SpeakeasyBase));
export { ActionsListOrgSecrets200ApplicationJson };
var ActionsListOrgSecretsRequest = /** @class */ (function (_super) {
    __extends(ActionsListOrgSecretsRequest, _super);
    function ActionsListOrgSecretsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListOrgSecretsPathParams)
    ], ActionsListOrgSecretsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListOrgSecretsQueryParams)
    ], ActionsListOrgSecretsRequest.prototype, "queryParams", void 0);
    return ActionsListOrgSecretsRequest;
}(SpeakeasyBase));
export { ActionsListOrgSecretsRequest };
var ActionsListOrgSecretsResponse = /** @class */ (function (_super) {
    __extends(ActionsListOrgSecretsResponse, _super);
    function ActionsListOrgSecretsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActionsListOrgSecretsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ActionsListOrgSecretsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActionsListOrgSecretsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListOrgSecrets200ApplicationJson)
    ], ActionsListOrgSecretsResponse.prototype, "actionsListOrgSecrets200ApplicationJsonObject", void 0);
    return ActionsListOrgSecretsResponse;
}(SpeakeasyBase));
export { ActionsListOrgSecretsResponse };
