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
var CreateGroupHeaders = /** @class */ (function (_super) {
    __extends(CreateGroupHeaders, _super);
    function CreateGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateGroupHeaders;
}(SpeakeasyBase));
export { CreateGroupHeaders };
// CreateGroupRequestBodyInsightsConfiguration
/**
 * The structure containing configurations related to insights.
**/
var CreateGroupRequestBodyInsightsConfiguration = /** @class */ (function (_super) {
    __extends(CreateGroupRequestBodyInsightsConfiguration, _super);
    function CreateGroupRequestBodyInsightsConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InsightsEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateGroupRequestBodyInsightsConfiguration.prototype, "insightsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotificationsEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateGroupRequestBodyInsightsConfiguration.prototype, "notificationsEnabled", void 0);
    return CreateGroupRequestBodyInsightsConfiguration;
}(SpeakeasyBase));
export { CreateGroupRequestBodyInsightsConfiguration };
var CreateGroupRequestBody = /** @class */ (function (_super) {
    __extends(CreateGroupRequestBody, _super);
    function CreateGroupRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FilterExpression" }),
        __metadata("design:type", String)
    ], CreateGroupRequestBody.prototype, "filterExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GroupName" }),
        __metadata("design:type", String)
    ], CreateGroupRequestBody.prototype, "groupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InsightsConfiguration" }),
        __metadata("design:type", CreateGroupRequestBodyInsightsConfiguration)
    ], CreateGroupRequestBody.prototype, "insightsConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateGroupRequestBody.prototype, "tags", void 0);
    return CreateGroupRequestBody;
}(SpeakeasyBase));
export { CreateGroupRequestBody };
var CreateGroupRequest = /** @class */ (function (_super) {
    __extends(CreateGroupRequest, _super);
    function CreateGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroupHeaders)
    ], CreateGroupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateGroupRequestBody)
    ], CreateGroupRequest.prototype, "request", void 0);
    return CreateGroupRequest;
}(SpeakeasyBase));
export { CreateGroupRequest };
var CreateGroupResponse = /** @class */ (function (_super) {
    __extends(CreateGroupResponse, _super);
    function CreateGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateGroupResult)
    ], CreateGroupResponse.prototype, "createGroupResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateGroupResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateGroupResponse.prototype, "throttledException", void 0);
    return CreateGroupResponse;
}(SpeakeasyBase));
export { CreateGroupResponse };
