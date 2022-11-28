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
var UpdateSimulationApplicationHeaders = /** @class */ (function (_super) {
    __extends(UpdateSimulationApplicationHeaders, _super);
    function UpdateSimulationApplicationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateSimulationApplicationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateSimulationApplicationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateSimulationApplicationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateSimulationApplicationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateSimulationApplicationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateSimulationApplicationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateSimulationApplicationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateSimulationApplicationHeaders;
}(SpeakeasyBase));
export { UpdateSimulationApplicationHeaders };
// UpdateSimulationApplicationRequestBodyEnvironment
/**
 * The object that contains the Docker image URI for either your robot or simulation applications.
**/
var UpdateSimulationApplicationRequestBodyEnvironment = /** @class */ (function (_super) {
    __extends(UpdateSimulationApplicationRequestBodyEnvironment, _super);
    function UpdateSimulationApplicationRequestBodyEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UpdateSimulationApplicationRequestBodyEnvironment.prototype, "uri", void 0);
    return UpdateSimulationApplicationRequestBodyEnvironment;
}(SpeakeasyBase));
export { UpdateSimulationApplicationRequestBodyEnvironment };
// UpdateSimulationApplicationRequestBodyRenderingEngine
/**
 * Information about a rendering engine.
**/
var UpdateSimulationApplicationRequestBodyRenderingEngine = /** @class */ (function (_super) {
    __extends(UpdateSimulationApplicationRequestBodyRenderingEngine, _super);
    function UpdateSimulationApplicationRequestBodyRenderingEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateSimulationApplicationRequestBodyRenderingEngine.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], UpdateSimulationApplicationRequestBodyRenderingEngine.prototype, "version", void 0);
    return UpdateSimulationApplicationRequestBodyRenderingEngine;
}(SpeakeasyBase));
export { UpdateSimulationApplicationRequestBodyRenderingEngine };
// UpdateSimulationApplicationRequestBodyRobotSoftwareSuite
/**
 * Information about a robot software suite (ROS distribution).
**/
var UpdateSimulationApplicationRequestBodyRobotSoftwareSuite = /** @class */ (function (_super) {
    __extends(UpdateSimulationApplicationRequestBodyRobotSoftwareSuite, _super);
    function UpdateSimulationApplicationRequestBodyRobotSoftwareSuite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateSimulationApplicationRequestBodyRobotSoftwareSuite.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], UpdateSimulationApplicationRequestBodyRobotSoftwareSuite.prototype, "version", void 0);
    return UpdateSimulationApplicationRequestBodyRobotSoftwareSuite;
}(SpeakeasyBase));
export { UpdateSimulationApplicationRequestBodyRobotSoftwareSuite };
// UpdateSimulationApplicationRequestBodySimulationSoftwareSuite
/**
 * Information about a simulation software suite.
**/
var UpdateSimulationApplicationRequestBodySimulationSoftwareSuite = /** @class */ (function (_super) {
    __extends(UpdateSimulationApplicationRequestBodySimulationSoftwareSuite, _super);
    function UpdateSimulationApplicationRequestBodySimulationSoftwareSuite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateSimulationApplicationRequestBodySimulationSoftwareSuite.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], UpdateSimulationApplicationRequestBodySimulationSoftwareSuite.prototype, "version", void 0);
    return UpdateSimulationApplicationRequestBodySimulationSoftwareSuite;
}(SpeakeasyBase));
export { UpdateSimulationApplicationRequestBodySimulationSoftwareSuite };
var UpdateSimulationApplicationRequestBody = /** @class */ (function (_super) {
    __extends(UpdateSimulationApplicationRequestBody, _super);
    function UpdateSimulationApplicationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=application" }),
        __metadata("design:type", String)
    ], UpdateSimulationApplicationRequestBody.prototype, "application", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentRevisionId" }),
        __metadata("design:type", String)
    ], UpdateSimulationApplicationRequestBody.prototype, "currentRevisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", UpdateSimulationApplicationRequestBodyEnvironment)
    ], UpdateSimulationApplicationRequestBody.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=renderingEngine" }),
        __metadata("design:type", UpdateSimulationApplicationRequestBodyRenderingEngine)
    ], UpdateSimulationApplicationRequestBody.prototype, "renderingEngine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=robotSoftwareSuite" }),
        __metadata("design:type", UpdateSimulationApplicationRequestBodyRobotSoftwareSuite)
    ], UpdateSimulationApplicationRequestBody.prototype, "robotSoftwareSuite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=simulationSoftwareSuite" }),
        __metadata("design:type", UpdateSimulationApplicationRequestBodySimulationSoftwareSuite)
    ], UpdateSimulationApplicationRequestBody.prototype, "simulationSoftwareSuite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sources", elemType: shared.SourceConfig }),
        __metadata("design:type", Array)
    ], UpdateSimulationApplicationRequestBody.prototype, "sources", void 0);
    return UpdateSimulationApplicationRequestBody;
}(SpeakeasyBase));
export { UpdateSimulationApplicationRequestBody };
var UpdateSimulationApplicationRequest = /** @class */ (function (_super) {
    __extends(UpdateSimulationApplicationRequest, _super);
    function UpdateSimulationApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSimulationApplicationHeaders)
    ], UpdateSimulationApplicationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateSimulationApplicationRequestBody)
    ], UpdateSimulationApplicationRequest.prototype, "request", void 0);
    return UpdateSimulationApplicationRequest;
}(SpeakeasyBase));
export { UpdateSimulationApplicationRequest };
var UpdateSimulationApplicationResponse = /** @class */ (function (_super) {
    __extends(UpdateSimulationApplicationResponse, _super);
    function UpdateSimulationApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSimulationApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSimulationApplicationResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSimulationApplicationResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSimulationApplicationResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSimulationApplicationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSimulationApplicationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSimulationApplicationResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateSimulationApplicationResponse)
    ], UpdateSimulationApplicationResponse.prototype, "updateSimulationApplicationResponse", void 0);
    return UpdateSimulationApplicationResponse;
}(SpeakeasyBase));
export { UpdateSimulationApplicationResponse };
