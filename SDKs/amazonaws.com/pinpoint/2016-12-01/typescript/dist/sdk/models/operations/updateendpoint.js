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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var UpdateEndpointPathParams = /** @class */ (function (_super) {
    __extends(UpdateEndpointPathParams, _super);
    function UpdateEndpointPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], UpdateEndpointPathParams.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=endpoint-id" }),
        __metadata("design:type", String)
    ], UpdateEndpointPathParams.prototype, "endpointId", void 0);
    return UpdateEndpointPathParams;
}(SpeakeasyBase));
export { UpdateEndpointPathParams };
var UpdateEndpointHeaders = /** @class */ (function (_super) {
    __extends(UpdateEndpointHeaders, _super);
    function UpdateEndpointHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateEndpointHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateEndpointHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateEndpointHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateEndpointHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateEndpointHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateEndpointHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateEndpointHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateEndpointHeaders;
}(SpeakeasyBase));
export { UpdateEndpointHeaders };
// UpdateEndpointRequestBodyEndpointRequest
/**
 * Specifies the channel type and other settings for an endpoint.
**/
var UpdateEndpointRequestBodyEndpointRequest = /** @class */ (function (_super) {
    __extends(UpdateEndpointRequestBodyEndpointRequest, _super);
    function UpdateEndpointRequestBodyEndpointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address" }),
        __metadata("design:type", String)
    ], UpdateEndpointRequestBodyEndpointRequest.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attributes" }),
        __metadata("design:type", Map)
    ], UpdateEndpointRequestBodyEndpointRequest.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelType" }),
        __metadata("design:type", String)
    ], UpdateEndpointRequestBodyEndpointRequest.prototype, "channelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Demographic" }),
        __metadata("design:type", shared.EndpointDemographic)
    ], UpdateEndpointRequestBodyEndpointRequest.prototype, "demographic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EffectiveDate" }),
        __metadata("design:type", String)
    ], UpdateEndpointRequestBodyEndpointRequest.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndpointStatus" }),
        __metadata("design:type", String)
    ], UpdateEndpointRequestBodyEndpointRequest.prototype, "endpointStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Location" }),
        __metadata("design:type", shared.EndpointLocation)
    ], UpdateEndpointRequestBodyEndpointRequest.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Metrics" }),
        __metadata("design:type", Map)
    ], UpdateEndpointRequestBodyEndpointRequest.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OptOut" }),
        __metadata("design:type", String)
    ], UpdateEndpointRequestBodyEndpointRequest.prototype, "optOut", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestId" }),
        __metadata("design:type", String)
    ], UpdateEndpointRequestBodyEndpointRequest.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=User" }),
        __metadata("design:type", shared.EndpointUser)
    ], UpdateEndpointRequestBodyEndpointRequest.prototype, "user", void 0);
    return UpdateEndpointRequestBodyEndpointRequest;
}(SpeakeasyBase));
export { UpdateEndpointRequestBodyEndpointRequest };
var UpdateEndpointRequestBody = /** @class */ (function (_super) {
    __extends(UpdateEndpointRequestBody, _super);
    function UpdateEndpointRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndpointRequest" }),
        __metadata("design:type", UpdateEndpointRequestBodyEndpointRequest)
    ], UpdateEndpointRequestBody.prototype, "endpointRequest", void 0);
    return UpdateEndpointRequestBody;
}(SpeakeasyBase));
export { UpdateEndpointRequestBody };
var UpdateEndpointRequest = /** @class */ (function (_super) {
    __extends(UpdateEndpointRequest, _super);
    function UpdateEndpointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateEndpointPathParams)
    ], UpdateEndpointRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateEndpointHeaders)
    ], UpdateEndpointRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateEndpointRequestBody)
    ], UpdateEndpointRequest.prototype, "request", void 0);
    return UpdateEndpointRequest;
}(SpeakeasyBase));
export { UpdateEndpointRequest };
var UpdateEndpointResponse = /** @class */ (function (_super) {
    __extends(UpdateEndpointResponse, _super);
    function UpdateEndpointResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEndpointResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateEndpointResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEndpointResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEndpointResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEndpointResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEndpointResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEndpointResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateEndpointResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateEndpointResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateEndpointResponse)
    ], UpdateEndpointResponse.prototype, "updateEndpointResponse", void 0);
    return UpdateEndpointResponse;
}(SpeakeasyBase));
export { UpdateEndpointResponse };
