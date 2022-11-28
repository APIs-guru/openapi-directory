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
// Page
/**
 * Incident Manager engaging a contact's contact channel.
**/
var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContactArn" }),
        __metadata("design:type", String)
    ], Page.prototype, "contactArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeliveryTime" }),
        __metadata("design:type", Date)
    ], Page.prototype, "deliveryTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EngagementArn" }),
        __metadata("design:type", String)
    ], Page.prototype, "engagementArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncidentId" }),
        __metadata("design:type", String)
    ], Page.prototype, "incidentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PageArn" }),
        __metadata("design:type", String)
    ], Page.prototype, "pageArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadTime" }),
        __metadata("design:type", Date)
    ], Page.prototype, "readTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Sender" }),
        __metadata("design:type", String)
    ], Page.prototype, "sender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SentTime" }),
        __metadata("design:type", Date)
    ], Page.prototype, "sentTime", void 0);
    return Page;
}(SpeakeasyBase));
export { Page };
