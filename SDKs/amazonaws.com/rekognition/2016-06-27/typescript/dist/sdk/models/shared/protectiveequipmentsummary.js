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
// ProtectiveEquipmentSummary
/**
 * <p>Summary information for required items of personal protective equipment (PPE) detected on persons by a call to <a>DetectProtectiveEquipment</a>. You specify the required type of PPE in the <code>SummarizationAttributes</code> (<a>ProtectiveEquipmentSummarizationAttributes</a>) input parameter. The summary includes which persons were detected wearing the required personal protective equipment (<code>PersonsWithRequiredEquipment</code>), which persons were detected as not wearing the required PPE (<code>PersonsWithoutRequiredEquipment</code>), and the persons in which a determination could not be made (<code>PersonsIndeterminate</code>).</p> <p>To get a total for each category, use the size of the field array. For example, to find out how many people were detected as wearing the specified PPE, use the size of the <code>PersonsWithRequiredEquipment</code> array. If you want to find out more about a person, such as the location (<a>BoundingBox</a>) of the person on the image, use the person ID in each array element. Each person ID matches the ID field of a <a>ProtectiveEquipmentPerson</a> object returned in the <code>Persons</code> array by <code>DetectProtectiveEquipment</code>.</p>
**/
var ProtectiveEquipmentSummary = /** @class */ (function (_super) {
    __extends(ProtectiveEquipmentSummary, _super);
    function ProtectiveEquipmentSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PersonsIndeterminate" }),
        __metadata("design:type", Array)
    ], ProtectiveEquipmentSummary.prototype, "personsIndeterminate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PersonsWithRequiredEquipment" }),
        __metadata("design:type", Array)
    ], ProtectiveEquipmentSummary.prototype, "personsWithRequiredEquipment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PersonsWithoutRequiredEquipment" }),
        __metadata("design:type", Array)
    ], ProtectiveEquipmentSummary.prototype, "personsWithoutRequiredEquipment", void 0);
    return ProtectiveEquipmentSummary;
}(SpeakeasyBase));
export { ProtectiveEquipmentSummary };
