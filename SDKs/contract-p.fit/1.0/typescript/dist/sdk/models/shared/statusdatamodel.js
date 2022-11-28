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
var StatusDataModel = /** @class */ (function (_super) {
    __extends(StatusDataModel, _super);
    function StatusDataModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], StatusDataModel.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Boolean)
    ], StatusDataModel.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=escalate" }),
        __metadata("design:type", Boolean)
    ], StatusDataModel.prototype, "escalate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feedback" }),
        __metadata("design:type", Boolean)
    ], StatusDataModel.prototype, "feedback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lock" }),
        __metadata("design:type", Boolean)
    ], StatusDataModel.prototype, "lock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ready_accepted" }),
        __metadata("design:type", Boolean)
    ], StatusDataModel.prototype, "readyAccepted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ready_attempts" }),
        __metadata("design:type", Number)
    ], StatusDataModel.prototype, "readyAttempts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reject" }),
        __metadata("design:type", Boolean)
    ], StatusDataModel.prototype, "reject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reject_accepted" }),
        __metadata("design:type", Boolean)
    ], StatusDataModel.prototype, "rejectAccepted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reject_attempts" }),
        __metadata("design:type", Number)
    ], StatusDataModel.prototype, "rejectAttempts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampling" }),
        __metadata("design:type", Boolean)
    ], StatusDataModel.prototype, "sampling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submit_accepted" }),
        __metadata("design:type", Boolean)
    ], StatusDataModel.prototype, "submitAccepted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submit_attempts" }),
        __metadata("design:type", Number)
    ], StatusDataModel.prototype, "submitAttempts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], StatusDataModel.prototype, "success", void 0);
    return StatusDataModel;
}(SpeakeasyBase));
export { StatusDataModel };
