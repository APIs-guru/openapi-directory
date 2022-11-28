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
var TopicReplyMessage = /** @class */ (function (_super) {
    __extends(TopicReplyMessage, _super);
    function TopicReplyMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], TopicReplyMessage.prototype, "content", void 0);
    return TopicReplyMessage;
}(SpeakeasyBase));
export { TopicReplyMessage };
var TopicReply = /** @class */ (function (_super) {
    __extends(TopicReply, _super);
    function TopicReply() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", String)
    ], TopicReply.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author_is_deleted" }),
        __metadata("design:type", Boolean)
    ], TopicReply.prototype, "authorIsDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author_path_alias" }),
        __metadata("design:type", String)
    ], TopicReply.prototype, "authorPathAlias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorname" }),
        __metadata("design:type", String)
    ], TopicReply.prototype, "authorname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_delete" }),
        __metadata("design:type", Boolean)
    ], TopicReply.prototype, "canDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_edit" }),
        __metadata("design:type", Boolean)
    ], TopicReply.prototype, "canEdit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datecreate" }),
        __metadata("design:type", String)
    ], TopicReply.prototype, "datecreate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iconfarm" }),
        __metadata("design:type", String)
    ], TopicReply.prototype, "iconfarm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iconserver" }),
        __metadata("design:type", String)
    ], TopicReply.prototype, "iconserver", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TopicReply.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_pro" }),
        __metadata("design:type", Boolean)
    ], TopicReply.prototype, "isPro", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastedit" }),
        __metadata("design:type", String)
    ], TopicReply.prototype, "lastedit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", TopicReplyMessage)
    ], TopicReply.prototype, "message", void 0);
    return TopicReply;
}(SpeakeasyBase));
export { TopicReply };
