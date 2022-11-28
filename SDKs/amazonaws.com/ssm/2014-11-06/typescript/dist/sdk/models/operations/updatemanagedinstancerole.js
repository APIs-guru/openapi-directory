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
export var UpdateManagedInstanceRoleXAmzTargetEnum;
(function (UpdateManagedInstanceRoleXAmzTargetEnum) {
    UpdateManagedInstanceRoleXAmzTargetEnum["AmazonSsmUpdateManagedInstanceRole"] = "AmazonSSM.UpdateManagedInstanceRole";
})(UpdateManagedInstanceRoleXAmzTargetEnum || (UpdateManagedInstanceRoleXAmzTargetEnum = {}));
var UpdateManagedInstanceRoleHeaders = /** @class */ (function (_super) {
    __extends(UpdateManagedInstanceRoleHeaders, _super);
    function UpdateManagedInstanceRoleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateManagedInstanceRoleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateManagedInstanceRoleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateManagedInstanceRoleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateManagedInstanceRoleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateManagedInstanceRoleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateManagedInstanceRoleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateManagedInstanceRoleHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdateManagedInstanceRoleHeaders.prototype, "xAmzTarget", void 0);
    return UpdateManagedInstanceRoleHeaders;
}(SpeakeasyBase));
export { UpdateManagedInstanceRoleHeaders };
var UpdateManagedInstanceRoleRequest = /** @class */ (function (_super) {
    __extends(UpdateManagedInstanceRoleRequest, _super);
    function UpdateManagedInstanceRoleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateManagedInstanceRoleHeaders)
    ], UpdateManagedInstanceRoleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateManagedInstanceRoleRequest)
    ], UpdateManagedInstanceRoleRequest.prototype, "request", void 0);
    return UpdateManagedInstanceRoleRequest;
}(SpeakeasyBase));
export { UpdateManagedInstanceRoleRequest };
var UpdateManagedInstanceRoleResponse = /** @class */ (function (_super) {
    __extends(UpdateManagedInstanceRoleResponse, _super);
    function UpdateManagedInstanceRoleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateManagedInstanceRoleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateManagedInstanceRoleResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateManagedInstanceRoleResponse.prototype, "invalidInstanceId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateManagedInstanceRoleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateManagedInstanceRoleResponse.prototype, "updateManagedInstanceRoleResult", void 0);
    return UpdateManagedInstanceRoleResponse;
}(SpeakeasyBase));
export { UpdateManagedInstanceRoleResponse };
