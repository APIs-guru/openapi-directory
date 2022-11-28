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
var ReposListInvitationsPathParams = /** @class */ (function (_super) {
    __extends(ReposListInvitationsPathParams, _super);
    function ReposListInvitationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposListInvitationsPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposListInvitationsPathParams.prototype, "repo", void 0);
    return ReposListInvitationsPathParams;
}(SpeakeasyBase));
export { ReposListInvitationsPathParams };
var ReposListInvitationsQueryParams = /** @class */ (function (_super) {
    __extends(ReposListInvitationsQueryParams, _super);
    function ReposListInvitationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ReposListInvitationsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ReposListInvitationsQueryParams.prototype, "perPage", void 0);
    return ReposListInvitationsQueryParams;
}(SpeakeasyBase));
export { ReposListInvitationsQueryParams };
var ReposListInvitationsRequest = /** @class */ (function (_super) {
    __extends(ReposListInvitationsRequest, _super);
    function ReposListInvitationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListInvitationsPathParams)
    ], ReposListInvitationsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposListInvitationsQueryParams)
    ], ReposListInvitationsRequest.prototype, "queryParams", void 0);
    return ReposListInvitationsRequest;
}(SpeakeasyBase));
export { ReposListInvitationsRequest };
var ReposListInvitationsResponse = /** @class */ (function (_super) {
    __extends(ReposListInvitationsResponse, _super);
    function ReposListInvitationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposListInvitationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReposListInvitationsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposListInvitationsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.RepositoryInvitation }),
        __metadata("design:type", Array)
    ], ReposListInvitationsResponse.prototype, "repositoryInvitations", void 0);
    return ReposListInvitationsResponse;
}(SpeakeasyBase));
export { ReposListInvitationsResponse };
