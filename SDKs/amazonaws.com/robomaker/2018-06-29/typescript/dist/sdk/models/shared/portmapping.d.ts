import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An object representing a port mapping.
**/
export declare class PortMapping extends SpeakeasyBase {
    applicationPort: number;
    enableOnPublicIp?: boolean;
    jobPort: number;
}
