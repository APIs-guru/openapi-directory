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
export var CreateSizeConstraintSetXAmzTargetEnum;
(function (CreateSizeConstraintSetXAmzTargetEnum) {
    CreateSizeConstraintSetXAmzTargetEnum["AwswafRegional20161128CreateSizeConstraintSet"] = "AWSWAF_Regional_20161128.CreateSizeConstraintSet";
})(CreateSizeConstraintSetXAmzTargetEnum || (CreateSizeConstraintSetXAmzTargetEnum = {}));
var CreateSizeConstraintSetHeaders = /** @class */ (function (_super) {
    __extends(CreateSizeConstraintSetHeaders, _super);
    function CreateSizeConstraintSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateSizeConstraintSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateSizeConstraintSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateSizeConstraintSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateSizeConstraintSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateSizeConstraintSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateSizeConstraintSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateSizeConstraintSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateSizeConstraintSetHeaders.prototype, "xAmzTarget", void 0);
    return CreateSizeConstraintSetHeaders;
}(SpeakeasyBase));
export { CreateSizeConstraintSetHeaders };
var CreateSizeConstraintSetRequest = /** @class */ (function (_super) {
    __extends(CreateSizeConstraintSetRequest, _super);
    function CreateSizeConstraintSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSizeConstraintSetHeaders)
    ], CreateSizeConstraintSetRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateSizeConstraintSetRequest)
    ], CreateSizeConstraintSetRequest.prototype, "request", void 0);
    return CreateSizeConstraintSetRequest;
}(SpeakeasyBase));
export { CreateSizeConstraintSetRequest };
var CreateSizeConstraintSetResponse = /** @class */ (function (_super) {
    __extends(CreateSizeConstraintSetResponse, _super);
    function CreateSizeConstraintSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSizeConstraintSetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateSizeConstraintSetResponse)
    ], CreateSizeConstraintSetResponse.prototype, "createSizeConstraintSetResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateSizeConstraintSetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateSizeConstraintSetResponse.prototype, "wafDisallowedNameException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateSizeConstraintSetResponse.prototype, "wafInternalErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateSizeConstraintSetResponse.prototype, "wafInvalidAccountException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateSizeConstraintSetResponse.prototype, "wafInvalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateSizeConstraintSetResponse.prototype, "wafLimitsExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateSizeConstraintSetResponse.prototype, "wafStaleDataException", void 0);
    return CreateSizeConstraintSetResponse;
}(SpeakeasyBase));
export { CreateSizeConstraintSetResponse };
