import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventStream
/** 
 * Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.
**/
export class EventStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @Metadata({ data: "json, name=DestinationStreamArn" })
  destinationStreamArn: string;

  @Metadata({ data: "json, name=ExternalId" })
  externalId?: string;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: string;

  @Metadata({ data: "json, name=LastUpdatedBy" })
  lastUpdatedBy?: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;
}
