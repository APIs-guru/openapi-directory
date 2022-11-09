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
export var DisassociateDelegateFromResourceXAmzTargetEnum;
(function (DisassociateDelegateFromResourceXAmzTargetEnum) {
    DisassociateDelegateFromResourceXAmzTargetEnum["WorkMailServiceDisassociateDelegateFromResource"] = "WorkMailService.DisassociateDelegateFromResource";
})(DisassociateDelegateFromResourceXAmzTargetEnum || (DisassociateDelegateFromResourceXAmzTargetEnum = {}));
var DisassociateDelegateFromResourceHeaders = /** @class */ (function (_super) {
    __extends(DisassociateDelegateFromResourceHeaders, _super);
    function DisassociateDelegateFromResourceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DisassociateDelegateFromResourceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DisassociateDelegateFromResourceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DisassociateDelegateFromResourceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DisassociateDelegateFromResourceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DisassociateDelegateFromResourceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DisassociateDelegateFromResourceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DisassociateDelegateFromResourceHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DisassociateDelegateFromResourceHeaders.prototype, "xAmzTarget", void 0);
    return DisassociateDelegateFromResourceHeaders;
}(SpeakeasyBase));
export { DisassociateDelegateFromResourceHeaders };
var DisassociateDelegateFromResourceRequest = /** @class */ (function (_super) {
    __extends(DisassociateDelegateFromResourceRequest, _super);
    function DisassociateDelegateFromResourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DisassociateDelegateFromResourceHeaders)
    ], DisassociateDelegateFromResourceRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DisassociateDelegateFromResourceRequest)
    ], DisassociateDelegateFromResourceRequest.prototype, "request", void 0);
    return DisassociateDelegateFromResourceRequest;
}(SpeakeasyBase));
export { DisassociateDelegateFromResourceRequest };
var DisassociateDelegateFromResourceResponse = /** @class */ (function (_super) {
    __extends(DisassociateDelegateFromResourceResponse, _super);
    function DisassociateDelegateFromResourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DisassociateDelegateFromResourceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], DisassociateDelegateFromResourceResponse.prototype, "disassociateDelegateFromResourceResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateDelegateFromResourceResponse.prototype, "entityNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateDelegateFromResourceResponse.prototype, "entityStateException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateDelegateFromResourceResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateDelegateFromResourceResponse.prototype, "organizationNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateDelegateFromResourceResponse.prototype, "organizationStateException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DisassociateDelegateFromResourceResponse.prototype, "statusCode", void 0);
    return DisassociateDelegateFromResourceResponse;
}(SpeakeasyBase));
export { DisassociateDelegateFromResourceResponse };
