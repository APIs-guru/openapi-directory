import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceDataSyncDestinationDataSharing } from "./resourcedatasyncdestinationdatasharing";
import { ResourceDataSyncS3FormatEnum } from "./resourcedatasyncs3formatenum";



// ResourceDataSyncS3Destination
/** 
 * Information about the target S3 bucket for the resource data sync.
**/
export class ResourceDataSyncS3Destination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AWSKMSKeyARN" })
  awskmsKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=BucketName" })
  bucketName: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationDataSharing" })
  destinationDataSharing?: ResourceDataSyncDestinationDataSharing;

  @SpeakeasyMetadata({ data: "json, name=Prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=Region" })
  region: string;

  @SpeakeasyMetadata({ data: "json, name=SyncFormat" })
  syncFormat: ResourceDataSyncS3FormatEnum;
}
