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
export var PutMetricPolicyXAmzTargetEnum;
(function (PutMetricPolicyXAmzTargetEnum) {
    PutMetricPolicyXAmzTargetEnum["MediaStore20170901PutMetricPolicy"] = "MediaStore_20170901.PutMetricPolicy";
})(PutMetricPolicyXAmzTargetEnum || (PutMetricPolicyXAmzTargetEnum = {}));
var PutMetricPolicyHeaders = /** @class */ (function (_super) {
    __extends(PutMetricPolicyHeaders, _super);
    function PutMetricPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutMetricPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutMetricPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutMetricPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutMetricPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutMetricPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutMetricPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutMetricPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], PutMetricPolicyHeaders.prototype, "xAmzTarget", void 0);
    return PutMetricPolicyHeaders;
}(SpeakeasyBase));
export { PutMetricPolicyHeaders };
var PutMetricPolicyRequest = /** @class */ (function (_super) {
    __extends(PutMetricPolicyRequest, _super);
    function PutMetricPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutMetricPolicyHeaders)
    ], PutMetricPolicyRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PutMetricPolicyInput)
    ], PutMetricPolicyRequest.prototype, "request", void 0);
    return PutMetricPolicyRequest;
}(SpeakeasyBase));
export { PutMetricPolicyRequest };
var PutMetricPolicyResponse = /** @class */ (function (_super) {
    __extends(PutMetricPolicyResponse, _super);
    function PutMetricPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutMetricPolicyResponse.prototype, "containerInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutMetricPolicyResponse.prototype, "containerNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutMetricPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutMetricPolicyResponse.prototype, "internalServerError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], PutMetricPolicyResponse.prototype, "putMetricPolicyOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutMetricPolicyResponse.prototype, "statusCode", void 0);
    return PutMetricPolicyResponse;
}(SpeakeasyBase));
export { PutMetricPolicyResponse };
