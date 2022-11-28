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
var EnterpriseAdminListPreReceiveHooksForRepoPathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListPreReceiveHooksForRepoPathParams, _super);
    function EnterpriseAdminListPreReceiveHooksForRepoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], EnterpriseAdminListPreReceiveHooksForRepoPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], EnterpriseAdminListPreReceiveHooksForRepoPathParams.prototype, "repo", void 0);
    return EnterpriseAdminListPreReceiveHooksForRepoPathParams;
}(SpeakeasyBase));
export { EnterpriseAdminListPreReceiveHooksForRepoPathParams };
export var EnterpriseAdminListPreReceiveHooksForRepoSortEnum;
(function (EnterpriseAdminListPreReceiveHooksForRepoSortEnum) {
    EnterpriseAdminListPreReceiveHooksForRepoSortEnum["Created"] = "created";
    EnterpriseAdminListPreReceiveHooksForRepoSortEnum["Updated"] = "updated";
    EnterpriseAdminListPreReceiveHooksForRepoSortEnum["Name"] = "name";
})(EnterpriseAdminListPreReceiveHooksForRepoSortEnum || (EnterpriseAdminListPreReceiveHooksForRepoSortEnum = {}));
var EnterpriseAdminListPreReceiveHooksForRepoQueryParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListPreReceiveHooksForRepoQueryParams, _super);
    function EnterpriseAdminListPreReceiveHooksForRepoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], EnterpriseAdminListPreReceiveHooksForRepoQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListPreReceiveHooksForRepoQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListPreReceiveHooksForRepoQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], EnterpriseAdminListPreReceiveHooksForRepoQueryParams.prototype, "sort", void 0);
    return EnterpriseAdminListPreReceiveHooksForRepoQueryParams;
}(SpeakeasyBase));
export { EnterpriseAdminListPreReceiveHooksForRepoQueryParams };
var EnterpriseAdminListPreReceiveHooksForRepoRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListPreReceiveHooksForRepoRequest, _super);
    function EnterpriseAdminListPreReceiveHooksForRepoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminListPreReceiveHooksForRepoPathParams)
    ], EnterpriseAdminListPreReceiveHooksForRepoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminListPreReceiveHooksForRepoQueryParams)
    ], EnterpriseAdminListPreReceiveHooksForRepoRequest.prototype, "queryParams", void 0);
    return EnterpriseAdminListPreReceiveHooksForRepoRequest;
}(SpeakeasyBase));
export { EnterpriseAdminListPreReceiveHooksForRepoRequest };
var EnterpriseAdminListPreReceiveHooksForRepoResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListPreReceiveHooksForRepoResponse, _super);
    function EnterpriseAdminListPreReceiveHooksForRepoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminListPreReceiveHooksForRepoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminListPreReceiveHooksForRepoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.RepositoryPreReceiveHook }),
        __metadata("design:type", Array)
    ], EnterpriseAdminListPreReceiveHooksForRepoResponse.prototype, "repositoryPreReceiveHooks", void 0);
    return EnterpriseAdminListPreReceiveHooksForRepoResponse;
}(SpeakeasyBase));
export { EnterpriseAdminListPreReceiveHooksForRepoResponse };
