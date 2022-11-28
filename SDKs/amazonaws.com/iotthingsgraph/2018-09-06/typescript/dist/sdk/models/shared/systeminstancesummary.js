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
import { SystemInstanceDeploymentStatusEnum } from "./systeminstancedeploymentstatusenum";
import { DeploymentTargetEnum } from "./deploymenttargetenum";
// SystemInstanceSummary
/**
 * An object that contains summary information about a system instance.
**/
var SystemInstanceSummary = /** @class */ (function (_super) {
    __extends(SystemInstanceSummary, _super);
    function SystemInstanceSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], SystemInstanceSummary.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], SystemInstanceSummary.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=greengrassGroupId" }),
        __metadata("design:type", String)
    ], SystemInstanceSummary.prototype, "greengrassGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=greengrassGroupName" }),
        __metadata("design:type", String)
    ], SystemInstanceSummary.prototype, "greengrassGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=greengrassGroupVersionId" }),
        __metadata("design:type", String)
    ], SystemInstanceSummary.prototype, "greengrassGroupVersionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SystemInstanceSummary.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SystemInstanceSummary.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", String)
    ], SystemInstanceSummary.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], SystemInstanceSummary.prototype, "updatedAt", void 0);
    return SystemInstanceSummary;
}(SpeakeasyBase));
export { SystemInstanceSummary };
