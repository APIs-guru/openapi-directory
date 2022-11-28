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
var ReposListDeploymentStatusesPathParams = /** @class */ (function (_super) {
    __extends(ReposListDeploymentStatusesPathParams, _super);
    function ReposListDeploymentStatusesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deployment_id" }),
        __metadata("design:type", Number)
    ], ReposListDeploymentStatusesPathParams.prototype, "deploymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposListDeploymentStatusesPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposListDeploymentStatusesPathParams.prototype, "repo", void 0);
    return ReposListDeploymentStatusesPathParams;
}(SpeakeasyBase));
export { ReposListDeploymentStatusesPathParams };
var ReposListDeploymentStatusesQueryParams = /** @class */ (function (_super) {
    __extends(ReposListDeploymentStatusesQueryParams, _super);
    function ReposListDeploymentStatusesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ReposListDeploymentStatusesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ReposListDeploymentStatusesQueryParams.prototype, "perPage", void 0);
    return ReposListDeploymentStatusesQueryParams;
}(SpeakeasyBase));
export { ReposListDeploymentStatusesQueryParams };
var ReposListDeploymentStatusesRequest = /** @class */ (function (_super) {
    __extends(ReposListDeploymentStatusesRequest, _super);
    function ReposListDeploymentStatusesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListDeploymentStatusesPathParams)
    ], ReposListDeploymentStatusesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListDeploymentStatusesQueryParams)
    ], ReposListDeploymentStatusesRequest.prototype, "queryParams", void 0);
    return ReposListDeploymentStatusesRequest;
}(SpeakeasyBase));
export { ReposListDeploymentStatusesRequest };
var ReposListDeploymentStatusesResponse = /** @class */ (function (_super) {
    __extends(ReposListDeploymentStatusesResponse, _super);
    function ReposListDeploymentStatusesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposListDeploymentStatusesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReposListDeploymentStatusesResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposListDeploymentStatusesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReposListDeploymentStatusesResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.DeploymentStatus }),
        __metadata("design:type", Array)
    ], ReposListDeploymentStatusesResponse.prototype, "deploymentStatuses", void 0);
    return ReposListDeploymentStatusesResponse;
}(SpeakeasyBase));
export { ReposListDeploymentStatusesResponse };
