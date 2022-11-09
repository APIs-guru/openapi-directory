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
var GroupV2RecoverGroupForFounderPathParams = /** @class */ (function (_super) {
    __extends(GroupV2RecoverGroupForFounderPathParams, _super);
    function GroupV2RecoverGroupForFounderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=groupType" }),
        __metadata("design:type", Number)
    ], GroupV2RecoverGroupForFounderPathParams.prototype, "groupType", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=membershipId" }),
        __metadata("design:type", Number)
    ], GroupV2RecoverGroupForFounderPathParams.prototype, "membershipId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" }),
        __metadata("design:type", Number)
    ], GroupV2RecoverGroupForFounderPathParams.prototype, "membershipType", void 0);
    return GroupV2RecoverGroupForFounderPathParams;
}(SpeakeasyBase));
export { GroupV2RecoverGroupForFounderPathParams };
var GroupV2RecoverGroupForFounderRequest = /** @class */ (function (_super) {
    __extends(GroupV2RecoverGroupForFounderRequest, _super);
    function GroupV2RecoverGroupForFounderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GroupV2RecoverGroupForFounderPathParams)
    ], GroupV2RecoverGroupForFounderRequest.prototype, "pathParams", void 0);
    return GroupV2RecoverGroupForFounderRequest;
}(SpeakeasyBase));
export { GroupV2RecoverGroupForFounderRequest };
var GroupV2RecoverGroupForFounderResponse = /** @class */ (function (_super) {
    __extends(GroupV2RecoverGroupForFounderResponse, _super);
    function GroupV2RecoverGroupForFounderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GroupV2RecoverGroupForFounderResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GroupV2RecoverGroupForFounderResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GroupV2RecoverGroupForFounderResponse.prototype, "statusCode", void 0);
    return GroupV2RecoverGroupForFounderResponse;
}(SpeakeasyBase));
export { GroupV2RecoverGroupForFounderResponse };
