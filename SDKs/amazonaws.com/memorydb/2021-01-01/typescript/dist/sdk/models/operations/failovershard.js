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
export var FailoverShardXAmzTargetEnum;
(function (FailoverShardXAmzTargetEnum) {
    FailoverShardXAmzTargetEnum["AmazonMemoryDbFailoverShard"] = "AmazonMemoryDB.FailoverShard";
})(FailoverShardXAmzTargetEnum || (FailoverShardXAmzTargetEnum = {}));
var FailoverShardHeaders = /** @class */ (function (_super) {
    __extends(FailoverShardHeaders, _super);
    function FailoverShardHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], FailoverShardHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], FailoverShardHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], FailoverShardHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], FailoverShardHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], FailoverShardHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], FailoverShardHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], FailoverShardHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], FailoverShardHeaders.prototype, "xAmzTarget", void 0);
    return FailoverShardHeaders;
}(SpeakeasyBase));
export { FailoverShardHeaders };
var FailoverShardRequest = /** @class */ (function (_super) {
    __extends(FailoverShardRequest, _super);
    function FailoverShardRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FailoverShardHeaders)
    ], FailoverShardRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FailoverShardRequest)
    ], FailoverShardRequest.prototype, "request", void 0);
    return FailoverShardRequest;
}(SpeakeasyBase));
export { FailoverShardRequest };
var FailoverShardResponse = /** @class */ (function (_super) {
    __extends(FailoverShardResponse, _super);
    function FailoverShardResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], FailoverShardResponse.prototype, "apiCallRateForCustomerExceededFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], FailoverShardResponse.prototype, "clusterNotFoundFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FailoverShardResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.FailoverShardResponse)
    ], FailoverShardResponse.prototype, "failoverShardResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], FailoverShardResponse.prototype, "invalidClusterStateFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], FailoverShardResponse.prototype, "invalidKmsKeyFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], FailoverShardResponse.prototype, "invalidParameterCombinationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], FailoverShardResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], FailoverShardResponse.prototype, "shardNotFoundFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FailoverShardResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], FailoverShardResponse.prototype, "testFailoverNotAvailableFault", void 0);
    return FailoverShardResponse;
}(SpeakeasyBase));
export { FailoverShardResponse };
