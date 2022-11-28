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
export var ModifyWorkspacePropertiesXAmzTargetEnum;
(function (ModifyWorkspacePropertiesXAmzTargetEnum) {
    ModifyWorkspacePropertiesXAmzTargetEnum["WorkspacesServiceModifyWorkspaceProperties"] = "WorkspacesService.ModifyWorkspaceProperties";
})(ModifyWorkspacePropertiesXAmzTargetEnum || (ModifyWorkspacePropertiesXAmzTargetEnum = {}));
var ModifyWorkspacePropertiesHeaders = /** @class */ (function (_super) {
    __extends(ModifyWorkspacePropertiesHeaders, _super);
    function ModifyWorkspacePropertiesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ModifyWorkspacePropertiesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ModifyWorkspacePropertiesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ModifyWorkspacePropertiesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ModifyWorkspacePropertiesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ModifyWorkspacePropertiesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ModifyWorkspacePropertiesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ModifyWorkspacePropertiesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ModifyWorkspacePropertiesHeaders.prototype, "xAmzTarget", void 0);
    return ModifyWorkspacePropertiesHeaders;
}(SpeakeasyBase));
export { ModifyWorkspacePropertiesHeaders };
var ModifyWorkspacePropertiesRequest = /** @class */ (function (_super) {
    __extends(ModifyWorkspacePropertiesRequest, _super);
    function ModifyWorkspacePropertiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifyWorkspacePropertiesHeaders)
    ], ModifyWorkspacePropertiesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ModifyWorkspacePropertiesRequest)
    ], ModifyWorkspacePropertiesRequest.prototype, "request", void 0);
    return ModifyWorkspacePropertiesRequest;
}(SpeakeasyBase));
export { ModifyWorkspacePropertiesRequest };
var ModifyWorkspacePropertiesResponse = /** @class */ (function (_super) {
    __extends(ModifyWorkspacePropertiesResponse, _super);
    function ModifyWorkspacePropertiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyWorkspacePropertiesResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ModifyWorkspacePropertiesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyWorkspacePropertiesResponse.prototype, "invalidParameterValuesException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyWorkspacePropertiesResponse.prototype, "invalidResourceStateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ModifyWorkspacePropertiesResponse.prototype, "modifyWorkspacePropertiesResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyWorkspacePropertiesResponse.prototype, "operationInProgressException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyWorkspacePropertiesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyWorkspacePropertiesResponse.prototype, "resourceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ModifyWorkspacePropertiesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyWorkspacePropertiesResponse.prototype, "unsupportedWorkspaceConfigurationException", void 0);
    return ModifyWorkspacePropertiesResponse;
}(SpeakeasyBase));
export { ModifyWorkspacePropertiesResponse };
