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
var TeamsListDiscussionsInOrgPathParams = /** @class */ (function (_super) {
    __extends(TeamsListDiscussionsInOrgPathParams, _super);
    function TeamsListDiscussionsInOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], TeamsListDiscussionsInOrgPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" }),
        __metadata("design:type", String)
    ], TeamsListDiscussionsInOrgPathParams.prototype, "teamSlug", void 0);
    return TeamsListDiscussionsInOrgPathParams;
}(SpeakeasyBase));
export { TeamsListDiscussionsInOrgPathParams };
var TeamsListDiscussionsInOrgQueryParams = /** @class */ (function (_super) {
    __extends(TeamsListDiscussionsInOrgQueryParams, _super);
    function TeamsListDiscussionsInOrgQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], TeamsListDiscussionsInOrgQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], TeamsListDiscussionsInOrgQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], TeamsListDiscussionsInOrgQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pinned" }),
        __metadata("design:type", String)
    ], TeamsListDiscussionsInOrgQueryParams.prototype, "pinned", void 0);
    return TeamsListDiscussionsInOrgQueryParams;
}(SpeakeasyBase));
export { TeamsListDiscussionsInOrgQueryParams };
var TeamsListDiscussionsInOrgRequest = /** @class */ (function (_super) {
    __extends(TeamsListDiscussionsInOrgRequest, _super);
    function TeamsListDiscussionsInOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListDiscussionsInOrgPathParams)
    ], TeamsListDiscussionsInOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListDiscussionsInOrgQueryParams)
    ], TeamsListDiscussionsInOrgRequest.prototype, "queryParams", void 0);
    return TeamsListDiscussionsInOrgRequest;
}(SpeakeasyBase));
export { TeamsListDiscussionsInOrgRequest };
var TeamsListDiscussionsInOrgResponse = /** @class */ (function (_super) {
    __extends(TeamsListDiscussionsInOrgResponse, _super);
    function TeamsListDiscussionsInOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsListDiscussionsInOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], TeamsListDiscussionsInOrgResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsListDiscussionsInOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TeamDiscussion }),
        __metadata("design:type", Array)
    ], TeamsListDiscussionsInOrgResponse.prototype, "teamDiscussions", void 0);
    return TeamsListDiscussionsInOrgResponse;
}(SpeakeasyBase));
export { TeamsListDiscussionsInOrgResponse };
