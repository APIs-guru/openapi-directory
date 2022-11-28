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
export var AssociateOpsItemRelatedItemXAmzTargetEnum;
(function (AssociateOpsItemRelatedItemXAmzTargetEnum) {
    AssociateOpsItemRelatedItemXAmzTargetEnum["AmazonSsmAssociateOpsItemRelatedItem"] = "AmazonSSM.AssociateOpsItemRelatedItem";
})(AssociateOpsItemRelatedItemXAmzTargetEnum || (AssociateOpsItemRelatedItemXAmzTargetEnum = {}));
var AssociateOpsItemRelatedItemHeaders = /** @class */ (function (_super) {
    __extends(AssociateOpsItemRelatedItemHeaders, _super);
    function AssociateOpsItemRelatedItemHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AssociateOpsItemRelatedItemHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AssociateOpsItemRelatedItemHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AssociateOpsItemRelatedItemHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AssociateOpsItemRelatedItemHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AssociateOpsItemRelatedItemHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AssociateOpsItemRelatedItemHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AssociateOpsItemRelatedItemHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], AssociateOpsItemRelatedItemHeaders.prototype, "xAmzTarget", void 0);
    return AssociateOpsItemRelatedItemHeaders;
}(SpeakeasyBase));
export { AssociateOpsItemRelatedItemHeaders };
var AssociateOpsItemRelatedItemRequest = /** @class */ (function (_super) {
    __extends(AssociateOpsItemRelatedItemRequest, _super);
    function AssociateOpsItemRelatedItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AssociateOpsItemRelatedItemHeaders)
    ], AssociateOpsItemRelatedItemRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AssociateOpsItemRelatedItemRequest)
    ], AssociateOpsItemRelatedItemRequest.prototype, "request", void 0);
    return AssociateOpsItemRelatedItemRequest;
}(SpeakeasyBase));
export { AssociateOpsItemRelatedItemRequest };
var AssociateOpsItemRelatedItemResponse = /** @class */ (function (_super) {
    __extends(AssociateOpsItemRelatedItemResponse, _super);
    function AssociateOpsItemRelatedItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AssociateOpsItemRelatedItemResponse)
    ], AssociateOpsItemRelatedItemResponse.prototype, "associateOpsItemRelatedItemResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AssociateOpsItemRelatedItemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateOpsItemRelatedItemResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateOpsItemRelatedItemResponse.prototype, "opsItemInvalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateOpsItemRelatedItemResponse.prototype, "opsItemLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateOpsItemRelatedItemResponse.prototype, "opsItemNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateOpsItemRelatedItemResponse.prototype, "opsItemRelatedItemAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AssociateOpsItemRelatedItemResponse.prototype, "statusCode", void 0);
    return AssociateOpsItemRelatedItemResponse;
}(SpeakeasyBase));
export { AssociateOpsItemRelatedItemResponse };
