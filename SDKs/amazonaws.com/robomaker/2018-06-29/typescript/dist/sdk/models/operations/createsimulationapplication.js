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
var CreateSimulationApplicationHeaders = /** @class */ (function (_super) {
    __extends(CreateSimulationApplicationHeaders, _super);
    function CreateSimulationApplicationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateSimulationApplicationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateSimulationApplicationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateSimulationApplicationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateSimulationApplicationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateSimulationApplicationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateSimulationApplicationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateSimulationApplicationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateSimulationApplicationHeaders;
}(SpeakeasyBase));
export { CreateSimulationApplicationHeaders };
// CreateSimulationApplicationRequestBodyEnvironment
/**
 * The object that contains the Docker image URI for either your robot or simulation applications.
**/
var CreateSimulationApplicationRequestBodyEnvironment = /** @class */ (function (_super) {
    __extends(CreateSimulationApplicationRequestBodyEnvironment, _super);
    function CreateSimulationApplicationRequestBodyEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CreateSimulationApplicationRequestBodyEnvironment.prototype, "uri", void 0);
    return CreateSimulationApplicationRequestBodyEnvironment;
}(SpeakeasyBase));
export { CreateSimulationApplicationRequestBodyEnvironment };
// CreateSimulationApplicationRequestBodyRenderingEngine
/**
 * Information about a rendering engine.
**/
var CreateSimulationApplicationRequestBodyRenderingEngine = /** @class */ (function (_super) {
    __extends(CreateSimulationApplicationRequestBodyRenderingEngine, _super);
    function CreateSimulationApplicationRequestBodyRenderingEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateSimulationApplicationRequestBodyRenderingEngine.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], CreateSimulationApplicationRequestBodyRenderingEngine.prototype, "version", void 0);
    return CreateSimulationApplicationRequestBodyRenderingEngine;
}(SpeakeasyBase));
export { CreateSimulationApplicationRequestBodyRenderingEngine };
// CreateSimulationApplicationRequestBodyRobotSoftwareSuite
/**
 * Information about a robot software suite (ROS distribution).
**/
var CreateSimulationApplicationRequestBodyRobotSoftwareSuite = /** @class */ (function (_super) {
    __extends(CreateSimulationApplicationRequestBodyRobotSoftwareSuite, _super);
    function CreateSimulationApplicationRequestBodyRobotSoftwareSuite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateSimulationApplicationRequestBodyRobotSoftwareSuite.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], CreateSimulationApplicationRequestBodyRobotSoftwareSuite.prototype, "version", void 0);
    return CreateSimulationApplicationRequestBodyRobotSoftwareSuite;
}(SpeakeasyBase));
export { CreateSimulationApplicationRequestBodyRobotSoftwareSuite };
// CreateSimulationApplicationRequestBodySimulationSoftwareSuite
/**
 * Information about a simulation software suite.
**/
var CreateSimulationApplicationRequestBodySimulationSoftwareSuite = /** @class */ (function (_super) {
    __extends(CreateSimulationApplicationRequestBodySimulationSoftwareSuite, _super);
    function CreateSimulationApplicationRequestBodySimulationSoftwareSuite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateSimulationApplicationRequestBodySimulationSoftwareSuite.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], CreateSimulationApplicationRequestBodySimulationSoftwareSuite.prototype, "version", void 0);
    return CreateSimulationApplicationRequestBodySimulationSoftwareSuite;
}(SpeakeasyBase));
export { CreateSimulationApplicationRequestBodySimulationSoftwareSuite };
var CreateSimulationApplicationRequestBody = /** @class */ (function (_super) {
    __extends(CreateSimulationApplicationRequestBody, _super);
    function CreateSimulationApplicationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=environment" }),
        __metadata("design:type", CreateSimulationApplicationRequestBodyEnvironment)
    ], CreateSimulationApplicationRequestBody.prototype, "environment", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateSimulationApplicationRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=renderingEngine" }),
        __metadata("design:type", CreateSimulationApplicationRequestBodyRenderingEngine)
    ], CreateSimulationApplicationRequestBody.prototype, "renderingEngine", void 0);
    __decorate([
        Metadata({ data: "json, name=robotSoftwareSuite" }),
        __metadata("design:type", CreateSimulationApplicationRequestBodyRobotSoftwareSuite)
    ], CreateSimulationApplicationRequestBody.prototype, "robotSoftwareSuite", void 0);
    __decorate([
        Metadata({ data: "json, name=simulationSoftwareSuite" }),
        __metadata("design:type", CreateSimulationApplicationRequestBodySimulationSoftwareSuite)
    ], CreateSimulationApplicationRequestBody.prototype, "simulationSoftwareSuite", void 0);
    __decorate([
        Metadata({ data: "json, name=sources", elemType: shared.SourceConfig }),
        __metadata("design:type", Array)
    ], CreateSimulationApplicationRequestBody.prototype, "sources", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateSimulationApplicationRequestBody.prototype, "tags", void 0);
    return CreateSimulationApplicationRequestBody;
}(SpeakeasyBase));
export { CreateSimulationApplicationRequestBody };
var CreateSimulationApplicationRequest = /** @class */ (function (_super) {
    __extends(CreateSimulationApplicationRequest, _super);
    function CreateSimulationApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSimulationApplicationHeaders)
    ], CreateSimulationApplicationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateSimulationApplicationRequestBody)
    ], CreateSimulationApplicationRequest.prototype, "request", void 0);
    return CreateSimulationApplicationRequest;
}(SpeakeasyBase));
export { CreateSimulationApplicationRequest };
var CreateSimulationApplicationResponse = /** @class */ (function (_super) {
    __extends(CreateSimulationApplicationResponse, _super);
    function CreateSimulationApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSimulationApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateSimulationApplicationResponse)
    ], CreateSimulationApplicationResponse.prototype, "createSimulationApplicationResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateSimulationApplicationResponse.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateSimulationApplicationResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateSimulationApplicationResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateSimulationApplicationResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateSimulationApplicationResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateSimulationApplicationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateSimulationApplicationResponse.prototype, "throttlingException", void 0);
    return CreateSimulationApplicationResponse;
}(SpeakeasyBase));
export { CreateSimulationApplicationResponse };
