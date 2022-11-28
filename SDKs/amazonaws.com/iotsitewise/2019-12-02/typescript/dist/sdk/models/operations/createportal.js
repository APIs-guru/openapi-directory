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
var CreatePortalHeaders = /** @class */ (function (_super) {
    __extends(CreatePortalHeaders, _super);
    function CreatePortalHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreatePortalHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreatePortalHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreatePortalHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreatePortalHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreatePortalHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreatePortalHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreatePortalHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreatePortalHeaders;
}(SpeakeasyBase));
export { CreatePortalHeaders };
// CreatePortalRequestBodyAlarms
/**
 * Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.
**/
var CreatePortalRequestBodyAlarms = /** @class */ (function (_super) {
    __extends(CreatePortalRequestBodyAlarms, _super);
    function CreatePortalRequestBodyAlarms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alarmRoleArn" }),
        __metadata("design:type", String)
    ], CreatePortalRequestBodyAlarms.prototype, "alarmRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationLambdaArn" }),
        __metadata("design:type", String)
    ], CreatePortalRequestBodyAlarms.prototype, "notificationLambdaArn", void 0);
    return CreatePortalRequestBodyAlarms;
}(SpeakeasyBase));
export { CreatePortalRequestBodyAlarms };
export var CreatePortalRequestBodyPortalAuthModeEnum;
(function (CreatePortalRequestBodyPortalAuthModeEnum) {
    CreatePortalRequestBodyPortalAuthModeEnum["Iam"] = "IAM";
    CreatePortalRequestBodyPortalAuthModeEnum["Sso"] = "SSO";
})(CreatePortalRequestBodyPortalAuthModeEnum || (CreatePortalRequestBodyPortalAuthModeEnum = {}));
// CreatePortalRequestBodyPortalLogoImageFile
/**
 * Contains an image file.
**/
var CreatePortalRequestBodyPortalLogoImageFile = /** @class */ (function (_super) {
    __extends(CreatePortalRequestBodyPortalLogoImageFile, _super);
    function CreatePortalRequestBodyPortalLogoImageFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], CreatePortalRequestBodyPortalLogoImageFile.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreatePortalRequestBodyPortalLogoImageFile.prototype, "type", void 0);
    return CreatePortalRequestBodyPortalLogoImageFile;
}(SpeakeasyBase));
export { CreatePortalRequestBodyPortalLogoImageFile };
var CreatePortalRequestBody = /** @class */ (function (_super) {
    __extends(CreatePortalRequestBody, _super);
    function CreatePortalRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alarms" }),
        __metadata("design:type", CreatePortalRequestBodyAlarms)
    ], CreatePortalRequestBody.prototype, "alarms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreatePortalRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationSenderEmail" }),
        __metadata("design:type", String)
    ], CreatePortalRequestBody.prototype, "notificationSenderEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portalAuthMode" }),
        __metadata("design:type", String)
    ], CreatePortalRequestBody.prototype, "portalAuthMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portalContactEmail" }),
        __metadata("design:type", String)
    ], CreatePortalRequestBody.prototype, "portalContactEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portalDescription" }),
        __metadata("design:type", String)
    ], CreatePortalRequestBody.prototype, "portalDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portalLogoImageFile" }),
        __metadata("design:type", CreatePortalRequestBodyPortalLogoImageFile)
    ], CreatePortalRequestBody.prototype, "portalLogoImageFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portalName" }),
        __metadata("design:type", String)
    ], CreatePortalRequestBody.prototype, "portalName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], CreatePortalRequestBody.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreatePortalRequestBody.prototype, "tags", void 0);
    return CreatePortalRequestBody;
}(SpeakeasyBase));
export { CreatePortalRequestBody };
var CreatePortalRequest = /** @class */ (function (_super) {
    __extends(CreatePortalRequest, _super);
    function CreatePortalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePortalHeaders)
    ], CreatePortalRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreatePortalRequestBody)
    ], CreatePortalRequest.prototype, "request", void 0);
    return CreatePortalRequest;
}(SpeakeasyBase));
export { CreatePortalRequest };
var CreatePortalResponse = /** @class */ (function (_super) {
    __extends(CreatePortalResponse, _super);
    function CreatePortalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatePortalResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreatePortalResponse)
    ], CreatePortalResponse.prototype, "createPortalResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePortalResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePortalResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePortalResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePortalResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatePortalResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePortalResponse.prototype, "throttlingException", void 0);
    return CreatePortalResponse;
}(SpeakeasyBase));
export { CreatePortalResponse };
