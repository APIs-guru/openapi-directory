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
var BatchDeleteGeofencePathParams = /** @class */ (function (_super) {
    __extends(BatchDeleteGeofencePathParams, _super);
    function BatchDeleteGeofencePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CollectionName" }),
        __metadata("design:type", String)
    ], BatchDeleteGeofencePathParams.prototype, "collectionName", void 0);
    return BatchDeleteGeofencePathParams;
}(SpeakeasyBase));
export { BatchDeleteGeofencePathParams };
var BatchDeleteGeofenceHeaders = /** @class */ (function (_super) {
    __extends(BatchDeleteGeofenceHeaders, _super);
    function BatchDeleteGeofenceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchDeleteGeofenceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchDeleteGeofenceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchDeleteGeofenceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchDeleteGeofenceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchDeleteGeofenceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchDeleteGeofenceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchDeleteGeofenceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BatchDeleteGeofenceHeaders;
}(SpeakeasyBase));
export { BatchDeleteGeofenceHeaders };
var BatchDeleteGeofenceRequestBody = /** @class */ (function (_super) {
    __extends(BatchDeleteGeofenceRequestBody, _super);
    function BatchDeleteGeofenceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=GeofenceIds" }),
        __metadata("design:type", Array)
    ], BatchDeleteGeofenceRequestBody.prototype, "geofenceIds", void 0);
    return BatchDeleteGeofenceRequestBody;
}(SpeakeasyBase));
export { BatchDeleteGeofenceRequestBody };
var BatchDeleteGeofenceRequest = /** @class */ (function (_super) {
    __extends(BatchDeleteGeofenceRequest, _super);
    function BatchDeleteGeofenceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BatchDeleteGeofencePathParams)
    ], BatchDeleteGeofenceRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BatchDeleteGeofenceHeaders)
    ], BatchDeleteGeofenceRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BatchDeleteGeofenceRequestBody)
    ], BatchDeleteGeofenceRequest.prototype, "request", void 0);
    return BatchDeleteGeofenceRequest;
}(SpeakeasyBase));
export { BatchDeleteGeofenceRequest };
var BatchDeleteGeofenceResponse = /** @class */ (function (_super) {
    __extends(BatchDeleteGeofenceResponse, _super);
    function BatchDeleteGeofenceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDeleteGeofenceResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BatchDeleteGeofenceResponse)
    ], BatchDeleteGeofenceResponse.prototype, "batchDeleteGeofenceResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BatchDeleteGeofenceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDeleteGeofenceResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDeleteGeofenceResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BatchDeleteGeofenceResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDeleteGeofenceResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDeleteGeofenceResponse.prototype, "validationException", void 0);
    return BatchDeleteGeofenceResponse;
}(SpeakeasyBase));
export { BatchDeleteGeofenceResponse };
