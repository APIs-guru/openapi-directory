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
var ChangeServerLifeCycleStateHeaders = /** @class */ (function (_super) {
    __extends(ChangeServerLifeCycleStateHeaders, _super);
    function ChangeServerLifeCycleStateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ChangeServerLifeCycleStateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ChangeServerLifeCycleStateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ChangeServerLifeCycleStateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ChangeServerLifeCycleStateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ChangeServerLifeCycleStateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ChangeServerLifeCycleStateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ChangeServerLifeCycleStateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ChangeServerLifeCycleStateHeaders;
}(SpeakeasyBase));
export { ChangeServerLifeCycleStateHeaders };
// ChangeServerLifeCycleStateRequestBodyLifeCycle
/**
 * The request to change the source server migration lifecycle state.
**/
var ChangeServerLifeCycleStateRequestBodyLifeCycle = /** @class */ (function (_super) {
    __extends(ChangeServerLifeCycleStateRequestBodyLifeCycle, _super);
    function ChangeServerLifeCycleStateRequestBodyLifeCycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ChangeServerLifeCycleStateRequestBodyLifeCycle.prototype, "state", void 0);
    return ChangeServerLifeCycleStateRequestBodyLifeCycle;
}(SpeakeasyBase));
export { ChangeServerLifeCycleStateRequestBodyLifeCycle };
var ChangeServerLifeCycleStateRequestBody = /** @class */ (function (_super) {
    __extends(ChangeServerLifeCycleStateRequestBody, _super);
    function ChangeServerLifeCycleStateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=lifeCycle" }),
        __metadata("design:type", ChangeServerLifeCycleStateRequestBodyLifeCycle)
    ], ChangeServerLifeCycleStateRequestBody.prototype, "lifeCycle", void 0);
    __decorate([
        Metadata({ data: "json, name=sourceServerID" }),
        __metadata("design:type", String)
    ], ChangeServerLifeCycleStateRequestBody.prototype, "sourceServerId", void 0);
    return ChangeServerLifeCycleStateRequestBody;
}(SpeakeasyBase));
export { ChangeServerLifeCycleStateRequestBody };
var ChangeServerLifeCycleStateRequest = /** @class */ (function (_super) {
    __extends(ChangeServerLifeCycleStateRequest, _super);
    function ChangeServerLifeCycleStateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ChangeServerLifeCycleStateHeaders)
    ], ChangeServerLifeCycleStateRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ChangeServerLifeCycleStateRequestBody)
    ], ChangeServerLifeCycleStateRequest.prototype, "request", void 0);
    return ChangeServerLifeCycleStateRequest;
}(SpeakeasyBase));
export { ChangeServerLifeCycleStateRequest };
var ChangeServerLifeCycleStateResponse = /** @class */ (function (_super) {
    __extends(ChangeServerLifeCycleStateResponse, _super);
    function ChangeServerLifeCycleStateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ChangeServerLifeCycleStateResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ChangeServerLifeCycleStateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ChangeServerLifeCycleStateResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SourceServer)
    ], ChangeServerLifeCycleStateResponse.prototype, "sourceServer", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ChangeServerLifeCycleStateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ChangeServerLifeCycleStateResponse.prototype, "uninitializedAccountException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ChangeServerLifeCycleStateResponse.prototype, "validationException", void 0);
    return ChangeServerLifeCycleStateResponse;
}(SpeakeasyBase));
export { ChangeServerLifeCycleStateResponse };
