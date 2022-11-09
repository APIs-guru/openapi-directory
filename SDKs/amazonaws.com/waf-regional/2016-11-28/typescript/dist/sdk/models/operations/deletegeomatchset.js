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
export var DeleteGeoMatchSetXAmzTargetEnum;
(function (DeleteGeoMatchSetXAmzTargetEnum) {
    DeleteGeoMatchSetXAmzTargetEnum["AwswafRegional20161128DeleteGeoMatchSet"] = "AWSWAF_Regional_20161128.DeleteGeoMatchSet";
})(DeleteGeoMatchSetXAmzTargetEnum || (DeleteGeoMatchSetXAmzTargetEnum = {}));
var DeleteGeoMatchSetHeaders = /** @class */ (function (_super) {
    __extends(DeleteGeoMatchSetHeaders, _super);
    function DeleteGeoMatchSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteGeoMatchSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteGeoMatchSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteGeoMatchSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteGeoMatchSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteGeoMatchSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteGeoMatchSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteGeoMatchSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteGeoMatchSetHeaders.prototype, "xAmzTarget", void 0);
    return DeleteGeoMatchSetHeaders;
}(SpeakeasyBase));
export { DeleteGeoMatchSetHeaders };
var DeleteGeoMatchSetRequest = /** @class */ (function (_super) {
    __extends(DeleteGeoMatchSetRequest, _super);
    function DeleteGeoMatchSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteGeoMatchSetHeaders)
    ], DeleteGeoMatchSetRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteGeoMatchSetRequest)
    ], DeleteGeoMatchSetRequest.prototype, "request", void 0);
    return DeleteGeoMatchSetRequest;
}(SpeakeasyBase));
export { DeleteGeoMatchSetRequest };
var DeleteGeoMatchSetResponse = /** @class */ (function (_super) {
    __extends(DeleteGeoMatchSetResponse, _super);
    function DeleteGeoMatchSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteGeoMatchSetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DeleteGeoMatchSetResponse)
    ], DeleteGeoMatchSetResponse.prototype, "deleteGeoMatchSetResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteGeoMatchSetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteGeoMatchSetResponse.prototype, "wafInternalErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteGeoMatchSetResponse.prototype, "wafInvalidAccountException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteGeoMatchSetResponse.prototype, "wafNonEmptyEntityException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteGeoMatchSetResponse.prototype, "wafNonexistentItemException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteGeoMatchSetResponse.prototype, "wafReferencedItemException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteGeoMatchSetResponse.prototype, "wafStaleDataException", void 0);
    return DeleteGeoMatchSetResponse;
}(SpeakeasyBase));
export { DeleteGeoMatchSetResponse };
