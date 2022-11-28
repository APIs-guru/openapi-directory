import { SpeakeasyBase } from "../../../internal/utils";
import { DataReplicationInitiationStep } from "./datareplicationinitiationstep";
/**
 * Data replication initiation.
**/
export declare class DataReplicationInitiation extends SpeakeasyBase {
    nextAttemptDateTime?: string;
    startDateTime?: string;
    steps?: DataReplicationInitiationStep[];
}
