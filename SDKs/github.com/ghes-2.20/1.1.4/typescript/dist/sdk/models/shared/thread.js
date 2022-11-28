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
import { MinimalRepository } from "./minimalrepository";
var ThreadSubject = /** @class */ (function (_super) {
    __extends(ThreadSubject, _super);
    function ThreadSubject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latest_comment_url" }),
        __metadata("design:type", String)
    ], ThreadSubject.prototype, "latestCommentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ThreadSubject.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ThreadSubject.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ThreadSubject.prototype, "url", void 0);
    return ThreadSubject;
}(SpeakeasyBase));
export { ThreadSubject };
// Thread
/**
 * Thread
**/
var Thread = /** @class */ (function (_super) {
    __extends(Thread, _super);
    function Thread() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Thread.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_read_at" }),
        __metadata("design:type", String)
    ], Thread.prototype, "lastReadAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], Thread.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository" }),
        __metadata("design:type", MinimalRepository)
    ], Thread.prototype, "repository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subject" }),
        __metadata("design:type", ThreadSubject)
    ], Thread.prototype, "subject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscription_url" }),
        __metadata("design:type", String)
    ], Thread.prototype, "subscriptionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unread" }),
        __metadata("design:type", Boolean)
    ], Thread.prototype, "unread", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], Thread.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Thread.prototype, "url", void 0);
    return Thread;
}(SpeakeasyBase));
export { Thread };
