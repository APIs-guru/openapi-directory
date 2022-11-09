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
export var BatchUpdateClusterXAmzTargetEnum;
(function (BatchUpdateClusterXAmzTargetEnum) {
    BatchUpdateClusterXAmzTargetEnum["AmazonMemoryDbBatchUpdateCluster"] = "AmazonMemoryDB.BatchUpdateCluster";
})(BatchUpdateClusterXAmzTargetEnum || (BatchUpdateClusterXAmzTargetEnum = {}));
var BatchUpdateClusterHeaders = /** @class */ (function (_super) {
    __extends(BatchUpdateClusterHeaders, _super);
    function BatchUpdateClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchUpdateClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchUpdateClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchUpdateClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchUpdateClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchUpdateClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchUpdateClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchUpdateClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], BatchUpdateClusterHeaders.prototype, "xAmzTarget", void 0);
    return BatchUpdateClusterHeaders;
}(SpeakeasyBase));
export { BatchUpdateClusterHeaders };
var BatchUpdateClusterRequest = /** @class */ (function (_super) {
    __extends(BatchUpdateClusterRequest, _super);
    function BatchUpdateClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BatchUpdateClusterHeaders)
    ], BatchUpdateClusterRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchUpdateClusterRequest)
    ], BatchUpdateClusterRequest.prototype, "request", void 0);
    return BatchUpdateClusterRequest;
}(SpeakeasyBase));
export { BatchUpdateClusterRequest };
var BatchUpdateClusterResponse = /** @class */ (function (_super) {
    __extends(BatchUpdateClusterResponse, _super);
    function BatchUpdateClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BatchUpdateClusterResponse)
    ], BatchUpdateClusterResponse.prototype, "batchUpdateClusterResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BatchUpdateClusterResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpdateClusterResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchUpdateClusterResponse.prototype, "serviceUpdateNotFoundFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BatchUpdateClusterResponse.prototype, "statusCode", void 0);
    return BatchUpdateClusterResponse;
}(SpeakeasyBase));
export { BatchUpdateClusterResponse };
