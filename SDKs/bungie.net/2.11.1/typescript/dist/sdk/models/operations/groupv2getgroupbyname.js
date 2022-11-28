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
var GroupV2GetGroupByNamePathParams = /** @class */ (function (_super) {
    __extends(GroupV2GetGroupByNamePathParams, _super);
    function GroupV2GetGroupByNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupName" }),
        __metadata("design:type", String)
    ], GroupV2GetGroupByNamePathParams.prototype, "groupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupType" }),
        __metadata("design:type", Number)
    ], GroupV2GetGroupByNamePathParams.prototype, "groupType", void 0);
    return GroupV2GetGroupByNamePathParams;
}(SpeakeasyBase));
export { GroupV2GetGroupByNamePathParams };
var GroupV2GetGroupByNameRequest = /** @class */ (function (_super) {
    __extends(GroupV2GetGroupByNameRequest, _super);
    function GroupV2GetGroupByNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupV2GetGroupByNamePathParams)
    ], GroupV2GetGroupByNameRequest.prototype, "pathParams", void 0);
    return GroupV2GetGroupByNameRequest;
}(SpeakeasyBase));
export { GroupV2GetGroupByNameRequest };
var GroupV2GetGroupByNameResponse = /** @class */ (function (_super) {
    __extends(GroupV2GetGroupByNameResponse, _super);
    function GroupV2GetGroupByNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GroupV2GetGroupByNameResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupV2GetGroupByNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupV2GetGroupByNameResponse.prototype, "statusCode", void 0);
    return GroupV2GetGroupByNameResponse;
}(SpeakeasyBase));
export { GroupV2GetGroupByNameResponse };
