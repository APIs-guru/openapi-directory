import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisioningArtifactDetail } from "./provisioningartifactdetail";
import { StatusEnum } from "./statusenum";
export declare class CreateProvisioningArtifactOutput extends SpeakeasyBase {
    info?: Map<string, string>;
    provisioningArtifactDetail?: ProvisioningArtifactDetail;
    status?: StatusEnum;
}
