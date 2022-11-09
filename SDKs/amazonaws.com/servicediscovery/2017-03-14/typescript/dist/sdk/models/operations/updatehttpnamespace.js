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
export var UpdateHttpNamespaceXAmzTargetEnum;
(function (UpdateHttpNamespaceXAmzTargetEnum) {
    UpdateHttpNamespaceXAmzTargetEnum["Route53AutoNamingV20170314UpdateHttpNamespace"] = "Route53AutoNaming_v20170314.UpdateHttpNamespace";
})(UpdateHttpNamespaceXAmzTargetEnum || (UpdateHttpNamespaceXAmzTargetEnum = {}));
var UpdateHttpNamespaceHeaders = /** @class */ (function (_super) {
    __extends(UpdateHttpNamespaceHeaders, _super);
    function UpdateHttpNamespaceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateHttpNamespaceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateHttpNamespaceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateHttpNamespaceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateHttpNamespaceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateHttpNamespaceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateHttpNamespaceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateHttpNamespaceHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdateHttpNamespaceHeaders.prototype, "xAmzTarget", void 0);
    return UpdateHttpNamespaceHeaders;
}(SpeakeasyBase));
export { UpdateHttpNamespaceHeaders };
var UpdateHttpNamespaceRequest = /** @class */ (function (_super) {
    __extends(UpdateHttpNamespaceRequest, _super);
    function UpdateHttpNamespaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateHttpNamespaceHeaders)
    ], UpdateHttpNamespaceRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateHttpNamespaceRequest)
    ], UpdateHttpNamespaceRequest.prototype, "request", void 0);
    return UpdateHttpNamespaceRequest;
}(SpeakeasyBase));
export { UpdateHttpNamespaceRequest };
var UpdateHttpNamespaceResponse = /** @class */ (function (_super) {
    __extends(UpdateHttpNamespaceResponse, _super);
    function UpdateHttpNamespaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateHttpNamespaceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateHttpNamespaceResponse.prototype, "duplicateRequest", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateHttpNamespaceResponse.prototype, "invalidInput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateHttpNamespaceResponse.prototype, "namespaceNotFound", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateHttpNamespaceResponse.prototype, "resourceInUse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateHttpNamespaceResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateHttpNamespaceResponse)
    ], UpdateHttpNamespaceResponse.prototype, "updateHttpNamespaceResponse", void 0);
    return UpdateHttpNamespaceResponse;
}(SpeakeasyBase));
export { UpdateHttpNamespaceResponse };
