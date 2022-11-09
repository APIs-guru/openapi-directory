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
var GroupV2GetMembersOfGroupPathParams = /** @class */ (function (_super) {
    __extends(GroupV2GetMembersOfGroupPathParams, _super);
    function GroupV2GetMembersOfGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", Number)
    ], GroupV2GetMembersOfGroupPathParams.prototype, "groupId", void 0);
    return GroupV2GetMembersOfGroupPathParams;
}(SpeakeasyBase));
export { GroupV2GetMembersOfGroupPathParams };
var GroupV2GetMembersOfGroupQueryParams = /** @class */ (function (_super) {
    __extends(GroupV2GetMembersOfGroupQueryParams, _super);
    function GroupV2GetMembersOfGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=currentpage" }),
        __metadata("design:type", Number)
    ], GroupV2GetMembersOfGroupQueryParams.prototype, "currentpage", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=memberType" }),
        __metadata("design:type", Number)
    ], GroupV2GetMembersOfGroupQueryParams.prototype, "memberType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nameSearch" }),
        __metadata("design:type", String)
    ], GroupV2GetMembersOfGroupQueryParams.prototype, "nameSearch", void 0);
    return GroupV2GetMembersOfGroupQueryParams;
}(SpeakeasyBase));
export { GroupV2GetMembersOfGroupQueryParams };
var GroupV2GetMembersOfGroupRequest = /** @class */ (function (_super) {
    __extends(GroupV2GetMembersOfGroupRequest, _super);
    function GroupV2GetMembersOfGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GroupV2GetMembersOfGroupPathParams)
    ], GroupV2GetMembersOfGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GroupV2GetMembersOfGroupQueryParams)
    ], GroupV2GetMembersOfGroupRequest.prototype, "queryParams", void 0);
    return GroupV2GetMembersOfGroupRequest;
}(SpeakeasyBase));
export { GroupV2GetMembersOfGroupRequest };
var GroupV2GetMembersOfGroupResponse = /** @class */ (function (_super) {
    __extends(GroupV2GetMembersOfGroupResponse, _super);
    function GroupV2GetMembersOfGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GroupV2GetMembersOfGroupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GroupV2GetMembersOfGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GroupV2GetMembersOfGroupResponse.prototype, "statusCode", void 0);
    return GroupV2GetMembersOfGroupResponse;
}(SpeakeasyBase));
export { GroupV2GetMembersOfGroupResponse };
