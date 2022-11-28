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
var TeamsListDiscussionsPathParams = /** @class */ (function (_super) {
    __extends(TeamsListDiscussionsPathParams, _super);
    function TeamsListDiscussionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], TeamsListDiscussionsPathParams.prototype, "teamId", void 0);
    return TeamsListDiscussionsPathParams;
}(SpeakeasyBase));
export { TeamsListDiscussionsPathParams };
var TeamsListDiscussionsQueryParams = /** @class */ (function (_super) {
    __extends(TeamsListDiscussionsQueryParams, _super);
    function TeamsListDiscussionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], TeamsListDiscussionsQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], TeamsListDiscussionsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], TeamsListDiscussionsQueryParams.prototype, "perPage", void 0);
    return TeamsListDiscussionsQueryParams;
}(SpeakeasyBase));
export { TeamsListDiscussionsQueryParams };
var TeamsListDiscussionsHeaders = /** @class */ (function (_super) {
    __extends(TeamsListDiscussionsHeaders, _super);
    function TeamsListDiscussionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" }),
        __metadata("design:type", String)
    ], TeamsListDiscussionsHeaders.prototype, "accept", void 0);
    return TeamsListDiscussionsHeaders;
}(SpeakeasyBase));
export { TeamsListDiscussionsHeaders };
var TeamsListDiscussionsRequest = /** @class */ (function (_super) {
    __extends(TeamsListDiscussionsRequest, _super);
    function TeamsListDiscussionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListDiscussionsPathParams)
    ], TeamsListDiscussionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListDiscussionsQueryParams)
    ], TeamsListDiscussionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListDiscussionsHeaders)
    ], TeamsListDiscussionsRequest.prototype, "headers", void 0);
    return TeamsListDiscussionsRequest;
}(SpeakeasyBase));
export { TeamsListDiscussionsRequest };
var TeamsListDiscussionsResponse = /** @class */ (function (_super) {
    __extends(TeamsListDiscussionsResponse, _super);
    function TeamsListDiscussionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsListDiscussionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], TeamsListDiscussionsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsListDiscussionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TeamDiscussion }),
        __metadata("design:type", Array)
    ], TeamsListDiscussionsResponse.prototype, "teamDiscussions", void 0);
    return TeamsListDiscussionsResponse;
}(SpeakeasyBase));
export { TeamsListDiscussionsResponse };
