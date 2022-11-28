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
export var ModifyDocumentPermissionXAmzTargetEnum;
(function (ModifyDocumentPermissionXAmzTargetEnum) {
    ModifyDocumentPermissionXAmzTargetEnum["AmazonSsmModifyDocumentPermission"] = "AmazonSSM.ModifyDocumentPermission";
})(ModifyDocumentPermissionXAmzTargetEnum || (ModifyDocumentPermissionXAmzTargetEnum = {}));
var ModifyDocumentPermissionHeaders = /** @class */ (function (_super) {
    __extends(ModifyDocumentPermissionHeaders, _super);
    function ModifyDocumentPermissionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ModifyDocumentPermissionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ModifyDocumentPermissionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ModifyDocumentPermissionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ModifyDocumentPermissionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ModifyDocumentPermissionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ModifyDocumentPermissionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ModifyDocumentPermissionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ModifyDocumentPermissionHeaders.prototype, "xAmzTarget", void 0);
    return ModifyDocumentPermissionHeaders;
}(SpeakeasyBase));
export { ModifyDocumentPermissionHeaders };
var ModifyDocumentPermissionRequest = /** @class */ (function (_super) {
    __extends(ModifyDocumentPermissionRequest, _super);
    function ModifyDocumentPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifyDocumentPermissionHeaders)
    ], ModifyDocumentPermissionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ModifyDocumentPermissionRequest)
    ], ModifyDocumentPermissionRequest.prototype, "request", void 0);
    return ModifyDocumentPermissionRequest;
}(SpeakeasyBase));
export { ModifyDocumentPermissionRequest };
var ModifyDocumentPermissionResponse = /** @class */ (function (_super) {
    __extends(ModifyDocumentPermissionResponse, _super);
    function ModifyDocumentPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ModifyDocumentPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyDocumentPermissionResponse.prototype, "documentLimitExceeded", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyDocumentPermissionResponse.prototype, "documentPermissionLimit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyDocumentPermissionResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyDocumentPermissionResponse.prototype, "invalidDocument", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyDocumentPermissionResponse.prototype, "invalidPermissionType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ModifyDocumentPermissionResponse.prototype, "modifyDocumentPermissionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ModifyDocumentPermissionResponse.prototype, "statusCode", void 0);
    return ModifyDocumentPermissionResponse;
}(SpeakeasyBase));
export { ModifyDocumentPermissionResponse };
