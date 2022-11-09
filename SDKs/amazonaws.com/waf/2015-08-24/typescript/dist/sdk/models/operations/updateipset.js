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
export var UpdateIpSetXAmzTargetEnum;
(function (UpdateIpSetXAmzTargetEnum) {
    UpdateIpSetXAmzTargetEnum["Awswaf20150824UpdateIpSet"] = "AWSWAF_20150824.UpdateIPSet";
})(UpdateIpSetXAmzTargetEnum || (UpdateIpSetXAmzTargetEnum = {}));
var UpdateIpSetHeaders = /** @class */ (function (_super) {
    __extends(UpdateIpSetHeaders, _super);
    function UpdateIpSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateIpSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateIpSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateIpSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateIpSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateIpSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateIpSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateIpSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdateIpSetHeaders.prototype, "xAmzTarget", void 0);
    return UpdateIpSetHeaders;
}(SpeakeasyBase));
export { UpdateIpSetHeaders };
var UpdateIpSetRequest = /** @class */ (function (_super) {
    __extends(UpdateIpSetRequest, _super);
    function UpdateIpSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateIpSetHeaders)
    ], UpdateIpSetRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateIpSetRequest)
    ], UpdateIpSetRequest.prototype, "request", void 0);
    return UpdateIpSetRequest;
}(SpeakeasyBase));
export { UpdateIpSetRequest };
var UpdateIpSetResponse = /** @class */ (function (_super) {
    __extends(UpdateIpSetResponse, _super);
    function UpdateIpSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateIpSetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateIpSetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateIpSetResponse)
    ], UpdateIpSetResponse.prototype, "updateIpSetResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateIpSetResponse.prototype, "wafInternalErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateIpSetResponse.prototype, "wafInvalidAccountException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateIpSetResponse.prototype, "wafInvalidOperationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateIpSetResponse.prototype, "wafInvalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateIpSetResponse.prototype, "wafLimitsExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateIpSetResponse.prototype, "wafNonexistentContainerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateIpSetResponse.prototype, "wafNonexistentItemException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateIpSetResponse.prototype, "wafReferencedItemException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateIpSetResponse.prototype, "wafStaleDataException", void 0);
    return UpdateIpSetResponse;
}(SpeakeasyBase));
export { UpdateIpSetResponse };
