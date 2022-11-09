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
export var DeleteSqlInjectionMatchSetXAmzTargetEnum;
(function (DeleteSqlInjectionMatchSetXAmzTargetEnum) {
    DeleteSqlInjectionMatchSetXAmzTargetEnum["Awswaf20150824DeleteSqlInjectionMatchSet"] = "AWSWAF_20150824.DeleteSqlInjectionMatchSet";
})(DeleteSqlInjectionMatchSetXAmzTargetEnum || (DeleteSqlInjectionMatchSetXAmzTargetEnum = {}));
var DeleteSqlInjectionMatchSetHeaders = /** @class */ (function (_super) {
    __extends(DeleteSqlInjectionMatchSetHeaders, _super);
    function DeleteSqlInjectionMatchSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteSqlInjectionMatchSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteSqlInjectionMatchSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteSqlInjectionMatchSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteSqlInjectionMatchSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteSqlInjectionMatchSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteSqlInjectionMatchSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteSqlInjectionMatchSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteSqlInjectionMatchSetHeaders.prototype, "xAmzTarget", void 0);
    return DeleteSqlInjectionMatchSetHeaders;
}(SpeakeasyBase));
export { DeleteSqlInjectionMatchSetHeaders };
var DeleteSqlInjectionMatchSetRequest = /** @class */ (function (_super) {
    __extends(DeleteSqlInjectionMatchSetRequest, _super);
    function DeleteSqlInjectionMatchSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSqlInjectionMatchSetHeaders)
    ], DeleteSqlInjectionMatchSetRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteSqlInjectionMatchSetRequest)
    ], DeleteSqlInjectionMatchSetRequest.prototype, "request", void 0);
    return DeleteSqlInjectionMatchSetRequest;
}(SpeakeasyBase));
export { DeleteSqlInjectionMatchSetRequest };
var DeleteSqlInjectionMatchSetResponse = /** @class */ (function (_super) {
    __extends(DeleteSqlInjectionMatchSetResponse, _super);
    function DeleteSqlInjectionMatchSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSqlInjectionMatchSetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DeleteSqlInjectionMatchSetResponse)
    ], DeleteSqlInjectionMatchSetResponse.prototype, "deleteSqlInjectionMatchSetResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteSqlInjectionMatchSetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteSqlInjectionMatchSetResponse.prototype, "wafInternalErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteSqlInjectionMatchSetResponse.prototype, "wafInvalidAccountException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteSqlInjectionMatchSetResponse.prototype, "wafNonEmptyEntityException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteSqlInjectionMatchSetResponse.prototype, "wafNonexistentItemException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteSqlInjectionMatchSetResponse.prototype, "wafReferencedItemException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteSqlInjectionMatchSetResponse.prototype, "wafStaleDataException", void 0);
    return DeleteSqlInjectionMatchSetResponse;
}(SpeakeasyBase));
export { DeleteSqlInjectionMatchSetResponse };
