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
var UpdateRobotApplicationHeaders = /** @class */ (function (_super) {
    __extends(UpdateRobotApplicationHeaders, _super);
    function UpdateRobotApplicationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateRobotApplicationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateRobotApplicationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateRobotApplicationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateRobotApplicationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateRobotApplicationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateRobotApplicationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateRobotApplicationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateRobotApplicationHeaders;
}(SpeakeasyBase));
export { UpdateRobotApplicationHeaders };
// UpdateRobotApplicationRequestBodyEnvironment
/**
 * The object that contains the Docker image URI for either your robot or simulation applications.
**/
var UpdateRobotApplicationRequestBodyEnvironment = /** @class */ (function (_super) {
    __extends(UpdateRobotApplicationRequestBodyEnvironment, _super);
    function UpdateRobotApplicationRequestBodyEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UpdateRobotApplicationRequestBodyEnvironment.prototype, "uri", void 0);
    return UpdateRobotApplicationRequestBodyEnvironment;
}(SpeakeasyBase));
export { UpdateRobotApplicationRequestBodyEnvironment };
// UpdateRobotApplicationRequestBodyRobotSoftwareSuite
/**
 * Information about a robot software suite (ROS distribution).
**/
var UpdateRobotApplicationRequestBodyRobotSoftwareSuite = /** @class */ (function (_super) {
    __extends(UpdateRobotApplicationRequestBodyRobotSoftwareSuite, _super);
    function UpdateRobotApplicationRequestBodyRobotSoftwareSuite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateRobotApplicationRequestBodyRobotSoftwareSuite.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], UpdateRobotApplicationRequestBodyRobotSoftwareSuite.prototype, "version", void 0);
    return UpdateRobotApplicationRequestBodyRobotSoftwareSuite;
}(SpeakeasyBase));
export { UpdateRobotApplicationRequestBodyRobotSoftwareSuite };
var UpdateRobotApplicationRequestBody = /** @class */ (function (_super) {
    __extends(UpdateRobotApplicationRequestBody, _super);
    function UpdateRobotApplicationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=application" }),
        __metadata("design:type", String)
    ], UpdateRobotApplicationRequestBody.prototype, "application", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentRevisionId" }),
        __metadata("design:type", String)
    ], UpdateRobotApplicationRequestBody.prototype, "currentRevisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", UpdateRobotApplicationRequestBodyEnvironment)
    ], UpdateRobotApplicationRequestBody.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=robotSoftwareSuite" }),
        __metadata("design:type", UpdateRobotApplicationRequestBodyRobotSoftwareSuite)
    ], UpdateRobotApplicationRequestBody.prototype, "robotSoftwareSuite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sources", elemType: shared.SourceConfig }),
        __metadata("design:type", Array)
    ], UpdateRobotApplicationRequestBody.prototype, "sources", void 0);
    return UpdateRobotApplicationRequestBody;
}(SpeakeasyBase));
export { UpdateRobotApplicationRequestBody };
var UpdateRobotApplicationRequest = /** @class */ (function (_super) {
    __extends(UpdateRobotApplicationRequest, _super);
    function UpdateRobotApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateRobotApplicationHeaders)
    ], UpdateRobotApplicationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateRobotApplicationRequestBody)
    ], UpdateRobotApplicationRequest.prototype, "request", void 0);
    return UpdateRobotApplicationRequest;
}(SpeakeasyBase));
export { UpdateRobotApplicationRequest };
var UpdateRobotApplicationResponse = /** @class */ (function (_super) {
    __extends(UpdateRobotApplicationResponse, _super);
    function UpdateRobotApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateRobotApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRobotApplicationResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRobotApplicationResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRobotApplicationResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRobotApplicationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateRobotApplicationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRobotApplicationResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateRobotApplicationResponse)
    ], UpdateRobotApplicationResponse.prototype, "updateRobotApplicationResponse", void 0);
    return UpdateRobotApplicationResponse;
}(SpeakeasyBase));
export { UpdateRobotApplicationResponse };
