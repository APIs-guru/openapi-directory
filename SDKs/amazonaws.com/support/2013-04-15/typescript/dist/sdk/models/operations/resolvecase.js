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
export var ResolveCaseXAmzTargetEnum;
(function (ResolveCaseXAmzTargetEnum) {
    ResolveCaseXAmzTargetEnum["AwsSupport20130415ResolveCase"] = "AWSSupport_20130415.ResolveCase";
})(ResolveCaseXAmzTargetEnum || (ResolveCaseXAmzTargetEnum = {}));
var ResolveCaseHeaders = /** @class */ (function (_super) {
    __extends(ResolveCaseHeaders, _super);
    function ResolveCaseHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ResolveCaseHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ResolveCaseHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ResolveCaseHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ResolveCaseHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ResolveCaseHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ResolveCaseHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ResolveCaseHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ResolveCaseHeaders.prototype, "xAmzTarget", void 0);
    return ResolveCaseHeaders;
}(SpeakeasyBase));
export { ResolveCaseHeaders };
var ResolveCaseRequest = /** @class */ (function (_super) {
    __extends(ResolveCaseRequest, _super);
    function ResolveCaseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ResolveCaseHeaders)
    ], ResolveCaseRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ResolveCaseRequest)
    ], ResolveCaseRequest.prototype, "request", void 0);
    return ResolveCaseRequest;
}(SpeakeasyBase));
export { ResolveCaseRequest };
var ResolveCaseResponse = /** @class */ (function (_super) {
    __extends(ResolveCaseResponse, _super);
    function ResolveCaseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ResolveCaseResponse.prototype, "caseIdNotFound", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ResolveCaseResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ResolveCaseResponse.prototype, "internalServerError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ResolveCaseResponse)
    ], ResolveCaseResponse.prototype, "resolveCaseResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ResolveCaseResponse.prototype, "statusCode", void 0);
    return ResolveCaseResponse;
}(SpeakeasyBase));
export { ResolveCaseResponse };
