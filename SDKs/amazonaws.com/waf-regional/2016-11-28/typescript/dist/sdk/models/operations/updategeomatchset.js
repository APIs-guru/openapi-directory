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
export var UpdateGeoMatchSetXAmzTargetEnum;
(function (UpdateGeoMatchSetXAmzTargetEnum) {
    UpdateGeoMatchSetXAmzTargetEnum["AwswafRegional20161128UpdateGeoMatchSet"] = "AWSWAF_Regional_20161128.UpdateGeoMatchSet";
})(UpdateGeoMatchSetXAmzTargetEnum || (UpdateGeoMatchSetXAmzTargetEnum = {}));
var UpdateGeoMatchSetHeaders = /** @class */ (function (_super) {
    __extends(UpdateGeoMatchSetHeaders, _super);
    function UpdateGeoMatchSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateGeoMatchSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateGeoMatchSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateGeoMatchSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateGeoMatchSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateGeoMatchSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateGeoMatchSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateGeoMatchSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdateGeoMatchSetHeaders.prototype, "xAmzTarget", void 0);
    return UpdateGeoMatchSetHeaders;
}(SpeakeasyBase));
export { UpdateGeoMatchSetHeaders };
var UpdateGeoMatchSetRequest = /** @class */ (function (_super) {
    __extends(UpdateGeoMatchSetRequest, _super);
    function UpdateGeoMatchSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateGeoMatchSetHeaders)
    ], UpdateGeoMatchSetRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateGeoMatchSetRequest)
    ], UpdateGeoMatchSetRequest.prototype, "request", void 0);
    return UpdateGeoMatchSetRequest;
}(SpeakeasyBase));
export { UpdateGeoMatchSetRequest };
var UpdateGeoMatchSetResponse = /** @class */ (function (_super) {
    __extends(UpdateGeoMatchSetResponse, _super);
    function UpdateGeoMatchSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateGeoMatchSetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateGeoMatchSetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateGeoMatchSetResponse)
    ], UpdateGeoMatchSetResponse.prototype, "updateGeoMatchSetResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGeoMatchSetResponse.prototype, "wafInternalErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGeoMatchSetResponse.prototype, "wafInvalidAccountException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGeoMatchSetResponse.prototype, "wafInvalidOperationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGeoMatchSetResponse.prototype, "wafInvalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGeoMatchSetResponse.prototype, "wafLimitsExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGeoMatchSetResponse.prototype, "wafNonexistentContainerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGeoMatchSetResponse.prototype, "wafNonexistentItemException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGeoMatchSetResponse.prototype, "wafReferencedItemException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGeoMatchSetResponse.prototype, "wafStaleDataException", void 0);
    return UpdateGeoMatchSetResponse;
}(SpeakeasyBase));
export { UpdateGeoMatchSetResponse };
