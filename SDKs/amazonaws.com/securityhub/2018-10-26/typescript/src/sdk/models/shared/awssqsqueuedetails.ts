import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsSqsQueueDetails
/** 
 * Data about a queue.
**/
export class AwsSqsQueueDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeadLetterTargetArn" })
  deadLetterTargetArn?: string;

  @Metadata({ data: "json, name=KmsDataKeyReusePeriodSeconds" })
  kmsDataKeyReusePeriodSeconds?: number;

  @Metadata({ data: "json, name=KmsMasterKeyId" })
  kmsMasterKeyId?: string;

  @Metadata({ data: "json, name=QueueName" })
  queueName?: string;
}
