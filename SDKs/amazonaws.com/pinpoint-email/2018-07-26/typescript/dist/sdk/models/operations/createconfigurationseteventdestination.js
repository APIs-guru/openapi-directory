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
var CreateConfigurationSetEventDestinationPathParams = /** @class */ (function (_super) {
    __extends(CreateConfigurationSetEventDestinationPathParams, _super);
    function CreateConfigurationSetEventDestinationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConfigurationSetName" }),
        __metadata("design:type", String)
    ], CreateConfigurationSetEventDestinationPathParams.prototype, "configurationSetName", void 0);
    return CreateConfigurationSetEventDestinationPathParams;
}(SpeakeasyBase));
export { CreateConfigurationSetEventDestinationPathParams };
var CreateConfigurationSetEventDestinationHeaders = /** @class */ (function (_super) {
    __extends(CreateConfigurationSetEventDestinationHeaders, _super);
    function CreateConfigurationSetEventDestinationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateConfigurationSetEventDestinationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateConfigurationSetEventDestinationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateConfigurationSetEventDestinationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateConfigurationSetEventDestinationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateConfigurationSetEventDestinationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateConfigurationSetEventDestinationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateConfigurationSetEventDestinationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateConfigurationSetEventDestinationHeaders;
}(SpeakeasyBase));
export { CreateConfigurationSetEventDestinationHeaders };
// CreateConfigurationSetEventDestinationRequestBodyEventDestination
/**
 * An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.
**/
var CreateConfigurationSetEventDestinationRequestBodyEventDestination = /** @class */ (function (_super) {
    __extends(CreateConfigurationSetEventDestinationRequestBodyEventDestination, _super);
    function CreateConfigurationSetEventDestinationRequestBodyEventDestination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudWatchDestination" }),
        __metadata("design:type", shared.CloudWatchDestination)
    ], CreateConfigurationSetEventDestinationRequestBodyEventDestination.prototype, "cloudWatchDestination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], CreateConfigurationSetEventDestinationRequestBodyEventDestination.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KinesisFirehoseDestination" }),
        __metadata("design:type", shared.KinesisFirehoseDestination)
    ], CreateConfigurationSetEventDestinationRequestBodyEventDestination.prototype, "kinesisFirehoseDestination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MatchingEventTypes" }),
        __metadata("design:type", Array)
    ], CreateConfigurationSetEventDestinationRequestBodyEventDestination.prototype, "matchingEventTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PinpointDestination" }),
        __metadata("design:type", shared.PinpointDestination)
    ], CreateConfigurationSetEventDestinationRequestBodyEventDestination.prototype, "pinpointDestination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SnsDestination" }),
        __metadata("design:type", shared.SnsDestination)
    ], CreateConfigurationSetEventDestinationRequestBodyEventDestination.prototype, "snsDestination", void 0);
    return CreateConfigurationSetEventDestinationRequestBodyEventDestination;
}(SpeakeasyBase));
export { CreateConfigurationSetEventDestinationRequestBodyEventDestination };
var CreateConfigurationSetEventDestinationRequestBody = /** @class */ (function (_super) {
    __extends(CreateConfigurationSetEventDestinationRequestBody, _super);
    function CreateConfigurationSetEventDestinationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventDestination" }),
        __metadata("design:type", CreateConfigurationSetEventDestinationRequestBodyEventDestination)
    ], CreateConfigurationSetEventDestinationRequestBody.prototype, "eventDestination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventDestinationName" }),
        __metadata("design:type", String)
    ], CreateConfigurationSetEventDestinationRequestBody.prototype, "eventDestinationName", void 0);
    return CreateConfigurationSetEventDestinationRequestBody;
}(SpeakeasyBase));
export { CreateConfigurationSetEventDestinationRequestBody };
var CreateConfigurationSetEventDestinationRequest = /** @class */ (function (_super) {
    __extends(CreateConfigurationSetEventDestinationRequest, _super);
    function CreateConfigurationSetEventDestinationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateConfigurationSetEventDestinationPathParams)
    ], CreateConfigurationSetEventDestinationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateConfigurationSetEventDestinationHeaders)
    ], CreateConfigurationSetEventDestinationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateConfigurationSetEventDestinationRequestBody)
    ], CreateConfigurationSetEventDestinationRequest.prototype, "request", void 0);
    return CreateConfigurationSetEventDestinationRequest;
}(SpeakeasyBase));
export { CreateConfigurationSetEventDestinationRequest };
var CreateConfigurationSetEventDestinationResponse = /** @class */ (function (_super) {
    __extends(CreateConfigurationSetEventDestinationResponse, _super);
    function CreateConfigurationSetEventDestinationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConfigurationSetEventDestinationResponse.prototype, "alreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConfigurationSetEventDestinationResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateConfigurationSetEventDestinationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateConfigurationSetEventDestinationResponse.prototype, "createConfigurationSetEventDestinationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConfigurationSetEventDestinationResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConfigurationSetEventDestinationResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateConfigurationSetEventDestinationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConfigurationSetEventDestinationResponse.prototype, "tooManyRequestsException", void 0);
    return CreateConfigurationSetEventDestinationResponse;
}(SpeakeasyBase));
export { CreateConfigurationSetEventDestinationResponse };
