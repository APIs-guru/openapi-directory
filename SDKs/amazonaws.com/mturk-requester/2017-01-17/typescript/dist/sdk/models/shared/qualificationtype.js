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
import { QualificationTypeStatusEnum } from "./qualificationtypestatusenum";
// QualificationType
/**
 *  The QualificationType data structure represents a Qualification type, a description of a property of a Worker that must match the requirements of a HIT for the Worker to be able to accept the HIT. The type also describes how a Worker can obtain a Qualification of that type, such as through a Qualification test.
**/
var QualificationType = /** @class */ (function (_super) {
    __extends(QualificationType, _super);
    function QualificationType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnswerKey" }),
        __metadata("design:type", String)
    ], QualificationType.prototype, "answerKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoGranted" }),
        __metadata("design:type", Boolean)
    ], QualificationType.prototype, "autoGranted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoGrantedValue" }),
        __metadata("design:type", Number)
    ], QualificationType.prototype, "autoGrantedValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], QualificationType.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], QualificationType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsRequestable" }),
        __metadata("design:type", Boolean)
    ], QualificationType.prototype, "isRequestable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Keywords" }),
        __metadata("design:type", String)
    ], QualificationType.prototype, "keywords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], QualificationType.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=QualificationTypeId" }),
        __metadata("design:type", String)
    ], QualificationType.prototype, "qualificationTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=QualificationTypeStatus" }),
        __metadata("design:type", String)
    ], QualificationType.prototype, "qualificationTypeStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RetryDelayInSeconds" }),
        __metadata("design:type", Number)
    ], QualificationType.prototype, "retryDelayInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Test" }),
        __metadata("design:type", String)
    ], QualificationType.prototype, "test", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TestDurationInSeconds" }),
        __metadata("design:type", Number)
    ], QualificationType.prototype, "testDurationInSeconds", void 0);
    return QualificationType;
}(SpeakeasyBase));
export { QualificationType };
