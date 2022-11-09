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
import * as shared from "../shared";
var CreateRobotApplicationHeaders = /** @class */ (function (_super) {
    __extends(CreateRobotApplicationHeaders, _super);
    function CreateRobotApplicationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateRobotApplicationHeaders;
}(SpeakeasyBase));
export { CreateRobotApplicationHeaders };
// CreateRobotApplicationRequestBodyEnvironment
/**
 * The object that contains the Docker image URI for either your robot or simulation applications.
**/
var CreateRobotApplicationRequestBodyEnvironment = /** @class */ (function (_super) {
    __extends(CreateRobotApplicationRequestBodyEnvironment, _super);
    function CreateRobotApplicationRequestBodyEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationRequestBodyEnvironment.prototype, "uri", void 0);
    return CreateRobotApplicationRequestBodyEnvironment;
}(SpeakeasyBase));
export { CreateRobotApplicationRequestBodyEnvironment };
// CreateRobotApplicationRequestBodyRobotSoftwareSuite
/**
 * Information about a robot software suite (ROS distribution).
**/
var CreateRobotApplicationRequestBodyRobotSoftwareSuite = /** @class */ (function (_super) {
    __extends(CreateRobotApplicationRequestBodyRobotSoftwareSuite, _super);
    function CreateRobotApplicationRequestBodyRobotSoftwareSuite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationRequestBodyRobotSoftwareSuite.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationRequestBodyRobotSoftwareSuite.prototype, "version", void 0);
    return CreateRobotApplicationRequestBodyRobotSoftwareSuite;
}(SpeakeasyBase));
export { CreateRobotApplicationRequestBodyRobotSoftwareSuite };
var CreateRobotApplicationRequestBody = /** @class */ (function (_super) {
    __extends(CreateRobotApplicationRequestBody, _super);
    function CreateRobotApplicationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=environment" }),
        __metadata("design:type", CreateRobotApplicationRequestBodyEnvironment)
    ], CreateRobotApplicationRequestBody.prototype, "environment", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=robotSoftwareSuite" }),
        __metadata("design:type", CreateRobotApplicationRequestBodyRobotSoftwareSuite)
    ], CreateRobotApplicationRequestBody.prototype, "robotSoftwareSuite", void 0);
    __decorate([
        Metadata({ data: "json, name=sources", elemType: shared.SourceConfig }),
        __metadata("design:type", Array)
    ], CreateRobotApplicationRequestBody.prototype, "sources", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateRobotApplicationRequestBody.prototype, "tags", void 0);
    return CreateRobotApplicationRequestBody;
}(SpeakeasyBase));
export { CreateRobotApplicationRequestBody };
var CreateRobotApplicationRequest = /** @class */ (function (_super) {
    __extends(CreateRobotApplicationRequest, _super);
    function CreateRobotApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateRobotApplicationHeaders)
    ], CreateRobotApplicationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateRobotApplicationRequestBody)
    ], CreateRobotApplicationRequest.prototype, "request", void 0);
    return CreateRobotApplicationRequest;
}(SpeakeasyBase));
export { CreateRobotApplicationRequest };
var CreateRobotApplicationResponse = /** @class */ (function (_super) {
    __extends(CreateRobotApplicationResponse, _super);
    function CreateRobotApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateRobotApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateRobotApplicationResponse)
    ], CreateRobotApplicationResponse.prototype, "createRobotApplicationResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateRobotApplicationResponse.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateRobotApplicationResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateRobotApplicationResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateRobotApplicationResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateRobotApplicationResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateRobotApplicationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateRobotApplicationResponse.prototype, "throttlingException", void 0);
    return CreateRobotApplicationResponse;
}(SpeakeasyBase));
export { CreateRobotApplicationResponse };
