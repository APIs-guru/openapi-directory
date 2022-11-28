import { SpeakeasyBase } from "../../../internal/utils";
import { StreamRecord } from "./streamrecord";
import { OperationTypeEnum } from "./operationtypeenum";
import { Identity } from "./identity";
/**
 * A description of a unique event within a stream.
**/
export declare class Record extends SpeakeasyBase {
    awsRegion?: string;
    dynamodb?: StreamRecord;
    eventId?: string;
    eventName?: OperationTypeEnum;
    eventSource?: string;
    eventVersion?: string;
    userIdentity?: Identity;
}
