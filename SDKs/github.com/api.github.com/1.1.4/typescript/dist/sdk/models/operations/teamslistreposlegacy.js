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
var TeamsListReposLegacyPathParams = /** @class */ (function (_super) {
    __extends(TeamsListReposLegacyPathParams, _super);
    function TeamsListReposLegacyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], TeamsListReposLegacyPathParams.prototype, "teamId", void 0);
    return TeamsListReposLegacyPathParams;
}(SpeakeasyBase));
export { TeamsListReposLegacyPathParams };
var TeamsListReposLegacyQueryParams = /** @class */ (function (_super) {
    __extends(TeamsListReposLegacyQueryParams, _super);
    function TeamsListReposLegacyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], TeamsListReposLegacyQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], TeamsListReposLegacyQueryParams.prototype, "perPage", void 0);
    return TeamsListReposLegacyQueryParams;
}(SpeakeasyBase));
export { TeamsListReposLegacyQueryParams };
var TeamsListReposLegacyRequest = /** @class */ (function (_super) {
    __extends(TeamsListReposLegacyRequest, _super);
    function TeamsListReposLegacyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListReposLegacyPathParams)
    ], TeamsListReposLegacyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListReposLegacyQueryParams)
    ], TeamsListReposLegacyRequest.prototype, "queryParams", void 0);
    return TeamsListReposLegacyRequest;
}(SpeakeasyBase));
export { TeamsListReposLegacyRequest };
var TeamsListReposLegacyResponse = /** @class */ (function (_super) {
    __extends(TeamsListReposLegacyResponse, _super);
    function TeamsListReposLegacyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsListReposLegacyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], TeamsListReposLegacyResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsListReposLegacyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], TeamsListReposLegacyResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.MinimalRepository }),
        __metadata("design:type", Array)
    ], TeamsListReposLegacyResponse.prototype, "minimalRepositories", void 0);
    return TeamsListReposLegacyResponse;
}(SpeakeasyBase));
export { TeamsListReposLegacyResponse };
