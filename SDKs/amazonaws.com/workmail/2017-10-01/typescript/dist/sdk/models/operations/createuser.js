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
export var CreateUserXAmzTargetEnum;
(function (CreateUserXAmzTargetEnum) {
    CreateUserXAmzTargetEnum["WorkMailServiceCreateUser"] = "WorkMailService.CreateUser";
})(CreateUserXAmzTargetEnum || (CreateUserXAmzTargetEnum = {}));
var CreateUserHeaders = /** @class */ (function (_super) {
    __extends(CreateUserHeaders, _super);
    function CreateUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateUserHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateUserHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateUserHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateUserHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateUserHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateUserHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateUserHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateUserHeaders.prototype, "xAmzTarget", void 0);
    return CreateUserHeaders;
}(SpeakeasyBase));
export { CreateUserHeaders };
var CreateUserRequest = /** @class */ (function (_super) {
    __extends(CreateUserRequest, _super);
    function CreateUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateUserHeaders)
    ], CreateUserRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateUserRequest)
    ], CreateUserRequest.prototype, "request", void 0);
    return CreateUserRequest;
}(SpeakeasyBase));
export { CreateUserRequest };
var CreateUserResponse = /** @class */ (function (_super) {
    __extends(CreateUserResponse, _super);
    function CreateUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateUserResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateUserResponse)
    ], CreateUserResponse.prototype, "createUserResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateUserResponse.prototype, "directoryServiceAuthenticationFailedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateUserResponse.prototype, "directoryUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateUserResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateUserResponse.prototype, "invalidPasswordException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateUserResponse.prototype, "nameAvailabilityException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateUserResponse.prototype, "organizationNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateUserResponse.prototype, "organizationStateException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateUserResponse.prototype, "reservedNameException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateUserResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateUserResponse.prototype, "unsupportedOperationException", void 0);
    return CreateUserResponse;
}(SpeakeasyBase));
export { CreateUserResponse };
