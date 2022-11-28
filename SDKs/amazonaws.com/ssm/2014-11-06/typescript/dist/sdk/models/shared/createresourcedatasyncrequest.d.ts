import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceDataSyncS3Destination } from "./resourcedatasyncs3destination";
import { ResourceDataSyncSource } from "./resourcedatasyncsource";
export declare class CreateResourceDataSyncRequest extends SpeakeasyBase {
    s3Destination?: ResourceDataSyncS3Destination;
    syncName: string;
    syncSource?: ResourceDataSyncSource;
    syncType?: string;
}
