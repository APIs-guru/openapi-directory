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
var EstimationApiSendToClientHeaders = /** @class */ (function (_super) {
    __extends(EstimationApiSendToClientHeaders, _super);
    function EstimationApiSendToClientHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" }),
        __metadata("design:type", String)
    ], EstimationApiSendToClientHeaders.prototype, "xAuthKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" }),
        __metadata("design:type", String)
    ], EstimationApiSendToClientHeaders.prototype, "xAuthSecret", void 0);
    return EstimationApiSendToClientHeaders;
}(SpeakeasyBase));
export { EstimationApiSendToClientHeaders };
var EstimationApiSendToClientRequests = /** @class */ (function (_super) {
    __extends(EstimationApiSendToClientRequests, _super);
    function EstimationApiSendToClientRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], EstimationApiSendToClientRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SendEstimationToClientApiModel)
    ], EstimationApiSendToClientRequests.prototype, "sendEstimationToClientApiModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.SendEstimationToClientApiModel)
    ], EstimationApiSendToClientRequests.prototype, "sendEstimationToClientApiModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.SendEstimationToClientApiModel)
    ], EstimationApiSendToClientRequests.prototype, "sendEstimationToClientApiModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/html" }),
        __metadata("design:type", Uint8Array)
    ], EstimationApiSendToClientRequests.prototype, "textHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], EstimationApiSendToClientRequests.prototype, "textXml", void 0);
    return EstimationApiSendToClientRequests;
}(SpeakeasyBase));
export { EstimationApiSendToClientRequests };
var EstimationApiSendToClientRequest = /** @class */ (function (_super) {
    __extends(EstimationApiSendToClientRequest, _super);
    function EstimationApiSendToClientRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EstimationApiSendToClientHeaders)
    ], EstimationApiSendToClientRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EstimationApiSendToClientRequests)
    ], EstimationApiSendToClientRequest.prototype, "request", void 0);
    return EstimationApiSendToClientRequest;
}(SpeakeasyBase));
export { EstimationApiSendToClientRequest };
var EstimationApiSendToClientResponse = /** @class */ (function (_super) {
    __extends(EstimationApiSendToClientResponse, _super);
    function EstimationApiSendToClientResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], EstimationApiSendToClientResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EstimationApiSendToClientResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EstimationApiSendToClientResponse.prototype, "estimationApiSendToClient200ApplicationJsonInt32Integer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EstimationApiSendToClientResponse.prototype, "estimationApiSendToClient200TextJsonInt32Integer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EstimationApiSendToClientResponse.prototype, "statusCode", void 0);
    return EstimationApiSendToClientResponse;
}(SpeakeasyBase));
export { EstimationApiSendToClientResponse };
