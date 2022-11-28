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
var ActionsSetSelfHostedRunnersInGroupForOrgPathParams = /** @class */ (function (_super) {
    __extends(ActionsSetSelfHostedRunnersInGroupForOrgPathParams, _super);
    function ActionsSetSelfHostedRunnersInGroupForOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ActionsSetSelfHostedRunnersInGroupForOrgPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" }),
        __metadata("design:type", Number)
    ], ActionsSetSelfHostedRunnersInGroupForOrgPathParams.prototype, "runnerGroupId", void 0);
    return ActionsSetSelfHostedRunnersInGroupForOrgPathParams;
}(SpeakeasyBase));
export { ActionsSetSelfHostedRunnersInGroupForOrgPathParams };
var ActionsSetSelfHostedRunnersInGroupForOrgRequestBody = /** @class */ (function (_super) {
    __extends(ActionsSetSelfHostedRunnersInGroupForOrgRequestBody, _super);
    function ActionsSetSelfHostedRunnersInGroupForOrgRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runners" }),
        __metadata("design:type", Array)
    ], ActionsSetSelfHostedRunnersInGroupForOrgRequestBody.prototype, "runners", void 0);
    return ActionsSetSelfHostedRunnersInGroupForOrgRequestBody;
}(SpeakeasyBase));
export { ActionsSetSelfHostedRunnersInGroupForOrgRequestBody };
var ActionsSetSelfHostedRunnersInGroupForOrgRequest = /** @class */ (function (_super) {
    __extends(ActionsSetSelfHostedRunnersInGroupForOrgRequest, _super);
    function ActionsSetSelfHostedRunnersInGroupForOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsSetSelfHostedRunnersInGroupForOrgPathParams)
    ], ActionsSetSelfHostedRunnersInGroupForOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ActionsSetSelfHostedRunnersInGroupForOrgRequestBody)
    ], ActionsSetSelfHostedRunnersInGroupForOrgRequest.prototype, "request", void 0);
    return ActionsSetSelfHostedRunnersInGroupForOrgRequest;
}(SpeakeasyBase));
export { ActionsSetSelfHostedRunnersInGroupForOrgRequest };
var ActionsSetSelfHostedRunnersInGroupForOrgResponse = /** @class */ (function (_super) {
    __extends(ActionsSetSelfHostedRunnersInGroupForOrgResponse, _super);
    function ActionsSetSelfHostedRunnersInGroupForOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActionsSetSelfHostedRunnersInGroupForOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActionsSetSelfHostedRunnersInGroupForOrgResponse.prototype, "statusCode", void 0);
    return ActionsSetSelfHostedRunnersInGroupForOrgResponse;
}(SpeakeasyBase));
export { ActionsSetSelfHostedRunnersInGroupForOrgResponse };
