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
export var CreateMobileDeviceAccessRuleXAmzTargetEnum;
(function (CreateMobileDeviceAccessRuleXAmzTargetEnum) {
    CreateMobileDeviceAccessRuleXAmzTargetEnum["WorkMailServiceCreateMobileDeviceAccessRule"] = "WorkMailService.CreateMobileDeviceAccessRule";
})(CreateMobileDeviceAccessRuleXAmzTargetEnum || (CreateMobileDeviceAccessRuleXAmzTargetEnum = {}));
var CreateMobileDeviceAccessRuleHeaders = /** @class */ (function (_super) {
    __extends(CreateMobileDeviceAccessRuleHeaders, _super);
    function CreateMobileDeviceAccessRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateMobileDeviceAccessRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateMobileDeviceAccessRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateMobileDeviceAccessRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateMobileDeviceAccessRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateMobileDeviceAccessRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateMobileDeviceAccessRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateMobileDeviceAccessRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateMobileDeviceAccessRuleHeaders.prototype, "xAmzTarget", void 0);
    return CreateMobileDeviceAccessRuleHeaders;
}(SpeakeasyBase));
export { CreateMobileDeviceAccessRuleHeaders };
var CreateMobileDeviceAccessRuleRequest = /** @class */ (function (_super) {
    __extends(CreateMobileDeviceAccessRuleRequest, _super);
    function CreateMobileDeviceAccessRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateMobileDeviceAccessRuleHeaders)
    ], CreateMobileDeviceAccessRuleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateMobileDeviceAccessRuleRequest)
    ], CreateMobileDeviceAccessRuleRequest.prototype, "request", void 0);
    return CreateMobileDeviceAccessRuleRequest;
}(SpeakeasyBase));
export { CreateMobileDeviceAccessRuleRequest };
var CreateMobileDeviceAccessRuleResponse = /** @class */ (function (_super) {
    __extends(CreateMobileDeviceAccessRuleResponse, _super);
    function CreateMobileDeviceAccessRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateMobileDeviceAccessRuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateMobileDeviceAccessRuleResponse)
    ], CreateMobileDeviceAccessRuleResponse.prototype, "createMobileDeviceAccessRuleResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMobileDeviceAccessRuleResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMobileDeviceAccessRuleResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMobileDeviceAccessRuleResponse.prototype, "organizationNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMobileDeviceAccessRuleResponse.prototype, "organizationStateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateMobileDeviceAccessRuleResponse.prototype, "statusCode", void 0);
    return CreateMobileDeviceAccessRuleResponse;
}(SpeakeasyBase));
export { CreateMobileDeviceAccessRuleResponse };
