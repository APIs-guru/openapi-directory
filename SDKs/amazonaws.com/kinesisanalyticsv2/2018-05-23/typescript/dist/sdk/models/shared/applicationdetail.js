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
import * as shared from "../shared";
import { ApplicationConfigurationDescription } from "./applicationconfigurationdescription";
import { ApplicationMaintenanceConfigurationDescription } from "./applicationmaintenanceconfigurationdescription";
import { ApplicationModeEnum } from "./applicationmodeenum";
import { ApplicationStatusEnum } from "./applicationstatusenum";
import { RuntimeEnvironmentEnum } from "./runtimeenvironmentenum";
// ApplicationDetail
/**
 * Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.
**/
var ApplicationDetail = /** @class */ (function (_super) {
    __extends(ApplicationDetail, _super);
    function ApplicationDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ApplicationARN" }),
        __metadata("design:type", String)
    ], ApplicationDetail.prototype, "applicationArn", void 0);
    __decorate([
        Metadata({ data: "json, name=ApplicationConfigurationDescription" }),
        __metadata("design:type", ApplicationConfigurationDescription)
    ], ApplicationDetail.prototype, "applicationConfigurationDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=ApplicationDescription" }),
        __metadata("design:type", String)
    ], ApplicationDetail.prototype, "applicationDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=ApplicationMaintenanceConfigurationDescription" }),
        __metadata("design:type", ApplicationMaintenanceConfigurationDescription)
    ], ApplicationDetail.prototype, "applicationMaintenanceConfigurationDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=ApplicationMode" }),
        __metadata("design:type", String)
    ], ApplicationDetail.prototype, "applicationMode", void 0);
    __decorate([
        Metadata({ data: "json, name=ApplicationName" }),
        __metadata("design:type", String)
    ], ApplicationDetail.prototype, "applicationName", void 0);
    __decorate([
        Metadata({ data: "json, name=ApplicationStatus" }),
        __metadata("design:type", String)
    ], ApplicationDetail.prototype, "applicationStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=ApplicationVersionId" }),
        __metadata("design:type", Number)
    ], ApplicationDetail.prototype, "applicationVersionId", void 0);
    __decorate([
        Metadata({ data: "json, name=ApplicationVersionRolledBackFrom" }),
        __metadata("design:type", Number)
    ], ApplicationDetail.prototype, "applicationVersionRolledBackFrom", void 0);
    __decorate([
        Metadata({ data: "json, name=ApplicationVersionRolledBackTo" }),
        __metadata("design:type", Number)
    ], ApplicationDetail.prototype, "applicationVersionRolledBackTo", void 0);
    __decorate([
        Metadata({ data: "json, name=ApplicationVersionUpdatedFrom" }),
        __metadata("design:type", Number)
    ], ApplicationDetail.prototype, "applicationVersionUpdatedFrom", void 0);
    __decorate([
        Metadata({ data: "json, name=CloudWatchLoggingOptionDescriptions", elemType: shared.CloudWatchLoggingOptionDescription }),
        __metadata("design:type", Array)
    ], ApplicationDetail.prototype, "cloudWatchLoggingOptionDescriptions", void 0);
    __decorate([
        Metadata({ data: "json, name=ConditionalToken" }),
        __metadata("design:type", String)
    ], ApplicationDetail.prototype, "conditionalToken", void 0);
    __decorate([
        Metadata({ data: "json, name=CreateTimestamp" }),
        __metadata("design:type", Date)
    ], ApplicationDetail.prototype, "createTimestamp", void 0);
    __decorate([
        Metadata({ data: "json, name=LastUpdateTimestamp" }),
        __metadata("design:type", Date)
    ], ApplicationDetail.prototype, "lastUpdateTimestamp", void 0);
    __decorate([
        Metadata({ data: "json, name=RuntimeEnvironment" }),
        __metadata("design:type", String)
    ], ApplicationDetail.prototype, "runtimeEnvironment", void 0);
    __decorate([
        Metadata({ data: "json, name=ServiceExecutionRole" }),
        __metadata("design:type", String)
    ], ApplicationDetail.prototype, "serviceExecutionRole", void 0);
    return ApplicationDetail;
}(SpeakeasyBase));
export { ApplicationDetail };
