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
export var MessageEncodingEnum;
(function (MessageEncodingEnum) {
    MessageEncodingEnum["Text"] = "TEXT";
    MessageEncodingEnum["Unicode"] = "UNICODE";
    MessageEncodingEnum["Binary"] = "BINARY";
})(MessageEncodingEnum || (MessageEncodingEnum = {}));
export var MessageStatusSubtypeEnum;
(function (MessageStatusSubtypeEnum) {
    MessageStatusSubtypeEnum["Expired"] = "EXPIRED";
    MessageStatusSubtypeEnum["HandsetError"] = "HANDSET_ERROR";
    MessageStatusSubtypeEnum["Blocked"] = "BLOCKED";
    MessageStatusSubtypeEnum["NotSent"] = "NOT_SENT";
})(MessageStatusSubtypeEnum || (MessageStatusSubtypeEnum = {}));
export var MessageStatusTypeEnum;
(function (MessageStatusTypeEnum) {
    MessageStatusTypeEnum["Accepted"] = "ACCEPTED";
    MessageStatusTypeEnum["Scheduled"] = "SCHEDULED";
    MessageStatusTypeEnum["Sent"] = "SENT";
    MessageStatusTypeEnum["Delivered"] = "DELIVERED";
    MessageStatusTypeEnum["Unknown"] = "UNKNOWN";
    MessageStatusTypeEnum["Failed"] = "FAILED";
})(MessageStatusTypeEnum || (MessageStatusTypeEnum = {}));
// MessageStatus
/**
 * The status of the message
**/
var MessageStatus = /** @class */ (function (_super) {
    __extends(MessageStatus, _super);
    function MessageStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], MessageStatus.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subtype" }),
        __metadata("design:type", String)
    ], MessageStatus.prototype, "subtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MessageStatus.prototype, "type", void 0);
    return MessageStatus;
}(SpeakeasyBase));
export { MessageStatus };
// MessageSubmission
/**
 * Identifies the submission.
 *
**/
var MessageSubmission = /** @class */ (function (_super) {
    __extends(MessageSubmission, _super);
    function MessageSubmission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], MessageSubmission.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], MessageSubmission.prototype, "id", void 0);
    return MessageSubmission;
}(SpeakeasyBase));
export { MessageSubmission };
export var MessageTypeEnum;
(function (MessageTypeEnum) {
    MessageTypeEnum["Sent"] = "SENT";
    MessageTypeEnum["Received"] = "RECEIVED";
})(MessageTypeEnum || (MessageTypeEnum = {}));
var Message = /** @class */ (function (_super) {
    __extends(Message, _super);
    function Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", Object)
    ], Message.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditCost" }),
        __metadata("design:type", Number)
    ], Message.prototype, "creditCost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encoding" }),
        __metadata("design:type", String)
    ], Message.prototype, "encoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], Message.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Message.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageClass" }),
        __metadata("design:type", Number)
    ], Message.prototype, "messageClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberOfParts" }),
        __metadata("design:type", Number)
    ], Message.prototype, "numberOfParts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocolId" }),
        __metadata("design:type", Number)
    ], Message.prototype, "protocolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relatedSentMessageId" }),
        __metadata("design:type", String)
    ], Message.prototype, "relatedSentMessageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", MessageStatus)
    ], Message.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submission" }),
        __metadata("design:type", MessageSubmission)
    ], Message.prototype, "submission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], Message.prototype, "to", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Message.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userSuppliedId" }),
        __metadata("design:type", String)
    ], Message.prototype, "userSuppliedId", void 0);
    return Message;
}(SpeakeasyBase));
export { Message };
