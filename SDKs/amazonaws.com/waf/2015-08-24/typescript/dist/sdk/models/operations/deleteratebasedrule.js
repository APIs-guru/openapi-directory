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
export var DeleteRateBasedRuleXAmzTargetEnum;
(function (DeleteRateBasedRuleXAmzTargetEnum) {
    DeleteRateBasedRuleXAmzTargetEnum["Awswaf20150824DeleteRateBasedRule"] = "AWSWAF_20150824.DeleteRateBasedRule";
})(DeleteRateBasedRuleXAmzTargetEnum || (DeleteRateBasedRuleXAmzTargetEnum = {}));
var DeleteRateBasedRuleHeaders = /** @class */ (function (_super) {
    __extends(DeleteRateBasedRuleHeaders, _super);
    function DeleteRateBasedRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteRateBasedRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteRateBasedRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteRateBasedRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteRateBasedRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteRateBasedRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteRateBasedRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteRateBasedRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteRateBasedRuleHeaders.prototype, "xAmzTarget", void 0);
    return DeleteRateBasedRuleHeaders;
}(SpeakeasyBase));
export { DeleteRateBasedRuleHeaders };
var DeleteRateBasedRuleRequest = /** @class */ (function (_super) {
    __extends(DeleteRateBasedRuleRequest, _super);
    function DeleteRateBasedRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteRateBasedRuleHeaders)
    ], DeleteRateBasedRuleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteRateBasedRuleRequest)
    ], DeleteRateBasedRuleRequest.prototype, "request", void 0);
    return DeleteRateBasedRuleRequest;
}(SpeakeasyBase));
export { DeleteRateBasedRuleRequest };
var DeleteRateBasedRuleResponse = /** @class */ (function (_super) {
    __extends(DeleteRateBasedRuleResponse, _super);
    function DeleteRateBasedRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteRateBasedRuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteRateBasedRuleResponse)
    ], DeleteRateBasedRuleResponse.prototype, "deleteRateBasedRuleResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteRateBasedRuleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteRateBasedRuleResponse.prototype, "wafInternalErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteRateBasedRuleResponse.prototype, "wafInvalidAccountException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteRateBasedRuleResponse.prototype, "wafNonEmptyEntityException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteRateBasedRuleResponse.prototype, "wafNonexistentItemException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteRateBasedRuleResponse.prototype, "wafReferencedItemException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteRateBasedRuleResponse.prototype, "wafStaleDataException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteRateBasedRuleResponse.prototype, "wafTagOperationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteRateBasedRuleResponse.prototype, "wafTagOperationInternalErrorException", void 0);
    return DeleteRateBasedRuleResponse;
}(SpeakeasyBase));
export { DeleteRateBasedRuleResponse };
