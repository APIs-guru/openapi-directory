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
export var GoogleCloudApigeeV1InstancePeeringCidrRangeEnum;
(function (GoogleCloudApigeeV1InstancePeeringCidrRangeEnum) {
    GoogleCloudApigeeV1InstancePeeringCidrRangeEnum["CidrRangeUnspecified"] = "CIDR_RANGE_UNSPECIFIED";
    GoogleCloudApigeeV1InstancePeeringCidrRangeEnum["Slash16"] = "SLASH_16";
    GoogleCloudApigeeV1InstancePeeringCidrRangeEnum["Slash17"] = "SLASH_17";
    GoogleCloudApigeeV1InstancePeeringCidrRangeEnum["Slash18"] = "SLASH_18";
    GoogleCloudApigeeV1InstancePeeringCidrRangeEnum["Slash19"] = "SLASH_19";
    GoogleCloudApigeeV1InstancePeeringCidrRangeEnum["Slash20"] = "SLASH_20";
    GoogleCloudApigeeV1InstancePeeringCidrRangeEnum["Slash22"] = "SLASH_22";
    GoogleCloudApigeeV1InstancePeeringCidrRangeEnum["Slash23"] = "SLASH_23";
})(GoogleCloudApigeeV1InstancePeeringCidrRangeEnum || (GoogleCloudApigeeV1InstancePeeringCidrRangeEnum = {}));
export var GoogleCloudApigeeV1InstanceStateEnum;
(function (GoogleCloudApigeeV1InstanceStateEnum) {
    GoogleCloudApigeeV1InstanceStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudApigeeV1InstanceStateEnum["Creating"] = "CREATING";
    GoogleCloudApigeeV1InstanceStateEnum["Active"] = "ACTIVE";
    GoogleCloudApigeeV1InstanceStateEnum["Deleting"] = "DELETING";
    GoogleCloudApigeeV1InstanceStateEnum["Updating"] = "UPDATING";
})(GoogleCloudApigeeV1InstanceStateEnum || (GoogleCloudApigeeV1InstanceStateEnum = {}));
// GoogleCloudApigeeV1Instance
/**
 * Apigee runtime instance.
**/
var GoogleCloudApigeeV1Instance = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1Instance, _super);
    function GoogleCloudApigeeV1Instance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumerAcceptList" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1Instance.prototype, "consumerAcceptList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Instance.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Instance.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskEncryptionKeyName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Instance.prototype, "diskEncryptionKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Instance.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Instance.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipRange" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Instance.prototype, "ipRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedAt" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Instance.prototype, "lastModifiedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Instance.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Instance.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=peeringCidrRange" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Instance.prototype, "peeringCidrRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Instance.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeVersion" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Instance.prototype, "runtimeVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAttachment" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Instance.prototype, "serviceAttachment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Instance.prototype, "state", void 0);
    return GoogleCloudApigeeV1Instance;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1Instance };
// GoogleCloudApigeeV1InstanceInput
/**
 * Apigee runtime instance.
**/
var GoogleCloudApigeeV1InstanceInput = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1InstanceInput, _super);
    function GoogleCloudApigeeV1InstanceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumerAcceptList" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1InstanceInput.prototype, "consumerAcceptList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1InstanceInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskEncryptionKeyName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1InstanceInput.prototype, "diskEncryptionKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1InstanceInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipRange" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1InstanceInput.prototype, "ipRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1InstanceInput.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1InstanceInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=peeringCidrRange" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1InstanceInput.prototype, "peeringCidrRange", void 0);
    return GoogleCloudApigeeV1InstanceInput;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1InstanceInput };
