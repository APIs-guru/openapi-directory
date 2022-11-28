import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsSqsQueueDetails
/** 
 * Data about a queue.
**/
export class AwsSqsQueueDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeadLetterTargetArn" })
  deadLetterTargetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=KmsDataKeyReusePeriodSeconds" })
  kmsDataKeyReusePeriodSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=KmsMasterKeyId" })
  kmsMasterKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=QueueName" })
  queueName?: string;
}
