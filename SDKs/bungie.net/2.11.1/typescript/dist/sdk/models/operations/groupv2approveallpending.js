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
var GroupV2ApproveAllPendingPathParams = /** @class */ (function (_super) {
    __extends(GroupV2ApproveAllPendingPathParams, _super);
    function GroupV2ApproveAllPendingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", Number)
    ], GroupV2ApproveAllPendingPathParams.prototype, "groupId", void 0);
    return GroupV2ApproveAllPendingPathParams;
}(SpeakeasyBase));
export { GroupV2ApproveAllPendingPathParams };
var GroupV2ApproveAllPendingSecurity = /** @class */ (function (_super) {
    __extends(GroupV2ApproveAllPendingSecurity, _super);
    function GroupV2ApproveAllPendingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GroupV2ApproveAllPendingSecurity.prototype, "oauth2", void 0);
    return GroupV2ApproveAllPendingSecurity;
}(SpeakeasyBase));
export { GroupV2ApproveAllPendingSecurity };
var GroupV2ApproveAllPendingRequest = /** @class */ (function (_super) {
    __extends(GroupV2ApproveAllPendingRequest, _super);
    function GroupV2ApproveAllPendingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupV2ApproveAllPendingPathParams)
    ], GroupV2ApproveAllPendingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupV2ApproveAllPendingSecurity)
    ], GroupV2ApproveAllPendingRequest.prototype, "security", void 0);
    return GroupV2ApproveAllPendingRequest;
}(SpeakeasyBase));
export { GroupV2ApproveAllPendingRequest };
var GroupV2ApproveAllPendingResponse = /** @class */ (function (_super) {
    __extends(GroupV2ApproveAllPendingResponse, _super);
    function GroupV2ApproveAllPendingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GroupV2ApproveAllPendingResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupV2ApproveAllPendingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupV2ApproveAllPendingResponse.prototype, "statusCode", void 0);
    return GroupV2ApproveAllPendingResponse;
}(SpeakeasyBase));
export { GroupV2ApproveAllPendingResponse };
