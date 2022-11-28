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
var ReposListDeploymentsPathParams = /** @class */ (function (_super) {
    __extends(ReposListDeploymentsPathParams, _super);
    function ReposListDeploymentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposListDeploymentsPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposListDeploymentsPathParams.prototype, "repo", void 0);
    return ReposListDeploymentsPathParams;
}(SpeakeasyBase));
export { ReposListDeploymentsPathParams };
var ReposListDeploymentsQueryParams = /** @class */ (function (_super) {
    __extends(ReposListDeploymentsQueryParams, _super);
    function ReposListDeploymentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=environment" }),
        __metadata("design:type", String)
    ], ReposListDeploymentsQueryParams.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ReposListDeploymentsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ReposListDeploymentsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ref" }),
        __metadata("design:type", String)
    ], ReposListDeploymentsQueryParams.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sha" }),
        __metadata("design:type", String)
    ], ReposListDeploymentsQueryParams.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=task" }),
        __metadata("design:type", String)
    ], ReposListDeploymentsQueryParams.prototype, "task", void 0);
    return ReposListDeploymentsQueryParams;
}(SpeakeasyBase));
export { ReposListDeploymentsQueryParams };
var ReposListDeploymentsRequest = /** @class */ (function (_super) {
    __extends(ReposListDeploymentsRequest, _super);
    function ReposListDeploymentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListDeploymentsPathParams)
    ], ReposListDeploymentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListDeploymentsQueryParams)
    ], ReposListDeploymentsRequest.prototype, "queryParams", void 0);
    return ReposListDeploymentsRequest;
}(SpeakeasyBase));
export { ReposListDeploymentsRequest };
var ReposListDeploymentsResponse = /** @class */ (function (_super) {
    __extends(ReposListDeploymentsResponse, _super);
    function ReposListDeploymentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposListDeploymentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReposListDeploymentsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposListDeploymentsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Deployment }),
        __metadata("design:type", Array)
    ], ReposListDeploymentsResponse.prototype, "deployments", void 0);
    return ReposListDeploymentsResponse;
}(SpeakeasyBase));
export { ReposListDeploymentsResponse };
