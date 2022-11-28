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
import { AssociationOverview } from "./associationoverview";
import { Target } from "./target";
// Association
/**
 * Describes an association of a Amazon Web Services Systems Manager document (SSM document) and an instance.
**/
var Association = /** @class */ (function (_super) {
    __extends(Association, _super);
    function Association() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssociationId" }),
        __metadata("design:type", String)
    ], Association.prototype, "associationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssociationName" }),
        __metadata("design:type", String)
    ], Association.prototype, "associationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssociationVersion" }),
        __metadata("design:type", String)
    ], Association.prototype, "associationVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentVersion" }),
        __metadata("design:type", String)
    ], Association.prototype, "documentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceId" }),
        __metadata("design:type", String)
    ], Association.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastExecutionDate" }),
        __metadata("design:type", Date)
    ], Association.prototype, "lastExecutionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Association.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Overview" }),
        __metadata("design:type", AssociationOverview)
    ], Association.prototype, "overview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScheduleExpression" }),
        __metadata("design:type", String)
    ], Association.prototype, "scheduleExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target }),
        __metadata("design:type", Array)
    ], Association.prototype, "targets", void 0);
    return Association;
}(SpeakeasyBase));
export { Association };
