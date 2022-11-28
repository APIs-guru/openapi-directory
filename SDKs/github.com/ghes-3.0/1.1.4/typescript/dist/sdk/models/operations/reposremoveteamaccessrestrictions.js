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
var ReposRemoveTeamAccessRestrictionsPathParams = /** @class */ (function (_super) {
    __extends(ReposRemoveTeamAccessRestrictionsPathParams, _super);
    function ReposRemoveTeamAccessRestrictionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" }),
        __metadata("design:type", String)
    ], ReposRemoveTeamAccessRestrictionsPathParams.prototype, "branch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposRemoveTeamAccessRestrictionsPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposRemoveTeamAccessRestrictionsPathParams.prototype, "repo", void 0);
    return ReposRemoveTeamAccessRestrictionsPathParams;
}(SpeakeasyBase));
export { ReposRemoveTeamAccessRestrictionsPathParams };
var ReposRemoveTeamAccessRestrictionsRequestBody1 = /** @class */ (function (_super) {
    __extends(ReposRemoveTeamAccessRestrictionsRequestBody1, _super);
    function ReposRemoveTeamAccessRestrictionsRequestBody1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams" }),
        __metadata("design:type", Array)
    ], ReposRemoveTeamAccessRestrictionsRequestBody1.prototype, "teams", void 0);
    return ReposRemoveTeamAccessRestrictionsRequestBody1;
}(SpeakeasyBase));
export { ReposRemoveTeamAccessRestrictionsRequestBody1 };
var ReposRemoveTeamAccessRestrictionsRequest = /** @class */ (function (_super) {
    __extends(ReposRemoveTeamAccessRestrictionsRequest, _super);
    function ReposRemoveTeamAccessRestrictionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposRemoveTeamAccessRestrictionsPathParams)
    ], ReposRemoveTeamAccessRestrictionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], ReposRemoveTeamAccessRestrictionsRequest.prototype, "request", void 0);
    return ReposRemoveTeamAccessRestrictionsRequest;
}(SpeakeasyBase));
export { ReposRemoveTeamAccessRestrictionsRequest };
var ReposRemoveTeamAccessRestrictionsResponse = /** @class */ (function (_super) {
    __extends(ReposRemoveTeamAccessRestrictionsResponse, _super);
    function ReposRemoveTeamAccessRestrictionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposRemoveTeamAccessRestrictionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposRemoveTeamAccessRestrictionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Team }),
        __metadata("design:type", Array)
    ], ReposRemoveTeamAccessRestrictionsResponse.prototype, "teams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReposRemoveTeamAccessRestrictionsResponse.prototype, "validationError", void 0);
    return ReposRemoveTeamAccessRestrictionsResponse;
}(SpeakeasyBase));
export { ReposRemoveTeamAccessRestrictionsResponse };
