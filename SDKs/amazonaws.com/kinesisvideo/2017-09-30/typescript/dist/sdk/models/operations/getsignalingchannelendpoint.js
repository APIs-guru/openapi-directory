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
var GetSignalingChannelEndpointHeaders = /** @class */ (function (_super) {
    __extends(GetSignalingChannelEndpointHeaders, _super);
    function GetSignalingChannelEndpointHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSignalingChannelEndpointHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSignalingChannelEndpointHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSignalingChannelEndpointHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSignalingChannelEndpointHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSignalingChannelEndpointHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSignalingChannelEndpointHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSignalingChannelEndpointHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSignalingChannelEndpointHeaders;
}(SpeakeasyBase));
export { GetSignalingChannelEndpointHeaders };
// GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration
/**
 * An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type.
**/
var GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration = /** @class */ (function (_super) {
    __extends(GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration, _super);
    function GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Protocols" }),
        __metadata("design:type", Array)
    ], GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration.prototype, "protocols", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Role" }),
        __metadata("design:type", String)
    ], GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration.prototype, "role", void 0);
    return GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration;
}(SpeakeasyBase));
export { GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration };
var GetSignalingChannelEndpointRequestBody = /** @class */ (function (_super) {
    __extends(GetSignalingChannelEndpointRequestBody, _super);
    function GetSignalingChannelEndpointRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelARN" }),
        __metadata("design:type", String)
    ], GetSignalingChannelEndpointRequestBody.prototype, "channelArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SingleMasterChannelEndpointConfiguration" }),
        __metadata("design:type", GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration)
    ], GetSignalingChannelEndpointRequestBody.prototype, "singleMasterChannelEndpointConfiguration", void 0);
    return GetSignalingChannelEndpointRequestBody;
}(SpeakeasyBase));
export { GetSignalingChannelEndpointRequestBody };
var GetSignalingChannelEndpointRequest = /** @class */ (function (_super) {
    __extends(GetSignalingChannelEndpointRequest, _super);
    function GetSignalingChannelEndpointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSignalingChannelEndpointHeaders)
    ], GetSignalingChannelEndpointRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetSignalingChannelEndpointRequestBody)
    ], GetSignalingChannelEndpointRequest.prototype, "request", void 0);
    return GetSignalingChannelEndpointRequest;
}(SpeakeasyBase));
export { GetSignalingChannelEndpointRequest };
var GetSignalingChannelEndpointResponse = /** @class */ (function (_super) {
    __extends(GetSignalingChannelEndpointResponse, _super);
    function GetSignalingChannelEndpointResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSignalingChannelEndpointResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSignalingChannelEndpointResponse.prototype, "clientLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSignalingChannelEndpointResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetSignalingChannelEndpointOutput)
    ], GetSignalingChannelEndpointResponse.prototype, "getSignalingChannelEndpointOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSignalingChannelEndpointResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSignalingChannelEndpointResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSignalingChannelEndpointResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSignalingChannelEndpointResponse.prototype, "statusCode", void 0);
    return GetSignalingChannelEndpointResponse;
}(SpeakeasyBase));
export { GetSignalingChannelEndpointResponse };
