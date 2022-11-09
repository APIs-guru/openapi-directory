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
var RetryDataReplicationHeaders = /** @class */ (function (_super) {
    __extends(RetryDataReplicationHeaders, _super);
    function RetryDataReplicationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RetryDataReplicationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RetryDataReplicationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RetryDataReplicationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RetryDataReplicationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RetryDataReplicationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RetryDataReplicationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RetryDataReplicationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return RetryDataReplicationHeaders;
}(SpeakeasyBase));
export { RetryDataReplicationHeaders };
var RetryDataReplicationRequestBody = /** @class */ (function (_super) {
    __extends(RetryDataReplicationRequestBody, _super);
    function RetryDataReplicationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=sourceServerID" }),
        __metadata("design:type", String)
    ], RetryDataReplicationRequestBody.prototype, "sourceServerId", void 0);
    return RetryDataReplicationRequestBody;
}(SpeakeasyBase));
export { RetryDataReplicationRequestBody };
var RetryDataReplicationRequest = /** @class */ (function (_super) {
    __extends(RetryDataReplicationRequest, _super);
    function RetryDataReplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RetryDataReplicationHeaders)
    ], RetryDataReplicationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RetryDataReplicationRequestBody)
    ], RetryDataReplicationRequest.prototype, "request", void 0);
    return RetryDataReplicationRequest;
}(SpeakeasyBase));
export { RetryDataReplicationRequest };
var RetryDataReplicationResponse = /** @class */ (function (_super) {
    __extends(RetryDataReplicationResponse, _super);
    function RetryDataReplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RetryDataReplicationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RetryDataReplicationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SourceServer)
    ], RetryDataReplicationResponse.prototype, "sourceServer", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RetryDataReplicationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RetryDataReplicationResponse.prototype, "uninitializedAccountException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RetryDataReplicationResponse.prototype, "validationException", void 0);
    return RetryDataReplicationResponse;
}(SpeakeasyBase));
export { RetryDataReplicationResponse };
