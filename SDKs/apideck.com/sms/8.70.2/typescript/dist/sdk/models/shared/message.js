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
import { CurrencyEnum } from "./currencyenum";
export var MessageDirectionEnum;
(function (MessageDirectionEnum) {
    MessageDirectionEnum["Inbound"] = "inbound";
    MessageDirectionEnum["OutboundApi"] = "outbound-api";
    MessageDirectionEnum["OutboundCall"] = "outbound-call";
    MessageDirectionEnum["OutboundReply"] = "outbound-reply";
    MessageDirectionEnum["Unknown"] = "unknown";
})(MessageDirectionEnum || (MessageDirectionEnum = {}));
// MessageError
/**
 * The error returned if your message status is failed or undelivered.
**/
var MessageError = /** @class */ (function (_super) {
    __extends(MessageError, _super);
    function MessageError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], MessageError.prototype, "code", void 0);
    __decorate([
        Metadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], MessageError.prototype, "message", void 0);
    return MessageError;
}(SpeakeasyBase));
export { MessageError };
// MessagePrice
/**
 * Price of the message.
**/
var MessagePrice = /** @class */ (function (_super) {
    __extends(MessagePrice, _super);
    function MessagePrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], MessagePrice.prototype, "currency", void 0);
    __decorate([
        Metadata({ data: "json, name=per_unit" }),
        __metadata("design:type", String)
    ], MessagePrice.prototype, "perUnit", void 0);
    __decorate([
        Metadata({ data: "json, name=total_amount" }),
        __metadata("design:type", String)
    ], MessagePrice.prototype, "totalAmount", void 0);
    return MessagePrice;
}(SpeakeasyBase));
export { MessagePrice };
export var MessageStatusEnum;
(function (MessageStatusEnum) {
    MessageStatusEnum["Accepted"] = "accepted";
    MessageStatusEnum["Scheduled"] = "scheduled";
    MessageStatusEnum["Canceled"] = "canceled";
    MessageStatusEnum["Queued"] = "queued";
    MessageStatusEnum["Sending"] = "sending";
    MessageStatusEnum["Sent"] = "sent";
    MessageStatusEnum["Failed"] = "failed";
    MessageStatusEnum["Delivered"] = "delivered";
    MessageStatusEnum["Undelivered"] = "undelivered";
    MessageStatusEnum["Receiving"] = "receiving";
    MessageStatusEnum["Received"] = "received";
    MessageStatusEnum["Read"] = "read";
})(MessageStatusEnum || (MessageStatusEnum = {}));
export var MessageMessageTypeEnum;
(function (MessageMessageTypeEnum) {
    MessageMessageTypeEnum["Sms"] = "sms";
    MessageMessageTypeEnum["Mms"] = "mms";
})(MessageMessageTypeEnum || (MessageMessageTypeEnum = {}));
var Message = /** @class */ (function (_super) {
    __extends(Message, _super);
    function Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], Message.prototype, "body", void 0);
    __decorate([
        Metadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Message.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], Message.prototype, "createdBy", void 0);
    __decorate([
        Metadata({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], Message.prototype, "direction", void 0);
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", MessageError)
    ], Message.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], Message.prototype, "from", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Message.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=messaging_service_id" }),
        __metadata("design:type", String)
    ], Message.prototype, "messagingServiceId", void 0);
    __decorate([
        Metadata({ data: "json, name=number_of_media_files" }),
        __metadata("design:type", Number)
    ], Message.prototype, "numberOfMediaFiles", void 0);
    __decorate([
        Metadata({ data: "json, name=number_of_units" }),
        __metadata("design:type", Number)
    ], Message.prototype, "numberOfUnits", void 0);
    __decorate([
        Metadata({ data: "json, name=price" }),
        __metadata("design:type", MessagePrice)
    ], Message.prototype, "price", void 0);
    __decorate([
        Metadata({ data: "json, name=reference" }),
        __metadata("design:type", String)
    ], Message.prototype, "reference", void 0);
    __decorate([
        Metadata({ data: "json, name=scheduled_at" }),
        __metadata("design:type", Date)
    ], Message.prototype, "scheduledAt", void 0);
    __decorate([
        Metadata({ data: "json, name=sent_at" }),
        __metadata("design:type", Date)
    ], Message.prototype, "sentAt", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Message.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=subject" }),
        __metadata("design:type", String)
    ], Message.prototype, "subject", void 0);
    __decorate([
        Metadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], Message.prototype, "to", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Message.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Message.prototype, "updatedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], Message.prototype, "updatedBy", void 0);
    __decorate([
        Metadata({ data: "json, name=webhook_url" }),
        __metadata("design:type", String)
    ], Message.prototype, "webhookUrl", void 0);
    return Message;
}(SpeakeasyBase));
export { Message };
