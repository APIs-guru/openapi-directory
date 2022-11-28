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
var GroupV2GetAdminsAndFounderOfGroupPathParams = /** @class */ (function (_super) {
    __extends(GroupV2GetAdminsAndFounderOfGroupPathParams, _super);
    function GroupV2GetAdminsAndFounderOfGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", Number)
    ], GroupV2GetAdminsAndFounderOfGroupPathParams.prototype, "groupId", void 0);
    return GroupV2GetAdminsAndFounderOfGroupPathParams;
}(SpeakeasyBase));
export { GroupV2GetAdminsAndFounderOfGroupPathParams };
var GroupV2GetAdminsAndFounderOfGroupQueryParams = /** @class */ (function (_super) {
    __extends(GroupV2GetAdminsAndFounderOfGroupQueryParams, _super);
    function GroupV2GetAdminsAndFounderOfGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentpage" }),
        __metadata("design:type", Number)
    ], GroupV2GetAdminsAndFounderOfGroupQueryParams.prototype, "currentpage", void 0);
    return GroupV2GetAdminsAndFounderOfGroupQueryParams;
}(SpeakeasyBase));
export { GroupV2GetAdminsAndFounderOfGroupQueryParams };
var GroupV2GetAdminsAndFounderOfGroupRequest = /** @class */ (function (_super) {
    __extends(GroupV2GetAdminsAndFounderOfGroupRequest, _super);
    function GroupV2GetAdminsAndFounderOfGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupV2GetAdminsAndFounderOfGroupPathParams)
    ], GroupV2GetAdminsAndFounderOfGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupV2GetAdminsAndFounderOfGroupQueryParams)
    ], GroupV2GetAdminsAndFounderOfGroupRequest.prototype, "queryParams", void 0);
    return GroupV2GetAdminsAndFounderOfGroupRequest;
}(SpeakeasyBase));
export { GroupV2GetAdminsAndFounderOfGroupRequest };
var GroupV2GetAdminsAndFounderOfGroupResponse = /** @class */ (function (_super) {
    __extends(GroupV2GetAdminsAndFounderOfGroupResponse, _super);
    function GroupV2GetAdminsAndFounderOfGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GroupV2GetAdminsAndFounderOfGroupResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupV2GetAdminsAndFounderOfGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupV2GetAdminsAndFounderOfGroupResponse.prototype, "statusCode", void 0);
    return GroupV2GetAdminsAndFounderOfGroupResponse;
}(SpeakeasyBase));
export { GroupV2GetAdminsAndFounderOfGroupResponse };
