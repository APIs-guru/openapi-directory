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
export var DisassociateOpsItemRelatedItemXAmzTargetEnum;
(function (DisassociateOpsItemRelatedItemXAmzTargetEnum) {
    DisassociateOpsItemRelatedItemXAmzTargetEnum["AmazonSsmDisassociateOpsItemRelatedItem"] = "AmazonSSM.DisassociateOpsItemRelatedItem";
})(DisassociateOpsItemRelatedItemXAmzTargetEnum || (DisassociateOpsItemRelatedItemXAmzTargetEnum = {}));
var DisassociateOpsItemRelatedItemHeaders = /** @class */ (function (_super) {
    __extends(DisassociateOpsItemRelatedItemHeaders, _super);
    function DisassociateOpsItemRelatedItemHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DisassociateOpsItemRelatedItemHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DisassociateOpsItemRelatedItemHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DisassociateOpsItemRelatedItemHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DisassociateOpsItemRelatedItemHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DisassociateOpsItemRelatedItemHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DisassociateOpsItemRelatedItemHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DisassociateOpsItemRelatedItemHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DisassociateOpsItemRelatedItemHeaders.prototype, "xAmzTarget", void 0);
    return DisassociateOpsItemRelatedItemHeaders;
}(SpeakeasyBase));
export { DisassociateOpsItemRelatedItemHeaders };
var DisassociateOpsItemRelatedItemRequest = /** @class */ (function (_super) {
    __extends(DisassociateOpsItemRelatedItemRequest, _super);
    function DisassociateOpsItemRelatedItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisassociateOpsItemRelatedItemHeaders)
    ], DisassociateOpsItemRelatedItemRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DisassociateOpsItemRelatedItemRequest)
    ], DisassociateOpsItemRelatedItemRequest.prototype, "request", void 0);
    return DisassociateOpsItemRelatedItemRequest;
}(SpeakeasyBase));
export { DisassociateOpsItemRelatedItemRequest };
var DisassociateOpsItemRelatedItemResponse = /** @class */ (function (_super) {
    __extends(DisassociateOpsItemRelatedItemResponse, _super);
    function DisassociateOpsItemRelatedItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisassociateOpsItemRelatedItemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DisassociateOpsItemRelatedItemResponse.prototype, "disassociateOpsItemRelatedItemResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisassociateOpsItemRelatedItemResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisassociateOpsItemRelatedItemResponse.prototype, "opsItemInvalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisassociateOpsItemRelatedItemResponse.prototype, "opsItemNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisassociateOpsItemRelatedItemResponse.prototype, "opsItemRelatedItemAssociationNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisassociateOpsItemRelatedItemResponse.prototype, "statusCode", void 0);
    return DisassociateOpsItemRelatedItemResponse;
}(SpeakeasyBase));
export { DisassociateOpsItemRelatedItemResponse };
