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
var GroupV2GetPendingMembershipsPathParams = /** @class */ (function (_super) {
    __extends(GroupV2GetPendingMembershipsPathParams, _super);
    function GroupV2GetPendingMembershipsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", Number)
    ], GroupV2GetPendingMembershipsPathParams.prototype, "groupId", void 0);
    return GroupV2GetPendingMembershipsPathParams;
}(SpeakeasyBase));
export { GroupV2GetPendingMembershipsPathParams };
var GroupV2GetPendingMembershipsQueryParams = /** @class */ (function (_super) {
    __extends(GroupV2GetPendingMembershipsQueryParams, _super);
    function GroupV2GetPendingMembershipsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=currentpage" }),
        __metadata("design:type", Number)
    ], GroupV2GetPendingMembershipsQueryParams.prototype, "currentpage", void 0);
    return GroupV2GetPendingMembershipsQueryParams;
}(SpeakeasyBase));
export { GroupV2GetPendingMembershipsQueryParams };
var GroupV2GetPendingMembershipsSecurity = /** @class */ (function (_super) {
    __extends(GroupV2GetPendingMembershipsSecurity, _super);
    function GroupV2GetPendingMembershipsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GroupV2GetPendingMembershipsSecurity.prototype, "oauth2", void 0);
    return GroupV2GetPendingMembershipsSecurity;
}(SpeakeasyBase));
export { GroupV2GetPendingMembershipsSecurity };
var GroupV2GetPendingMembershipsRequest = /** @class */ (function (_super) {
    __extends(GroupV2GetPendingMembershipsRequest, _super);
    function GroupV2GetPendingMembershipsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GroupV2GetPendingMembershipsPathParams)
    ], GroupV2GetPendingMembershipsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GroupV2GetPendingMembershipsQueryParams)
    ], GroupV2GetPendingMembershipsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GroupV2GetPendingMembershipsSecurity)
    ], GroupV2GetPendingMembershipsRequest.prototype, "security", void 0);
    return GroupV2GetPendingMembershipsRequest;
}(SpeakeasyBase));
export { GroupV2GetPendingMembershipsRequest };
var GroupV2GetPendingMembershipsResponse = /** @class */ (function (_super) {
    __extends(GroupV2GetPendingMembershipsResponse, _super);
    function GroupV2GetPendingMembershipsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GroupV2GetPendingMembershipsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GroupV2GetPendingMembershipsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GroupV2GetPendingMembershipsResponse.prototype, "statusCode", void 0);
    return GroupV2GetPendingMembershipsResponse;
}(SpeakeasyBase));
export { GroupV2GetPendingMembershipsResponse };
