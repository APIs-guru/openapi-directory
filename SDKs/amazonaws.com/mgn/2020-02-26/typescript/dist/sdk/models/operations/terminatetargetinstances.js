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
var TerminateTargetInstancesHeaders = /** @class */ (function (_super) {
    __extends(TerminateTargetInstancesHeaders, _super);
    function TerminateTargetInstancesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], TerminateTargetInstancesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], TerminateTargetInstancesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], TerminateTargetInstancesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], TerminateTargetInstancesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], TerminateTargetInstancesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], TerminateTargetInstancesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], TerminateTargetInstancesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return TerminateTargetInstancesHeaders;
}(SpeakeasyBase));
export { TerminateTargetInstancesHeaders };
var TerminateTargetInstancesRequestBody = /** @class */ (function (_super) {
    __extends(TerminateTargetInstancesRequestBody, _super);
    function TerminateTargetInstancesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=sourceServerIDs" }),
        __metadata("design:type", Array)
    ], TerminateTargetInstancesRequestBody.prototype, "sourceServerIDs", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], TerminateTargetInstancesRequestBody.prototype, "tags", void 0);
    return TerminateTargetInstancesRequestBody;
}(SpeakeasyBase));
export { TerminateTargetInstancesRequestBody };
var TerminateTargetInstancesRequest = /** @class */ (function (_super) {
    __extends(TerminateTargetInstancesRequest, _super);
    function TerminateTargetInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TerminateTargetInstancesHeaders)
    ], TerminateTargetInstancesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TerminateTargetInstancesRequestBody)
    ], TerminateTargetInstancesRequest.prototype, "request", void 0);
    return TerminateTargetInstancesRequest;
}(SpeakeasyBase));
export { TerminateTargetInstancesRequest };
var TerminateTargetInstancesResponse = /** @class */ (function (_super) {
    __extends(TerminateTargetInstancesResponse, _super);
    function TerminateTargetInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], TerminateTargetInstancesResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TerminateTargetInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TerminateTargetInstancesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TerminateTargetInstancesResponse)
    ], TerminateTargetInstancesResponse.prototype, "terminateTargetInstancesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], TerminateTargetInstancesResponse.prototype, "uninitializedAccountException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], TerminateTargetInstancesResponse.prototype, "validationException", void 0);
    return TerminateTargetInstancesResponse;
}(SpeakeasyBase));
export { TerminateTargetInstancesResponse };
