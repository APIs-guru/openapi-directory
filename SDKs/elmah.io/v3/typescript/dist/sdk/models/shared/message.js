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
import { Breadcrumb } from "./breadcrumb";
import { Item } from "./item";
var Message = /** @class */ (function (_super) {
    __extends(Message, _super);
    function Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=application" }),
        __metadata("design:type", String)
    ], Message.prototype, "application", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=breadcrumbs", elemType: Breadcrumb }),
        __metadata("design:type", Array)
    ], Message.prototype, "breadcrumbs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], Message.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookies", elemType: Item }),
        __metadata("design:type", Array)
    ], Message.prototype, "cookies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=correlationId" }),
        __metadata("design:type", String)
    ], Message.prototype, "correlationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: Item }),
        __metadata("design:type", Array)
    ], Message.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateTime" }),
        __metadata("design:type", Date)
    ], Message.prototype, "dateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], Message.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=form", elemType: Item }),
        __metadata("design:type", Array)
    ], Message.prototype, "form", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostname" }),
        __metadata("design:type", String)
    ], Message.prototype, "hostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Message.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], Message.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryString", elemType: Item }),
        __metadata("design:type", Array)
    ], Message.prototype, "queryString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverVariables", elemType: Item }),
        __metadata("design:type", Array)
    ], Message.prototype, "serverVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], Message.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], Message.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusCode" }),
        __metadata("design:type", Number)
    ], Message.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Message.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=titleTemplate" }),
        __metadata("design:type", String)
    ], Message.prototype, "titleTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Message.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Message.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], Message.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], Message.prototype, "version", void 0);
    return Message;
}(SpeakeasyBase));
export { Message };
