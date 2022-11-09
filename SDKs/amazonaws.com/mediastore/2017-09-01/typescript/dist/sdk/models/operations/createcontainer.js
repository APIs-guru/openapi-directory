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
export var CreateContainerXAmzTargetEnum;
(function (CreateContainerXAmzTargetEnum) {
    CreateContainerXAmzTargetEnum["MediaStore20170901CreateContainer"] = "MediaStore_20170901.CreateContainer";
})(CreateContainerXAmzTargetEnum || (CreateContainerXAmzTargetEnum = {}));
var CreateContainerHeaders = /** @class */ (function (_super) {
    __extends(CreateContainerHeaders, _super);
    function CreateContainerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateContainerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateContainerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateContainerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateContainerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateContainerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateContainerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateContainerHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateContainerHeaders.prototype, "xAmzTarget", void 0);
    return CreateContainerHeaders;
}(SpeakeasyBase));
export { CreateContainerHeaders };
var CreateContainerRequest = /** @class */ (function (_super) {
    __extends(CreateContainerRequest, _super);
    function CreateContainerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateContainerHeaders)
    ], CreateContainerRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateContainerInput)
    ], CreateContainerRequest.prototype, "request", void 0);
    return CreateContainerRequest;
}(SpeakeasyBase));
export { CreateContainerRequest };
var CreateContainerResponse = /** @class */ (function (_super) {
    __extends(CreateContainerResponse, _super);
    function CreateContainerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateContainerResponse.prototype, "containerInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateContainerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateContainerOutput)
    ], CreateContainerResponse.prototype, "createContainerOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateContainerResponse.prototype, "internalServerError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateContainerResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateContainerResponse.prototype, "statusCode", void 0);
    return CreateContainerResponse;
}(SpeakeasyBase));
export { CreateContainerResponse };
