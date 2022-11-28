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
var ReposRemoveUserAccessRestrictionsPathParams = /** @class */ (function (_super) {
    __extends(ReposRemoveUserAccessRestrictionsPathParams, _super);
    function ReposRemoveUserAccessRestrictionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" }),
        __metadata("design:type", String)
    ], ReposRemoveUserAccessRestrictionsPathParams.prototype, "branch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposRemoveUserAccessRestrictionsPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposRemoveUserAccessRestrictionsPathParams.prototype, "repo", void 0);
    return ReposRemoveUserAccessRestrictionsPathParams;
}(SpeakeasyBase));
export { ReposRemoveUserAccessRestrictionsPathParams };
var ReposRemoveUserAccessRestrictionsRequestBody = /** @class */ (function (_super) {
    __extends(ReposRemoveUserAccessRestrictionsRequestBody, _super);
    function ReposRemoveUserAccessRestrictionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users" }),
        __metadata("design:type", Array)
    ], ReposRemoveUserAccessRestrictionsRequestBody.prototype, "users", void 0);
    return ReposRemoveUserAccessRestrictionsRequestBody;
}(SpeakeasyBase));
export { ReposRemoveUserAccessRestrictionsRequestBody };
var ReposRemoveUserAccessRestrictionsRequest = /** @class */ (function (_super) {
    __extends(ReposRemoveUserAccessRestrictionsRequest, _super);
    function ReposRemoveUserAccessRestrictionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposRemoveUserAccessRestrictionsPathParams)
    ], ReposRemoveUserAccessRestrictionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposRemoveUserAccessRestrictionsRequestBody)
    ], ReposRemoveUserAccessRestrictionsRequest.prototype, "request", void 0);
    return ReposRemoveUserAccessRestrictionsRequest;
}(SpeakeasyBase));
export { ReposRemoveUserAccessRestrictionsRequest };
var ReposRemoveUserAccessRestrictionsResponse = /** @class */ (function (_super) {
    __extends(ReposRemoveUserAccessRestrictionsResponse, _super);
    function ReposRemoveUserAccessRestrictionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposRemoveUserAccessRestrictionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposRemoveUserAccessRestrictionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.SimpleUser }),
        __metadata("design:type", Array)
    ], ReposRemoveUserAccessRestrictionsResponse.prototype, "simpleUsers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReposRemoveUserAccessRestrictionsResponse.prototype, "validationError", void 0);
    return ReposRemoveUserAccessRestrictionsResponse;
}(SpeakeasyBase));
export { ReposRemoveUserAccessRestrictionsResponse };
