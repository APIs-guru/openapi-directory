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
var UpdateConnectorPathParams = /** @class */ (function (_super) {
    __extends(UpdateConnectorPathParams, _super);
    function UpdateConnectorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=connectorArn" }),
        __metadata("design:type", String)
    ], UpdateConnectorPathParams.prototype, "connectorArn", void 0);
    return UpdateConnectorPathParams;
}(SpeakeasyBase));
export { UpdateConnectorPathParams };
var UpdateConnectorQueryParams = /** @class */ (function (_super) {
    __extends(UpdateConnectorQueryParams, _super);
    function UpdateConnectorQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=currentVersion" }),
        __metadata("design:type", String)
    ], UpdateConnectorQueryParams.prototype, "currentVersion", void 0);
    return UpdateConnectorQueryParams;
}(SpeakeasyBase));
export { UpdateConnectorQueryParams };
var UpdateConnectorHeaders = /** @class */ (function (_super) {
    __extends(UpdateConnectorHeaders, _super);
    function UpdateConnectorHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateConnectorHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateConnectorHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateConnectorHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateConnectorHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateConnectorHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateConnectorHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateConnectorHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateConnectorHeaders;
}(SpeakeasyBase));
export { UpdateConnectorHeaders };
// UpdateConnectorRequestBodyCapacity
/**
 * The target capacity for the connector. The capacity can be auto scaled or provisioned.
**/
var UpdateConnectorRequestBodyCapacity = /** @class */ (function (_super) {
    __extends(UpdateConnectorRequestBodyCapacity, _super);
    function UpdateConnectorRequestBodyCapacity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=autoScaling" }),
        __metadata("design:type", shared.AutoScalingUpdate)
    ], UpdateConnectorRequestBodyCapacity.prototype, "autoScaling", void 0);
    __decorate([
        Metadata({ data: "json, name=provisionedCapacity" }),
        __metadata("design:type", shared.ProvisionedCapacityUpdate)
    ], UpdateConnectorRequestBodyCapacity.prototype, "provisionedCapacity", void 0);
    return UpdateConnectorRequestBodyCapacity;
}(SpeakeasyBase));
export { UpdateConnectorRequestBodyCapacity };
var UpdateConnectorRequestBody = /** @class */ (function (_super) {
    __extends(UpdateConnectorRequestBody, _super);
    function UpdateConnectorRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=capacity" }),
        __metadata("design:type", UpdateConnectorRequestBodyCapacity)
    ], UpdateConnectorRequestBody.prototype, "capacity", void 0);
    return UpdateConnectorRequestBody;
}(SpeakeasyBase));
export { UpdateConnectorRequestBody };
var UpdateConnectorRequest = /** @class */ (function (_super) {
    __extends(UpdateConnectorRequest, _super);
    function UpdateConnectorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateConnectorPathParams)
    ], UpdateConnectorRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateConnectorQueryParams)
    ], UpdateConnectorRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateConnectorHeaders)
    ], UpdateConnectorRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateConnectorRequestBody)
    ], UpdateConnectorRequest.prototype, "request", void 0);
    return UpdateConnectorRequest;
}(SpeakeasyBase));
export { UpdateConnectorRequest };
var UpdateConnectorResponse = /** @class */ (function (_super) {
    __extends(UpdateConnectorResponse, _super);
    function UpdateConnectorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateConnectorResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateConnectorResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateConnectorResponse.prototype, "forbiddenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateConnectorResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateConnectorResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateConnectorResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateConnectorResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateConnectorResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateConnectorResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateConnectorResponse)
    ], UpdateConnectorResponse.prototype, "updateConnectorResponse", void 0);
    return UpdateConnectorResponse;
}(SpeakeasyBase));
export { UpdateConnectorResponse };
