import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisFirehoseOutputDescription
/** 
 *  For an application output, describes the Amazon Kinesis Firehose delivery stream configured as its destination. 
**/
export class KinesisFirehoseOutputDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn?: string;
}
