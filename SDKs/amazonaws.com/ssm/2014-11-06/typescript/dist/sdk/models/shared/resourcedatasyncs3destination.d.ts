import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceDataSyncDestinationDataSharing } from "./resourcedatasyncdestinationdatasharing";
import { ResourceDataSyncS3FormatEnum } from "./resourcedatasyncs3formatenum";
/**
 * Information about the target S3 bucket for the resource data sync.
**/
export declare class ResourceDataSyncS3Destination extends SpeakeasyBase {
    awskmsKeyArn?: string;
    bucketName: string;
    destinationDataSharing?: ResourceDataSyncDestinationDataSharing;
    prefix?: string;
    region: string;
    syncFormat: ResourceDataSyncS3FormatEnum;
}
