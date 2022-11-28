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
export var InvoiceRecurringApiModelDayOfWeekEnum;
(function (InvoiceRecurringApiModelDayOfWeekEnum) {
    InvoiceRecurringApiModelDayOfWeekEnum["Sunday"] = "Sunday";
    InvoiceRecurringApiModelDayOfWeekEnum["Monday"] = "Monday";
    InvoiceRecurringApiModelDayOfWeekEnum["Tuesday"] = "Tuesday";
    InvoiceRecurringApiModelDayOfWeekEnum["Wednesday"] = "Wednesday";
    InvoiceRecurringApiModelDayOfWeekEnum["Thursday"] = "Thursday";
    InvoiceRecurringApiModelDayOfWeekEnum["Friday"] = "Friday";
    InvoiceRecurringApiModelDayOfWeekEnum["Saturday"] = "Saturday";
})(InvoiceRecurringApiModelDayOfWeekEnum || (InvoiceRecurringApiModelDayOfWeekEnum = {}));
export var InvoiceRecurringApiModelRecurrancePatternEnum;
(function (InvoiceRecurringApiModelRecurrancePatternEnum) {
    InvoiceRecurringApiModelRecurrancePatternEnum["Daily"] = "Daily";
    InvoiceRecurringApiModelRecurrancePatternEnum["Weekly"] = "Weekly";
    InvoiceRecurringApiModelRecurrancePatternEnum["Monthly"] = "Monthly";
    InvoiceRecurringApiModelRecurrancePatternEnum["Yearly"] = "Yearly";
})(InvoiceRecurringApiModelRecurrancePatternEnum || (InvoiceRecurringApiModelRecurrancePatternEnum = {}));
export var InvoiceRecurringApiModelStatusEnum;
(function (InvoiceRecurringApiModelStatusEnum) {
    InvoiceRecurringApiModelStatusEnum["Pending"] = "Pending";
    InvoiceRecurringApiModelStatusEnum["Active"] = "Active";
    InvoiceRecurringApiModelStatusEnum["Cancelled"] = "Cancelled";
    InvoiceRecurringApiModelStatusEnum["Finished"] = "Finished";
})(InvoiceRecurringApiModelStatusEnum || (InvoiceRecurringApiModelStatusEnum = {}));
// InvoiceRecurringApiModel
/**
 * Definition of invoice recurring profile
**/
var InvoiceRecurringApiModel = /** @class */ (function (_super) {
    __extends(InvoiceRecurringApiModel, _super);
    function InvoiceRecurringApiModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DayOfMonth" }),
        __metadata("design:type", Number)
    ], InvoiceRecurringApiModel.prototype, "dayOfMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DayOfWeek" }),
        __metadata("design:type", String)
    ], InvoiceRecurringApiModel.prototype, "dayOfWeek", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DueDateInDays" }),
        __metadata("design:type", Number)
    ], InvoiceRecurringApiModel.prototype, "dueDateInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndOfRecurrance" }),
        __metadata("design:type", Date)
    ], InvoiceRecurringApiModel.prototype, "endOfRecurrance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Month" }),
        __metadata("design:type", Number)
    ], InvoiceRecurringApiModel.prototype, "month", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecurrancePattern" }),
        __metadata("design:type", String)
    ], InvoiceRecurringApiModel.prototype, "recurrancePattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecurranceValue" }),
        __metadata("design:type", Number)
    ], InvoiceRecurringApiModel.prototype, "recurranceValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartOfRecurrance" }),
        __metadata("design:type", Date)
    ], InvoiceRecurringApiModel.prototype, "startOfRecurrance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], InvoiceRecurringApiModel.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], InvoiceRecurringApiModel.prototype, "title", void 0);
    return InvoiceRecurringApiModel;
}(SpeakeasyBase));
export { InvoiceRecurringApiModel };
