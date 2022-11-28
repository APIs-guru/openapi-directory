import { SpeakeasyBase } from "../../../internal/utils";
import { AquaConfigurationStatusEnum } from "./aquaconfigurationstatusenum";
import { AquaStatusEnum } from "./aquastatusenum";
/**
 * The AQUA (Advanced Query Accelerator) configuration of the cluster.
**/
export declare class AquaConfiguration extends SpeakeasyBase {
    aquaConfigurationStatus?: AquaConfigurationStatusEnum;
    aquaStatus?: AquaStatusEnum;
}
