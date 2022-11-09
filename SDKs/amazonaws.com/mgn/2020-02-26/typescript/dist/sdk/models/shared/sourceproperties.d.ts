import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Cpu } from "./cpu";
import { Disk } from "./disk";
import { IdentificationHints } from "./identificationhints";
import { NetworkInterface } from "./networkinterface";
import { Os } from "./os";
/**
 * Source server properties.
**/
export declare class SourceProperties extends SpeakeasyBase {
    cpus?: Cpu[];
    disks?: Disk[];
    identificationHints?: IdentificationHints;
    lastUpdatedDateTime?: string;
    networkInterfaces?: NetworkInterface[];
    os?: Os;
    ramBytes?: number;
    recommendedInstanceType?: string;
}
