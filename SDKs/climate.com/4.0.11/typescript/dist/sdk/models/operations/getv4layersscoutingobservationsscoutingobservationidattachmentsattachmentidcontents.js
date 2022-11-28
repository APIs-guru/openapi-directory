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
var GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams, _super);
    function GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attachmentId" }),
        __metadata("design:type", String)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams.prototype, "attachmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scoutingObservationId" }),
        __metadata("design:type", String)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams.prototype, "scoutingObservationId", void 0);
    return GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams;
}(SpeakeasyBase));
export { GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams };
var GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders, _super);
    function GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders.prototype, "accept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Range" }),
        __metadata("design:type", String)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders.prototype, "range", void 0);
    return GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders;
}(SpeakeasyBase));
export { GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders };
var GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity, _super);
    function GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2AuthorizationCode)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity.prototype, "oauth2AuthorizationCode", void 0);
    return GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity;
}(SpeakeasyBase));
export { GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity };
var GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest, _super);
    function GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest.prototype, "security", void 0);
    return GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest;
}(SpeakeasyBase));
export { GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest };
var GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse, _super);
    function GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse.prototype, "statusCode", void 0);
    return GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse;
}(SpeakeasyBase));
export { GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse };
