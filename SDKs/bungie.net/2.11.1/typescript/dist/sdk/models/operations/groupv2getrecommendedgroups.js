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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GroupV2GetRecommendedGroupsPathParams = /** @class */ (function (_super) {
    __extends(GroupV2GetRecommendedGroupsPathParams, _super);
    function GroupV2GetRecommendedGroupsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=createDateRange" }),
        __metadata("design:type", Number)
    ], GroupV2GetRecommendedGroupsPathParams.prototype, "createDateRange", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=groupType" }),
        __metadata("design:type", Number)
    ], GroupV2GetRecommendedGroupsPathParams.prototype, "groupType", void 0);
    return GroupV2GetRecommendedGroupsPathParams;
}(SpeakeasyBase));
export { GroupV2GetRecommendedGroupsPathParams };
var GroupV2GetRecommendedGroupsSecurity = /** @class */ (function (_super) {
    __extends(GroupV2GetRecommendedGroupsSecurity, _super);
    function GroupV2GetRecommendedGroupsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GroupV2GetRecommendedGroupsSecurity.prototype, "oauth2", void 0);
    return GroupV2GetRecommendedGroupsSecurity;
}(SpeakeasyBase));
export { GroupV2GetRecommendedGroupsSecurity };
var GroupV2GetRecommendedGroupsRequest = /** @class */ (function (_super) {
    __extends(GroupV2GetRecommendedGroupsRequest, _super);
    function GroupV2GetRecommendedGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GroupV2GetRecommendedGroupsPathParams)
    ], GroupV2GetRecommendedGroupsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GroupV2GetRecommendedGroupsSecurity)
    ], GroupV2GetRecommendedGroupsRequest.prototype, "security", void 0);
    return GroupV2GetRecommendedGroupsRequest;
}(SpeakeasyBase));
export { GroupV2GetRecommendedGroupsRequest };
var GroupV2GetRecommendedGroupsResponse = /** @class */ (function (_super) {
    __extends(GroupV2GetRecommendedGroupsResponse, _super);
    function GroupV2GetRecommendedGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GroupV2GetRecommendedGroupsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GroupV2GetRecommendedGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GroupV2GetRecommendedGroupsResponse.prototype, "statusCode", void 0);
    return GroupV2GetRecommendedGroupsResponse;
}(SpeakeasyBase));
export { GroupV2GetRecommendedGroupsResponse };
