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
var ReposAddTeamAccessRestrictionsPathParams = /** @class */ (function (_super) {
    __extends(ReposAddTeamAccessRestrictionsPathParams, _super);
    function ReposAddTeamAccessRestrictionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" }),
        __metadata("design:type", String)
    ], ReposAddTeamAccessRestrictionsPathParams.prototype, "branch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposAddTeamAccessRestrictionsPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposAddTeamAccessRestrictionsPathParams.prototype, "repo", void 0);
    return ReposAddTeamAccessRestrictionsPathParams;
}(SpeakeasyBase));
export { ReposAddTeamAccessRestrictionsPathParams };
var ReposAddTeamAccessRestrictionsRequestBody = /** @class */ (function (_super) {
    __extends(ReposAddTeamAccessRestrictionsRequestBody, _super);
    function ReposAddTeamAccessRestrictionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams" }),
        __metadata("design:type", Array)
    ], ReposAddTeamAccessRestrictionsRequestBody.prototype, "teams", void 0);
    return ReposAddTeamAccessRestrictionsRequestBody;
}(SpeakeasyBase));
export { ReposAddTeamAccessRestrictionsRequestBody };
var ReposAddTeamAccessRestrictionsRequest = /** @class */ (function (_super) {
    __extends(ReposAddTeamAccessRestrictionsRequest, _super);
    function ReposAddTeamAccessRestrictionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposAddTeamAccessRestrictionsPathParams)
    ], ReposAddTeamAccessRestrictionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposAddTeamAccessRestrictionsRequestBody)
    ], ReposAddTeamAccessRestrictionsRequest.prototype, "request", void 0);
    return ReposAddTeamAccessRestrictionsRequest;
}(SpeakeasyBase));
export { ReposAddTeamAccessRestrictionsRequest };
var ReposAddTeamAccessRestrictionsResponse = /** @class */ (function (_super) {
    __extends(ReposAddTeamAccessRestrictionsResponse, _super);
    function ReposAddTeamAccessRestrictionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposAddTeamAccessRestrictionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposAddTeamAccessRestrictionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Team }),
        __metadata("design:type", Array)
    ], ReposAddTeamAccessRestrictionsResponse.prototype, "teams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReposAddTeamAccessRestrictionsResponse.prototype, "validationError", void 0);
    return ReposAddTeamAccessRestrictionsResponse;
}(SpeakeasyBase));
export { ReposAddTeamAccessRestrictionsResponse };
