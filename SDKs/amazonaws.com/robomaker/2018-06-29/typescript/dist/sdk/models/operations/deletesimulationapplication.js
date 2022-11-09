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
var DeleteSimulationApplicationHeaders = /** @class */ (function (_super) {
    __extends(DeleteSimulationApplicationHeaders, _super);
    function DeleteSimulationApplicationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteSimulationApplicationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteSimulationApplicationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteSimulationApplicationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteSimulationApplicationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteSimulationApplicationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteSimulationApplicationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteSimulationApplicationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteSimulationApplicationHeaders;
}(SpeakeasyBase));
export { DeleteSimulationApplicationHeaders };
var DeleteSimulationApplicationRequestBody = /** @class */ (function (_super) {
    __extends(DeleteSimulationApplicationRequestBody, _super);
    function DeleteSimulationApplicationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=application" }),
        __metadata("design:type", String)
    ], DeleteSimulationApplicationRequestBody.prototype, "application", void 0);
    __decorate([
        Metadata({ data: "json, name=applicationVersion" }),
        __metadata("design:type", String)
    ], DeleteSimulationApplicationRequestBody.prototype, "applicationVersion", void 0);
    return DeleteSimulationApplicationRequestBody;
}(SpeakeasyBase));
export { DeleteSimulationApplicationRequestBody };
var DeleteSimulationApplicationRequest = /** @class */ (function (_super) {
    __extends(DeleteSimulationApplicationRequest, _super);
    function DeleteSimulationApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSimulationApplicationHeaders)
    ], DeleteSimulationApplicationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DeleteSimulationApplicationRequestBody)
    ], DeleteSimulationApplicationRequest.prototype, "request", void 0);
    return DeleteSimulationApplicationRequest;
}(SpeakeasyBase));
export { DeleteSimulationApplicationRequest };
var DeleteSimulationApplicationResponse = /** @class */ (function (_super) {
    __extends(DeleteSimulationApplicationResponse, _super);
    function DeleteSimulationApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSimulationApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], DeleteSimulationApplicationResponse.prototype, "deleteSimulationApplicationResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteSimulationApplicationResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteSimulationApplicationResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteSimulationApplicationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteSimulationApplicationResponse.prototype, "throttlingException", void 0);
    return DeleteSimulationApplicationResponse;
}(SpeakeasyBase));
export { DeleteSimulationApplicationResponse };
