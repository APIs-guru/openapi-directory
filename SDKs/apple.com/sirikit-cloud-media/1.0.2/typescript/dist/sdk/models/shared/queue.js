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
import { Content } from "./content";
import { PlayMediaControl } from "./playmediacontrol";
import { QueuePlayPointer } from "./queueplaypointer";
var Queue = /** @class */ (function (_super) {
    __extends(Queue, _super);
    function Queue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content", elemType: Content }),
        __metadata("design:type", Array)
    ], Queue.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentItemsCount" }),
        __metadata("design:type", Number)
    ], Queue.prototype, "contentItemsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=controls", elemType: PlayMediaControl }),
        __metadata("design:type", Map)
    ], Queue.prototype, "controls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identifier" }),
        __metadata("design:type", String)
    ], Queue.prototype, "identifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertPointer" }),
        __metadata("design:type", Object)
    ], Queue.prototype, "insertPointer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextContentUrl" }),
        __metadata("design:type", String)
    ], Queue.prototype, "nextContentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playPointer" }),
        __metadata("design:type", QueuePlayPointer)
    ], Queue.prototype, "playPointer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prerollSeconds" }),
        __metadata("design:type", Number)
    ], Queue.prototype, "prerollSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previousContentUrl" }),
        __metadata("design:type", String)
    ], Queue.prototype, "previousContentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skipsRemaining" }),
        __metadata("design:type", Number)
    ], Queue.prototype, "skipsRemaining", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], Queue.prototype, "version", void 0);
    return Queue;
}(SpeakeasyBase));
export { Queue };
