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
var GroupV2GetPotentialGroupsForMemberPathParams = /** @class */ (function (_super) {
    __extends(GroupV2GetPotentialGroupsForMemberPathParams, _super);
    function GroupV2GetPotentialGroupsForMemberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=filter" }),
        __metadata("design:type", Number)
    ], GroupV2GetPotentialGroupsForMemberPathParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=groupType" }),
        __metadata("design:type", Number)
    ], GroupV2GetPotentialGroupsForMemberPathParams.prototype, "groupType", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=membershipId" }),
        __metadata("design:type", Number)
    ], GroupV2GetPotentialGroupsForMemberPathParams.prototype, "membershipId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" }),
        __metadata("design:type", Number)
    ], GroupV2GetPotentialGroupsForMemberPathParams.prototype, "membershipType", void 0);
    return GroupV2GetPotentialGroupsForMemberPathParams;
}(SpeakeasyBase));
export { GroupV2GetPotentialGroupsForMemberPathParams };
var GroupV2GetPotentialGroupsForMemberRequest = /** @class */ (function (_super) {
    __extends(GroupV2GetPotentialGroupsForMemberRequest, _super);
    function GroupV2GetPotentialGroupsForMemberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GroupV2GetPotentialGroupsForMemberPathParams)
    ], GroupV2GetPotentialGroupsForMemberRequest.prototype, "pathParams", void 0);
    return GroupV2GetPotentialGroupsForMemberRequest;
}(SpeakeasyBase));
export { GroupV2GetPotentialGroupsForMemberRequest };
var GroupV2GetPotentialGroupsForMemberResponse = /** @class */ (function (_super) {
    __extends(GroupV2GetPotentialGroupsForMemberResponse, _super);
    function GroupV2GetPotentialGroupsForMemberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GroupV2GetPotentialGroupsForMemberResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GroupV2GetPotentialGroupsForMemberResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GroupV2GetPotentialGroupsForMemberResponse.prototype, "statusCode", void 0);
    return GroupV2GetPotentialGroupsForMemberResponse;
}(SpeakeasyBase));
export { GroupV2GetPotentialGroupsForMemberResponse };
