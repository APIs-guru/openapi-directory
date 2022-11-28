import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
/**
 * The unit of data of the Kinesis data stream, which is composed of a sequence number, a partition key, and a data blob.
**/
export declare class Record extends SpeakeasyBase {
    approximateArrivalTimestamp?: Date;
    data: string;
    encryptionType?: EncryptionTypeEnum;
    partitionKey: string;
    sequenceNumber: string;
}
