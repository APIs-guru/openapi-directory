import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetQueueUrlResult
/** 
 * For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-api-responses.html">Interpreting Responses</a> in the <i>Amazon SQS Developer Guide</i>.
**/
export class GetQueueUrlResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queueUrl?: string;
}
