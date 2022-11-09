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
export var DeleteSystemInstanceXAmzTargetEnum;
(function (DeleteSystemInstanceXAmzTargetEnum) {
    DeleteSystemInstanceXAmzTargetEnum["IotThingsGraphFrontEndServiceDeleteSystemInstance"] = "IotThingsGraphFrontEndService.DeleteSystemInstance";
})(DeleteSystemInstanceXAmzTargetEnum || (DeleteSystemInstanceXAmzTargetEnum = {}));
var DeleteSystemInstanceHeaders = /** @class */ (function (_super) {
    __extends(DeleteSystemInstanceHeaders, _super);
    function DeleteSystemInstanceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteSystemInstanceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteSystemInstanceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteSystemInstanceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteSystemInstanceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteSystemInstanceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteSystemInstanceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteSystemInstanceHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteSystemInstanceHeaders.prototype, "xAmzTarget", void 0);
    return DeleteSystemInstanceHeaders;
}(SpeakeasyBase));
export { DeleteSystemInstanceHeaders };
var DeleteSystemInstanceRequest = /** @class */ (function (_super) {
    __extends(DeleteSystemInstanceRequest, _super);
    function DeleteSystemInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSystemInstanceHeaders)
    ], DeleteSystemInstanceRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteSystemInstanceRequest)
    ], DeleteSystemInstanceRequest.prototype, "request", void 0);
    return DeleteSystemInstanceRequest;
}(SpeakeasyBase));
export { DeleteSystemInstanceRequest };
var DeleteSystemInstanceResponse = /** @class */ (function (_super) {
    __extends(DeleteSystemInstanceResponse, _super);
    function DeleteSystemInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSystemInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], DeleteSystemInstanceResponse.prototype, "deleteSystemInstanceResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteSystemInstanceResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteSystemInstanceResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteSystemInstanceResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteSystemInstanceResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteSystemInstanceResponse.prototype, "throttlingException", void 0);
    return DeleteSystemInstanceResponse;
}(SpeakeasyBase));
export { DeleteSystemInstanceResponse };
