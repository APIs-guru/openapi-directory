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
export var CreateParameterGroupXAmzTargetEnum;
(function (CreateParameterGroupXAmzTargetEnum) {
    CreateParameterGroupXAmzTargetEnum["AmazonMemoryDbCreateParameterGroup"] = "AmazonMemoryDB.CreateParameterGroup";
})(CreateParameterGroupXAmzTargetEnum || (CreateParameterGroupXAmzTargetEnum = {}));
var CreateParameterGroupHeaders = /** @class */ (function (_super) {
    __extends(CreateParameterGroupHeaders, _super);
    function CreateParameterGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateParameterGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateParameterGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateParameterGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateParameterGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateParameterGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateParameterGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateParameterGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateParameterGroupHeaders.prototype, "xAmzTarget", void 0);
    return CreateParameterGroupHeaders;
}(SpeakeasyBase));
export { CreateParameterGroupHeaders };
var CreateParameterGroupRequest = /** @class */ (function (_super) {
    __extends(CreateParameterGroupRequest, _super);
    function CreateParameterGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateParameterGroupHeaders)
    ], CreateParameterGroupRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateParameterGroupRequest)
    ], CreateParameterGroupRequest.prototype, "request", void 0);
    return CreateParameterGroupRequest;
}(SpeakeasyBase));
export { CreateParameterGroupRequest };
var CreateParameterGroupResponse = /** @class */ (function (_super) {
    __extends(CreateParameterGroupResponse, _super);
    function CreateParameterGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateParameterGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateParameterGroupResponse)
    ], CreateParameterGroupResponse.prototype, "createParameterGroupResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateParameterGroupResponse.prototype, "invalidParameterCombinationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateParameterGroupResponse.prototype, "invalidParameterGroupStateFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateParameterGroupResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateParameterGroupResponse.prototype, "parameterGroupAlreadyExistsFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateParameterGroupResponse.prototype, "parameterGroupQuotaExceededFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateParameterGroupResponse.prototype, "serviceLinkedRoleNotFoundFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateParameterGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateParameterGroupResponse.prototype, "tagQuotaPerResourceExceeded", void 0);
    return CreateParameterGroupResponse;
}(SpeakeasyBase));
export { CreateParameterGroupResponse };
