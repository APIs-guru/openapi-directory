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
export var GetByteMatchSetXAmzTargetEnum;
(function (GetByteMatchSetXAmzTargetEnum) {
    GetByteMatchSetXAmzTargetEnum["AwswafRegional20161128GetByteMatchSet"] = "AWSWAF_Regional_20161128.GetByteMatchSet";
})(GetByteMatchSetXAmzTargetEnum || (GetByteMatchSetXAmzTargetEnum = {}));
var GetByteMatchSetHeaders = /** @class */ (function (_super) {
    __extends(GetByteMatchSetHeaders, _super);
    function GetByteMatchSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetByteMatchSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetByteMatchSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetByteMatchSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetByteMatchSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetByteMatchSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetByteMatchSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetByteMatchSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetByteMatchSetHeaders.prototype, "xAmzTarget", void 0);
    return GetByteMatchSetHeaders;
}(SpeakeasyBase));
export { GetByteMatchSetHeaders };
var GetByteMatchSetRequest = /** @class */ (function (_super) {
    __extends(GetByteMatchSetRequest, _super);
    function GetByteMatchSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetByteMatchSetHeaders)
    ], GetByteMatchSetRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetByteMatchSetRequest)
    ], GetByteMatchSetRequest.prototype, "request", void 0);
    return GetByteMatchSetRequest;
}(SpeakeasyBase));
export { GetByteMatchSetRequest };
var GetByteMatchSetResponse = /** @class */ (function (_super) {
    __extends(GetByteMatchSetResponse, _super);
    function GetByteMatchSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetByteMatchSetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetByteMatchSetResponse)
    ], GetByteMatchSetResponse.prototype, "getByteMatchSetResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetByteMatchSetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetByteMatchSetResponse.prototype, "wafInternalErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetByteMatchSetResponse.prototype, "wafInvalidAccountException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetByteMatchSetResponse.prototype, "wafNonexistentItemException", void 0);
    return GetByteMatchSetResponse;
}(SpeakeasyBase));
export { GetByteMatchSetResponse };
