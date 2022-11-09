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
export var UpdateParameterGroupXAmzTargetEnum;
(function (UpdateParameterGroupXAmzTargetEnum) {
    UpdateParameterGroupXAmzTargetEnum["AmazonMemoryDbUpdateParameterGroup"] = "AmazonMemoryDB.UpdateParameterGroup";
})(UpdateParameterGroupXAmzTargetEnum || (UpdateParameterGroupXAmzTargetEnum = {}));
var UpdateParameterGroupHeaders = /** @class */ (function (_super) {
    __extends(UpdateParameterGroupHeaders, _super);
    function UpdateParameterGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateParameterGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateParameterGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateParameterGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateParameterGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateParameterGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateParameterGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateParameterGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdateParameterGroupHeaders.prototype, "xAmzTarget", void 0);
    return UpdateParameterGroupHeaders;
}(SpeakeasyBase));
export { UpdateParameterGroupHeaders };
var UpdateParameterGroupRequest = /** @class */ (function (_super) {
    __extends(UpdateParameterGroupRequest, _super);
    function UpdateParameterGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateParameterGroupHeaders)
    ], UpdateParameterGroupRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateParameterGroupRequest)
    ], UpdateParameterGroupRequest.prototype, "request", void 0);
    return UpdateParameterGroupRequest;
}(SpeakeasyBase));
export { UpdateParameterGroupRequest };
var UpdateParameterGroupResponse = /** @class */ (function (_super) {
    __extends(UpdateParameterGroupResponse, _super);
    function UpdateParameterGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateParameterGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateParameterGroupResponse.prototype, "invalidParameterCombinationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateParameterGroupResponse.prototype, "invalidParameterGroupStateFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateParameterGroupResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateParameterGroupResponse.prototype, "parameterGroupNotFoundFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateParameterGroupResponse.prototype, "serviceLinkedRoleNotFoundFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateParameterGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateParameterGroupResponse)
    ], UpdateParameterGroupResponse.prototype, "updateParameterGroupResponse", void 0);
    return UpdateParameterGroupResponse;
}(SpeakeasyBase));
export { UpdateParameterGroupResponse };
