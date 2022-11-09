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
export var CreateDataSourceFromS3XAmzTargetEnum;
(function (CreateDataSourceFromS3XAmzTargetEnum) {
    CreateDataSourceFromS3XAmzTargetEnum["AmazonMl20141212CreateDataSourceFromS3"] = "AmazonML_20141212.CreateDataSourceFromS3";
})(CreateDataSourceFromS3XAmzTargetEnum || (CreateDataSourceFromS3XAmzTargetEnum = {}));
var CreateDataSourceFromS3Headers = /** @class */ (function (_super) {
    __extends(CreateDataSourceFromS3Headers, _super);
    function CreateDataSourceFromS3Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateDataSourceFromS3Headers.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateDataSourceFromS3Headers.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateDataSourceFromS3Headers.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateDataSourceFromS3Headers.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateDataSourceFromS3Headers.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateDataSourceFromS3Headers.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateDataSourceFromS3Headers.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateDataSourceFromS3Headers.prototype, "xAmzTarget", void 0);
    return CreateDataSourceFromS3Headers;
}(SpeakeasyBase));
export { CreateDataSourceFromS3Headers };
var CreateDataSourceFromS3Request = /** @class */ (function (_super) {
    __extends(CreateDataSourceFromS3Request, _super);
    function CreateDataSourceFromS3Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateDataSourceFromS3Headers)
    ], CreateDataSourceFromS3Request.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateDataSourceFromS3Input)
    ], CreateDataSourceFromS3Request.prototype, "request", void 0);
    return CreateDataSourceFromS3Request;
}(SpeakeasyBase));
export { CreateDataSourceFromS3Request };
var CreateDataSourceFromS3Response = /** @class */ (function (_super) {
    __extends(CreateDataSourceFromS3Response, _super);
    function CreateDataSourceFromS3Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateDataSourceFromS3Response.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateDataSourceFromS3Output)
    ], CreateDataSourceFromS3Response.prototype, "createDataSourceFromS3Output", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDataSourceFromS3Response.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDataSourceFromS3Response.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDataSourceFromS3Response.prototype, "invalidInputException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateDataSourceFromS3Response.prototype, "statusCode", void 0);
    return CreateDataSourceFromS3Response;
}(SpeakeasyBase));
export { CreateDataSourceFromS3Response };
