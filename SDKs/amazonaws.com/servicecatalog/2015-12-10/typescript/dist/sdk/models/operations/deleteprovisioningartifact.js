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
export var DeleteProvisioningArtifactXAmzTargetEnum;
(function (DeleteProvisioningArtifactXAmzTargetEnum) {
    DeleteProvisioningArtifactXAmzTargetEnum["Aws242ServiceCatalogServiceDeleteProvisioningArtifact"] = "AWS242ServiceCatalogService.DeleteProvisioningArtifact";
})(DeleteProvisioningArtifactXAmzTargetEnum || (DeleteProvisioningArtifactXAmzTargetEnum = {}));
var DeleteProvisioningArtifactHeaders = /** @class */ (function (_super) {
    __extends(DeleteProvisioningArtifactHeaders, _super);
    function DeleteProvisioningArtifactHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteProvisioningArtifactHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteProvisioningArtifactHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteProvisioningArtifactHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteProvisioningArtifactHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteProvisioningArtifactHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteProvisioningArtifactHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteProvisioningArtifactHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteProvisioningArtifactHeaders.prototype, "xAmzTarget", void 0);
    return DeleteProvisioningArtifactHeaders;
}(SpeakeasyBase));
export { DeleteProvisioningArtifactHeaders };
var DeleteProvisioningArtifactRequest = /** @class */ (function (_super) {
    __extends(DeleteProvisioningArtifactRequest, _super);
    function DeleteProvisioningArtifactRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteProvisioningArtifactHeaders)
    ], DeleteProvisioningArtifactRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteProvisioningArtifactInput)
    ], DeleteProvisioningArtifactRequest.prototype, "request", void 0);
    return DeleteProvisioningArtifactRequest;
}(SpeakeasyBase));
export { DeleteProvisioningArtifactRequest };
var DeleteProvisioningArtifactResponse = /** @class */ (function (_super) {
    __extends(DeleteProvisioningArtifactResponse, _super);
    function DeleteProvisioningArtifactResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteProvisioningArtifactResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], DeleteProvisioningArtifactResponse.prototype, "deleteProvisioningArtifactOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteProvisioningArtifactResponse.prototype, "invalidParametersException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteProvisioningArtifactResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteProvisioningArtifactResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteProvisioningArtifactResponse.prototype, "statusCode", void 0);
    return DeleteProvisioningArtifactResponse;
}(SpeakeasyBase));
export { DeleteProvisioningArtifactResponse };
