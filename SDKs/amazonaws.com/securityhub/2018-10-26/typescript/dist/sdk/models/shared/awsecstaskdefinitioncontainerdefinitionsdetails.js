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
import { AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails } from "./awsecstaskdefinitioncontainerdefinitionsdependsondetails";
import { AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails } from "./awsecstaskdefinitioncontainerdefinitionsenvironmentdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails } from "./awsecstaskdefinitioncontainerdefinitionsenvironmentfilesdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails } from "./awsecstaskdefinitioncontainerdefinitionsextrahostsdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails } from "./awsecstaskdefinitioncontainerdefinitionsfirelensconfigurationdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails } from "./awsecstaskdefinitioncontainerdefinitionshealthcheckdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails } from "./awsecstaskdefinitioncontainerdefinitionslinuxparametersdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails } from "./awsecstaskdefinitioncontainerdefinitionslogconfigurationdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails } from "./awsecstaskdefinitioncontainerdefinitionsmountpointsdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails } from "./awsecstaskdefinitioncontainerdefinitionsportmappingsdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails } from "./awsecstaskdefinitioncontainerdefinitionsrepositorycredentialsdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails } from "./awsecstaskdefinitioncontainerdefinitionsresourcerequirementsdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails } from "./awsecstaskdefinitioncontainerdefinitionssecretsdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails } from "./awsecstaskdefinitioncontainerdefinitionssystemcontrolsdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails } from "./awsecstaskdefinitioncontainerdefinitionsulimitsdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails } from "./awsecstaskdefinitioncontainerdefinitionsvolumesfromdetails";
// AwsEcsTaskDefinitionContainerDefinitionsDetails
/**
 * A container definition that describes a container in the task.
**/
var AwsEcsTaskDefinitionContainerDefinitionsDetails = /** @class */ (function (_super) {
    __extends(AwsEcsTaskDefinitionContainerDefinitionsDetails, _super);
    function AwsEcsTaskDefinitionContainerDefinitionsDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Command" }),
        __metadata("design:type", Array)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Cpu" }),
        __metadata("design:type", Number)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "cpu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DependsOn", elemType: AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails }),
        __metadata("design:type", Array)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "dependsOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisableNetworking" }),
        __metadata("design:type", Boolean)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "disableNetworking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DnsSearchDomains" }),
        __metadata("design:type", Array)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "dnsSearchDomains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DnsServers" }),
        __metadata("design:type", Array)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "dnsServers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DockerLabels" }),
        __metadata("design:type", Map)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "dockerLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DockerSecurityOptions" }),
        __metadata("design:type", Array)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "dockerSecurityOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EntryPoint" }),
        __metadata("design:type", Array)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "entryPoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Environment", elemType: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails }),
        __metadata("design:type", Array)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnvironmentFiles", elemType: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails }),
        __metadata("design:type", Array)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "environmentFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Essential" }),
        __metadata("design:type", Boolean)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "essential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtraHosts", elemType: AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails }),
        __metadata("design:type", Array)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "extraHosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirelensConfiguration" }),
        __metadata("design:type", AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "firelensConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HealthCheck" }),
        __metadata("design:type", AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "healthCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Hostname" }),
        __metadata("design:type", String)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "hostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Image" }),
        __metadata("design:type", String)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Interactive" }),
        __metadata("design:type", Boolean)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "interactive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Array)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LinuxParameters" }),
        __metadata("design:type", AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "linuxParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogConfiguration" }),
        __metadata("design:type", AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "logConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Memory" }),
        __metadata("design:type", Number)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "memory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MemoryReservation" }),
        __metadata("design:type", Number)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "memoryReservation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MountPoints", elemType: AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails }),
        __metadata("design:type", Array)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "mountPoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PortMappings", elemType: AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails }),
        __metadata("design:type", Array)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "portMappings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Privileged" }),
        __metadata("design:type", Boolean)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "privileged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PseudoTerminal" }),
        __metadata("design:type", Boolean)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "pseudoTerminal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadonlyRootFilesystem" }),
        __metadata("design:type", Boolean)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "readonlyRootFilesystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RepositoryCredentials" }),
        __metadata("design:type", AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "repositoryCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceRequirements", elemType: AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails }),
        __metadata("design:type", Array)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "resourceRequirements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Secrets", elemType: AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails }),
        __metadata("design:type", Array)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "secrets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTimeout" }),
        __metadata("design:type", Number)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "startTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopTimeout" }),
        __metadata("design:type", Number)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "stopTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SystemControls", elemType: AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails }),
        __metadata("design:type", Array)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "systemControls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ulimits", elemType: AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails }),
        __metadata("design:type", Array)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "ulimits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=User" }),
        __metadata("design:type", String)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VolumesFrom", elemType: AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails }),
        __metadata("design:type", Array)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "volumesFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkingDirectory" }),
        __metadata("design:type", String)
    ], AwsEcsTaskDefinitionContainerDefinitionsDetails.prototype, "workingDirectory", void 0);
    return AwsEcsTaskDefinitionContainerDefinitionsDetails;
}(SpeakeasyBase));
export { AwsEcsTaskDefinitionContainerDefinitionsDetails };
