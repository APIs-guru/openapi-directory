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
import { Actor } from "./actor";
import { IssueComment } from "./issuecomment";
import { IssueSimple } from "./issuesimple";
var EventPayloadPages = /** @class */ (function (_super) {
    __extends(EventPayloadPages, _super);
    function EventPayloadPages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], EventPayloadPages.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], EventPayloadPages.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_name" }),
        __metadata("design:type", String)
    ], EventPayloadPages.prototype, "pageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], EventPayloadPages.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], EventPayloadPages.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], EventPayloadPages.prototype, "title", void 0);
    return EventPayloadPages;
}(SpeakeasyBase));
export { EventPayloadPages };
var EventPayload = /** @class */ (function (_super) {
    __extends(EventPayload, _super);
    function EventPayload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], EventPayload.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", IssueComment)
    ], EventPayload.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue" }),
        __metadata("design:type", IssueSimple)
    ], EventPayload.prototype, "issue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages", elemType: EventPayloadPages }),
        __metadata("design:type", Array)
    ], EventPayload.prototype, "pages", void 0);
    return EventPayload;
}(SpeakeasyBase));
export { EventPayload };
var EventRepo = /** @class */ (function (_super) {
    __extends(EventRepo, _super);
    function EventRepo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], EventRepo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EventRepo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], EventRepo.prototype, "url", void 0);
    return EventRepo;
}(SpeakeasyBase));
export { EventRepo };
// Event
/**
 * Event
**/
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actor" }),
        __metadata("design:type", Actor)
    ], Event.prototype, "actor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Event.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Event.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=org" }),
        __metadata("design:type", Actor)
    ], Event.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload" }),
        __metadata("design:type", EventPayload)
    ], Event.prototype, "payload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "public", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repo" }),
        __metadata("design:type", EventRepo)
    ], Event.prototype, "repo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Event.prototype, "type", void 0);
    return Event;
}(SpeakeasyBase));
export { Event };
