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
import { Cycle } from "./cycle";
import { Metric } from "./metric";
// StandardsProfile
/**
 * A complex type that defines a seller profile.
**/
var StandardsProfile = /** @class */ (function (_super) {
    __extends(StandardsProfile, _super);
    function StandardsProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cycle" }),
        __metadata("design:type", Cycle)
    ], StandardsProfile.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultProgram" }),
        __metadata("design:type", Boolean)
    ], StandardsProfile.prototype, "defaultProgram", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evaluationReason" }),
        __metadata("design:type", String)
    ], StandardsProfile.prototype, "evaluationReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics", elemType: Metric }),
        __metadata("design:type", Array)
    ], StandardsProfile.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=program" }),
        __metadata("design:type", String)
    ], StandardsProfile.prototype, "program", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=standardsLevel" }),
        __metadata("design:type", String)
    ], StandardsProfile.prototype, "standardsLevel", void 0);
    return StandardsProfile;
}(SpeakeasyBase));
export { StandardsProfile };
