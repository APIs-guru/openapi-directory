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
export var CreateWebAclxAmzTargetEnum;
(function (CreateWebAclxAmzTargetEnum) {
    CreateWebAclxAmzTargetEnum["AwswafRegional20161128CreateWebAcl"] = "AWSWAF_Regional_20161128.CreateWebACL";
})(CreateWebAclxAmzTargetEnum || (CreateWebAclxAmzTargetEnum = {}));
var CreateWebAclHeaders = /** @class */ (function (_super) {
    __extends(CreateWebAclHeaders, _super);
    function CreateWebAclHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateWebAclHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateWebAclHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateWebAclHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateWebAclHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateWebAclHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateWebAclHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateWebAclHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateWebAclHeaders.prototype, "xAmzTarget", void 0);
    return CreateWebAclHeaders;
}(SpeakeasyBase));
export { CreateWebAclHeaders };
var CreateWebAclRequest = /** @class */ (function (_super) {
    __extends(CreateWebAclRequest, _super);
    function CreateWebAclRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateWebAclHeaders)
    ], CreateWebAclRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateWebAclRequest)
    ], CreateWebAclRequest.prototype, "request", void 0);
    return CreateWebAclRequest;
}(SpeakeasyBase));
export { CreateWebAclRequest };
var CreateWebAclResponse = /** @class */ (function (_super) {
    __extends(CreateWebAclResponse, _super);
    function CreateWebAclResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateWebAclResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateWebAclResponse)
    ], CreateWebAclResponse.prototype, "createWebAclResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateWebAclResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWebAclResponse.prototype, "wafBadRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWebAclResponse.prototype, "wafDisallowedNameException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWebAclResponse.prototype, "wafInternalErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWebAclResponse.prototype, "wafInvalidAccountException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWebAclResponse.prototype, "wafInvalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWebAclResponse.prototype, "wafLimitsExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWebAclResponse.prototype, "wafStaleDataException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWebAclResponse.prototype, "wafTagOperationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateWebAclResponse.prototype, "wafTagOperationInternalErrorException", void 0);
    return CreateWebAclResponse;
}(SpeakeasyBase));
export { CreateWebAclResponse };
