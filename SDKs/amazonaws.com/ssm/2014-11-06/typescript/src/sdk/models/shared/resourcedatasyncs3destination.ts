import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceDataSyncDestinationDataSharing } from "./resourcedatasyncdestinationdatasharing";
import { ResourceDataSyncS3FormatEnum } from "./resourcedatasyncs3formatenum";


// ResourceDataSyncS3Destination
/** 
 * Information about the target S3 bucket for the resource data sync.
**/
export class ResourceDataSyncS3Destination extends SpeakeasyBase {
  @Metadata({ data: "json, name=AWSKMSKeyARN" })
  awskmsKeyArn?: string;

  @Metadata({ data: "json, name=BucketName" })
  bucketName: string;

  @Metadata({ data: "json, name=DestinationDataSharing" })
  destinationDataSharing?: ResourceDataSyncDestinationDataSharing;

  @Metadata({ data: "json, name=Prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=Region" })
  region: string;

  @Metadata({ data: "json, name=SyncFormat" })
  syncFormat: ResourceDataSyncS3FormatEnum;
}
