import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventStream
/** 
 * Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.
**/
export class EventStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationStreamArn" })
  destinationStreamArn: string;

  @SpeakeasyMetadata({ data: "json, name=ExternalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedBy" })
  lastUpdatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;
}
