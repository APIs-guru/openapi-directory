import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningArtifactDetail } from "./provisioningartifactdetail";
import { StatusEnum } from "./statusenum";
export declare class UpdateProvisioningArtifactOutput extends SpeakeasyBase {
    info?: Map<string, string>;
    provisioningArtifactDetail?: ProvisioningArtifactDetail;
    status?: StatusEnum;
}
