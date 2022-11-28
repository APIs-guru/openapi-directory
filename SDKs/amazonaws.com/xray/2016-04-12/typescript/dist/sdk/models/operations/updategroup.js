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
var UpdateGroupHeaders = /** @class */ (function (_super) {
    __extends(UpdateGroupHeaders, _super);
    function UpdateGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateGroupHeaders;
}(SpeakeasyBase));
export { UpdateGroupHeaders };
// UpdateGroupRequestBodyInsightsConfiguration
/**
 * The structure containing configurations related to insights.
**/
var UpdateGroupRequestBodyInsightsConfiguration = /** @class */ (function (_super) {
    __extends(UpdateGroupRequestBodyInsightsConfiguration, _super);
    function UpdateGroupRequestBodyInsightsConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InsightsEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupRequestBodyInsightsConfiguration.prototype, "insightsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotificationsEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupRequestBodyInsightsConfiguration.prototype, "notificationsEnabled", void 0);
    return UpdateGroupRequestBodyInsightsConfiguration;
}(SpeakeasyBase));
export { UpdateGroupRequestBodyInsightsConfiguration };
var UpdateGroupRequestBody = /** @class */ (function (_super) {
    __extends(UpdateGroupRequestBody, _super);
    function UpdateGroupRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FilterExpression" }),
        __metadata("design:type", String)
    ], UpdateGroupRequestBody.prototype, "filterExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GroupARN" }),
        __metadata("design:type", String)
    ], UpdateGroupRequestBody.prototype, "groupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GroupName" }),
        __metadata("design:type", String)
    ], UpdateGroupRequestBody.prototype, "groupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InsightsConfiguration" }),
        __metadata("design:type", UpdateGroupRequestBodyInsightsConfiguration)
    ], UpdateGroupRequestBody.prototype, "insightsConfiguration", void 0);
    return UpdateGroupRequestBody;
}(SpeakeasyBase));
export { UpdateGroupRequestBody };
var UpdateGroupRequest = /** @class */ (function (_super) {
    __extends(UpdateGroupRequest, _super);
    function UpdateGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGroupHeaders)
    ], UpdateGroupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateGroupRequestBody)
    ], UpdateGroupRequest.prototype, "request", void 0);
    return UpdateGroupRequest;
}(SpeakeasyBase));
export { UpdateGroupRequest };
var UpdateGroupResponse = /** @class */ (function (_super) {
    __extends(UpdateGroupResponse, _super);
    function UpdateGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGroupResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGroupResponse.prototype, "throttledException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateGroupResult)
    ], UpdateGroupResponse.prototype, "updateGroupResult", void 0);
    return UpdateGroupResponse;
}(SpeakeasyBase));
export { UpdateGroupResponse };
