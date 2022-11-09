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
import { ConfirmationStatusEnum } from "./confirmationstatusenum";
import { DialogActionTypeEnum } from "./dialogactiontypeenum";
import { FulfillmentStateEnum } from "./fulfillmentstateenum";
// IntentSummary
/**
 * Provides information about the state of an intent. You can use this information to get the current state of an intent so that you can process the intent, or so that you can return the intent to its previous state.
**/
var IntentSummary = /** @class */ (function (_super) {
    __extends(IntentSummary, _super);
    function IntentSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=checkpointLabel" }),
        __metadata("design:type", String)
    ], IntentSummary.prototype, "checkpointLabel", void 0);
    __decorate([
        Metadata({ data: "json, name=confirmationStatus" }),
        __metadata("design:type", String)
    ], IntentSummary.prototype, "confirmationStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=dialogActionType" }),
        __metadata("design:type", String)
    ], IntentSummary.prototype, "dialogActionType", void 0);
    __decorate([
        Metadata({ data: "json, name=fulfillmentState" }),
        __metadata("design:type", String)
    ], IntentSummary.prototype, "fulfillmentState", void 0);
    __decorate([
        Metadata({ data: "json, name=intentName" }),
        __metadata("design:type", String)
    ], IntentSummary.prototype, "intentName", void 0);
    __decorate([
        Metadata({ data: "json, name=slotToElicit" }),
        __metadata("design:type", String)
    ], IntentSummary.prototype, "slotToElicit", void 0);
    __decorate([
        Metadata({ data: "json, name=slots" }),
        __metadata("design:type", Map)
    ], IntentSummary.prototype, "slots", void 0);
    return IntentSummary;
}(SpeakeasyBase));
export { IntentSummary };
