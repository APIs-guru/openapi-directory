import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceUpdateStatusEnum } from "./serviceupdatestatusenum";
import { ServiceUpdateTypeEnum } from "./serviceupdatetypeenum";
/**
 * An update that you can apply to your MemoryDB clusters.
**/
export declare class ServiceUpdate extends SpeakeasyBase {
    autoUpdateStartDate?: Date;
    clusterName?: string;
    description?: string;
    nodesUpdated?: string;
    releaseDate?: Date;
    serviceUpdateName?: string;
    status?: ServiceUpdateStatusEnum;
    type?: ServiceUpdateTypeEnum;
}
