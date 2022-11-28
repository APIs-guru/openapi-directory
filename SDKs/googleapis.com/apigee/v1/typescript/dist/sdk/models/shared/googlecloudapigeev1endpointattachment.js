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
export var GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum;
(function (GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum) {
    GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum["ConnectionStateUnspecified"] = "CONNECTION_STATE_UNSPECIFIED";
    GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum["Unavailable"] = "UNAVAILABLE";
    GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum["Pending"] = "PENDING";
    GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum["Accepted"] = "ACCEPTED";
    GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum["Rejected"] = "REJECTED";
    GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum["Closed"] = "CLOSED";
    GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum["Frozen"] = "FROZEN";
    GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum["NeedsAttention"] = "NEEDS_ATTENTION";
})(GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum || (GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum = {}));
export var GoogleCloudApigeeV1EndpointAttachmentStateEnum;
(function (GoogleCloudApigeeV1EndpointAttachmentStateEnum) {
    GoogleCloudApigeeV1EndpointAttachmentStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudApigeeV1EndpointAttachmentStateEnum["Creating"] = "CREATING";
    GoogleCloudApigeeV1EndpointAttachmentStateEnum["Active"] = "ACTIVE";
    GoogleCloudApigeeV1EndpointAttachmentStateEnum["Deleting"] = "DELETING";
    GoogleCloudApigeeV1EndpointAttachmentStateEnum["Updating"] = "UPDATING";
})(GoogleCloudApigeeV1EndpointAttachmentStateEnum || (GoogleCloudApigeeV1EndpointAttachmentStateEnum = {}));
// GoogleCloudApigeeV1EndpointAttachmentInput
/**
 * Apigee endpoint attachment. For more information, see [Southbound networking patterns] (https://cloud.google.com/apigee/docs/api-platform/architecture/southbound-networking-patterns-endpoints).
**/
var GoogleCloudApigeeV1EndpointAttachmentInput = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1EndpointAttachmentInput, _super);
    function GoogleCloudApigeeV1EndpointAttachmentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1EndpointAttachmentInput.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1EndpointAttachmentInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAttachment" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1EndpointAttachmentInput.prototype, "serviceAttachment", void 0);
    return GoogleCloudApigeeV1EndpointAttachmentInput;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1EndpointAttachmentInput };
// GoogleCloudApigeeV1EndpointAttachment
/**
 * Apigee endpoint attachment. For more information, see [Southbound networking patterns] (https://cloud.google.com/apigee/docs/api-platform/architecture/southbound-networking-patterns-endpoints).
**/
var GoogleCloudApigeeV1EndpointAttachment = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1EndpointAttachment, _super);
    function GoogleCloudApigeeV1EndpointAttachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectionState" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1EndpointAttachment.prototype, "connectionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1EndpointAttachment.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1EndpointAttachment.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1EndpointAttachment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAttachment" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1EndpointAttachment.prototype, "serviceAttachment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1EndpointAttachment.prototype, "state", void 0);
    return GoogleCloudApigeeV1EndpointAttachment;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1EndpointAttachment };
