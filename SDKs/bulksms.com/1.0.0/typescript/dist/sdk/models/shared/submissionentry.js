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
export var SubmissionEntryDeliveryReportsEnum;
(function (SubmissionEntryDeliveryReportsEnum) {
    SubmissionEntryDeliveryReportsEnum["All"] = "ALL";
    SubmissionEntryDeliveryReportsEnum["Errors"] = "ERRORS";
    SubmissionEntryDeliveryReportsEnum["None"] = "NONE";
})(SubmissionEntryDeliveryReportsEnum || (SubmissionEntryDeliveryReportsEnum = {}));
export var SubmissionEntryEncodingEnum;
(function (SubmissionEntryEncodingEnum) {
    SubmissionEntryEncodingEnum["Text"] = "TEXT";
    SubmissionEntryEncodingEnum["Unicode"] = "UNICODE";
    SubmissionEntryEncodingEnum["Binary"] = "BINARY";
})(SubmissionEntryEncodingEnum || (SubmissionEntryEncodingEnum = {}));
export var SubmissionEntryFromTypeEnum;
(function (SubmissionEntryFromTypeEnum) {
    SubmissionEntryFromTypeEnum["International"] = "INTERNATIONAL";
    SubmissionEntryFromTypeEnum["Alphanumeric"] = "ALPHANUMERIC";
    SubmissionEntryFromTypeEnum["Shortcode"] = "SHORTCODE";
    SubmissionEntryFromTypeEnum["Repliable"] = "REPLIABLE";
})(SubmissionEntryFromTypeEnum || (SubmissionEntryFromTypeEnum = {}));
// SubmissionEntryFrom
/**
 * Identifies the sender.
 *
 * Instead of a structured object, you can supply a string value here.
 * If you do this, the `type` of the sender is derived to be either INTERNATIONAL or ALPHANUMERIC.  If the value does not begin with a `+` and it contains at least one character that is not a digit, the type is detected as ALPHANUMERIC. Otherwise, the type is detected as INTERNATIONAL.
 *
**/
var SubmissionEntryFrom = /** @class */ (function (_super) {
    __extends(SubmissionEntryFrom, _super);
    function SubmissionEntryFrom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], SubmissionEntryFrom.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SubmissionEntryFrom.prototype, "type", void 0);
    return SubmissionEntryFrom;
}(SpeakeasyBase));
export { SubmissionEntryFrom };
export var SubmissionEntryMessageClassEnum;
(function (SubmissionEntryMessageClassEnum) {
    SubmissionEntryMessageClassEnum["FlashSms"] = "FLASH_SMS";
    SubmissionEntryMessageClassEnum["MeSpecific"] = "ME_SPECIFIC";
    SubmissionEntryMessageClassEnum["SimSpecific"] = "SIM_SPECIFIC";
    SubmissionEntryMessageClassEnum["TeSpecific"] = "TE_SPECIFIC";
})(SubmissionEntryMessageClassEnum || (SubmissionEntryMessageClassEnum = {}));
export var SubmissionEntryProtocolIdEnum;
(function (SubmissionEntryProtocolIdEnum) {
    SubmissionEntryProtocolIdEnum["Implicit"] = "IMPLICIT";
    SubmissionEntryProtocolIdEnum["ShortMessageType0"] = "SHORT_MESSAGE_TYPE_0";
    SubmissionEntryProtocolIdEnum["ReplaceMessage1"] = "REPLACE_MESSAGE_1";
    SubmissionEntryProtocolIdEnum["ReplaceMessage2"] = "REPLACE_MESSAGE_2";
    SubmissionEntryProtocolIdEnum["ReplaceMessage3"] = "REPLACE_MESSAGE_3";
    SubmissionEntryProtocolIdEnum["ReplaceMessage4"] = "REPLACE_MESSAGE_4";
    SubmissionEntryProtocolIdEnum["ReplaceMessage5"] = "REPLACE_MESSAGE_5";
    SubmissionEntryProtocolIdEnum["ReplaceMessage6"] = "REPLACE_MESSAGE_6";
    SubmissionEntryProtocolIdEnum["ReplaceMessage7"] = "REPLACE_MESSAGE_7";
    SubmissionEntryProtocolIdEnum["ReturnCall"] = "RETURN_CALL";
    SubmissionEntryProtocolIdEnum["MeDownload"] = "ME_DOWNLOAD";
    SubmissionEntryProtocolIdEnum["MeDepersonalize"] = "ME_DEPERSONALIZE";
    SubmissionEntryProtocolIdEnum["SimDownload"] = "SIM_DOWNLOAD";
})(SubmissionEntryProtocolIdEnum || (SubmissionEntryProtocolIdEnum = {}));
export var SubmissionEntryRoutingGroupEnum;
(function (SubmissionEntryRoutingGroupEnum) {
    SubmissionEntryRoutingGroupEnum["Economy"] = "ECONOMY";
    SubmissionEntryRoutingGroupEnum["Standard"] = "STANDARD";
    SubmissionEntryRoutingGroupEnum["Premium"] = "PREMIUM";
})(SubmissionEntryRoutingGroupEnum || (SubmissionEntryRoutingGroupEnum = {}));
export var SubmissionEntryToTypeEnum;
(function (SubmissionEntryToTypeEnum) {
    SubmissionEntryToTypeEnum["International"] = "INTERNATIONAL";
    SubmissionEntryToTypeEnum["Group"] = "GROUP";
})(SubmissionEntryToTypeEnum || (SubmissionEntryToTypeEnum = {}));
var SubmissionEntryTo = /** @class */ (function (_super) {
    __extends(SubmissionEntryTo, _super);
    function SubmissionEntryTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], SubmissionEntryTo.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields" }),
        __metadata("design:type", Array)
    ], SubmissionEntryTo.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SubmissionEntryTo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SubmissionEntryTo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SubmissionEntryTo.prototype, "type", void 0);
    return SubmissionEntryTo;
}(SpeakeasyBase));
export { SubmissionEntryTo };
// SubmissionEntry
/**
 * An object that you use when posting messages.
**/
var SubmissionEntry = /** @class */ (function (_super) {
    __extends(SubmissionEntry, _super);
    function SubmissionEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], SubmissionEntry.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryReports" }),
        __metadata("design:type", String)
    ], SubmissionEntry.prototype, "deliveryReports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encoding" }),
        __metadata("design:type", String)
    ], SubmissionEntry.prototype, "encoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", SubmissionEntryFrom)
    ], SubmissionEntry.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longMessageMaxParts" }),
        __metadata("design:type", Number)
    ], SubmissionEntry.prototype, "longMessageMaxParts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageClass" }),
        __metadata("design:type", String)
    ], SubmissionEntry.prototype, "messageClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocolId" }),
        __metadata("design:type", String)
    ], SubmissionEntry.prototype, "protocolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routingGroup" }),
        __metadata("design:type", String)
    ], SubmissionEntry.prototype, "routingGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to", elemType: SubmissionEntryTo }),
        __metadata("design:type", Array)
    ], SubmissionEntry.prototype, "to", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userSuppliedId" }),
        __metadata("design:type", String)
    ], SubmissionEntry.prototype, "userSuppliedId", void 0);
    return SubmissionEntry;
}(SpeakeasyBase));
export { SubmissionEntry };
