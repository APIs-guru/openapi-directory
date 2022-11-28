import { SpeakeasyBase } from "../../../internal/utils";
import { PortInfoSourceTypeEnum } from "./portinfosourcetypeenum";
/**
 * Describes the Amazon Elastic Compute Cloud instance and related resources to be created using the <code>create cloud formation stack</code> operation.
**/
export declare class InstanceEntry extends SpeakeasyBase {
    availabilityZone: string;
    instanceType: string;
    portInfoSource: PortInfoSourceTypeEnum;
    sourceName: string;
    userData?: string;
}
