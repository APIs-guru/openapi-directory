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
export var CreateProvisioningArtifactXAmzTargetEnum;
(function (CreateProvisioningArtifactXAmzTargetEnum) {
    CreateProvisioningArtifactXAmzTargetEnum["Aws242ServiceCatalogServiceCreateProvisioningArtifact"] = "AWS242ServiceCatalogService.CreateProvisioningArtifact";
})(CreateProvisioningArtifactXAmzTargetEnum || (CreateProvisioningArtifactXAmzTargetEnum = {}));
var CreateProvisioningArtifactHeaders = /** @class */ (function (_super) {
    __extends(CreateProvisioningArtifactHeaders, _super);
    function CreateProvisioningArtifactHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateProvisioningArtifactHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateProvisioningArtifactHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateProvisioningArtifactHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateProvisioningArtifactHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateProvisioningArtifactHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateProvisioningArtifactHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateProvisioningArtifactHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateProvisioningArtifactHeaders.prototype, "xAmzTarget", void 0);
    return CreateProvisioningArtifactHeaders;
}(SpeakeasyBase));
export { CreateProvisioningArtifactHeaders };
var CreateProvisioningArtifactRequest = /** @class */ (function (_super) {
    __extends(CreateProvisioningArtifactRequest, _super);
    function CreateProvisioningArtifactRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProvisioningArtifactHeaders)
    ], CreateProvisioningArtifactRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateProvisioningArtifactInput)
    ], CreateProvisioningArtifactRequest.prototype, "request", void 0);
    return CreateProvisioningArtifactRequest;
}(SpeakeasyBase));
export { CreateProvisioningArtifactRequest };
var CreateProvisioningArtifactResponse = /** @class */ (function (_super) {
    __extends(CreateProvisioningArtifactResponse, _super);
    function CreateProvisioningArtifactResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateProvisioningArtifactResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateProvisioningArtifactOutput)
    ], CreateProvisioningArtifactResponse.prototype, "createProvisioningArtifactOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProvisioningArtifactResponse.prototype, "invalidParametersException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProvisioningArtifactResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateProvisioningArtifactResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateProvisioningArtifactResponse.prototype, "statusCode", void 0);
    return CreateProvisioningArtifactResponse;
}(SpeakeasyBase));
export { CreateProvisioningArtifactResponse };
