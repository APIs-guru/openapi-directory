import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisStreamsOutputDescription
/** 
 *  For an application output, describes the Amazon Kinesis stream configured as its destination. 
**/
export class KinesisStreamsOutputDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn?: string;
}
