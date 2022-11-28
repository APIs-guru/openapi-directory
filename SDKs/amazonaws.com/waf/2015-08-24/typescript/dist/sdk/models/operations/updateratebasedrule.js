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
export var UpdateRateBasedRuleXAmzTargetEnum;
(function (UpdateRateBasedRuleXAmzTargetEnum) {
    UpdateRateBasedRuleXAmzTargetEnum["Awswaf20150824UpdateRateBasedRule"] = "AWSWAF_20150824.UpdateRateBasedRule";
})(UpdateRateBasedRuleXAmzTargetEnum || (UpdateRateBasedRuleXAmzTargetEnum = {}));
var UpdateRateBasedRuleHeaders = /** @class */ (function (_super) {
    __extends(UpdateRateBasedRuleHeaders, _super);
    function UpdateRateBasedRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateRateBasedRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateRateBasedRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateRateBasedRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateRateBasedRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateRateBasedRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateRateBasedRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateRateBasedRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdateRateBasedRuleHeaders.prototype, "xAmzTarget", void 0);
    return UpdateRateBasedRuleHeaders;
}(SpeakeasyBase));
export { UpdateRateBasedRuleHeaders };
var UpdateRateBasedRuleRequest = /** @class */ (function (_super) {
    __extends(UpdateRateBasedRuleRequest, _super);
    function UpdateRateBasedRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateRateBasedRuleHeaders)
    ], UpdateRateBasedRuleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateRateBasedRuleRequest)
    ], UpdateRateBasedRuleRequest.prototype, "request", void 0);
    return UpdateRateBasedRuleRequest;
}(SpeakeasyBase));
export { UpdateRateBasedRuleRequest };
var UpdateRateBasedRuleResponse = /** @class */ (function (_super) {
    __extends(UpdateRateBasedRuleResponse, _super);
    function UpdateRateBasedRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateRateBasedRuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateRateBasedRuleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateRateBasedRuleResponse)
    ], UpdateRateBasedRuleResponse.prototype, "updateRateBasedRuleResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRateBasedRuleResponse.prototype, "wafInternalErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRateBasedRuleResponse.prototype, "wafInvalidAccountException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRateBasedRuleResponse.prototype, "wafInvalidOperationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRateBasedRuleResponse.prototype, "wafInvalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRateBasedRuleResponse.prototype, "wafLimitsExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRateBasedRuleResponse.prototype, "wafNonexistentContainerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRateBasedRuleResponse.prototype, "wafNonexistentItemException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRateBasedRuleResponse.prototype, "wafReferencedItemException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRateBasedRuleResponse.prototype, "wafStaleDataException", void 0);
    return UpdateRateBasedRuleResponse;
}(SpeakeasyBase));
export { UpdateRateBasedRuleResponse };
