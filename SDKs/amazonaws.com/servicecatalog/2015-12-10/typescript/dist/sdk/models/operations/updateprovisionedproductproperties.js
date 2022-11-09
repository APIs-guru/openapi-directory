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
export var UpdateProvisionedProductPropertiesXAmzTargetEnum;
(function (UpdateProvisionedProductPropertiesXAmzTargetEnum) {
    UpdateProvisionedProductPropertiesXAmzTargetEnum["Aws242ServiceCatalogServiceUpdateProvisionedProductProperties"] = "AWS242ServiceCatalogService.UpdateProvisionedProductProperties";
})(UpdateProvisionedProductPropertiesXAmzTargetEnum || (UpdateProvisionedProductPropertiesXAmzTargetEnum = {}));
var UpdateProvisionedProductPropertiesHeaders = /** @class */ (function (_super) {
    __extends(UpdateProvisionedProductPropertiesHeaders, _super);
    function UpdateProvisionedProductPropertiesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateProvisionedProductPropertiesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateProvisionedProductPropertiesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateProvisionedProductPropertiesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateProvisionedProductPropertiesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateProvisionedProductPropertiesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateProvisionedProductPropertiesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateProvisionedProductPropertiesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdateProvisionedProductPropertiesHeaders.prototype, "xAmzTarget", void 0);
    return UpdateProvisionedProductPropertiesHeaders;
}(SpeakeasyBase));
export { UpdateProvisionedProductPropertiesHeaders };
var UpdateProvisionedProductPropertiesRequest = /** @class */ (function (_super) {
    __extends(UpdateProvisionedProductPropertiesRequest, _super);
    function UpdateProvisionedProductPropertiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateProvisionedProductPropertiesHeaders)
    ], UpdateProvisionedProductPropertiesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateProvisionedProductPropertiesInput)
    ], UpdateProvisionedProductPropertiesRequest.prototype, "request", void 0);
    return UpdateProvisionedProductPropertiesRequest;
}(SpeakeasyBase));
export { UpdateProvisionedProductPropertiesRequest };
var UpdateProvisionedProductPropertiesResponse = /** @class */ (function (_super) {
    __extends(UpdateProvisionedProductPropertiesResponse, _super);
    function UpdateProvisionedProductPropertiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateProvisionedProductPropertiesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateProvisionedProductPropertiesResponse.prototype, "invalidParametersException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateProvisionedProductPropertiesResponse.prototype, "invalidStateException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateProvisionedProductPropertiesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateProvisionedProductPropertiesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateProvisionedProductPropertiesOutput)
    ], UpdateProvisionedProductPropertiesResponse.prototype, "updateProvisionedProductPropertiesOutput", void 0);
    return UpdateProvisionedProductPropertiesResponse;
}(SpeakeasyBase));
export { UpdateProvisionedProductPropertiesResponse };
