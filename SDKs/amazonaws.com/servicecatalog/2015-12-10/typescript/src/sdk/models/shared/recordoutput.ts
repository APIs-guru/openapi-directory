import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RecordOutput
/** 
 * The output for the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.
**/
export class RecordOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=OutputKey" })
  outputKey?: string;

  @Metadata({ data: "json, name=OutputValue" })
  outputValue?: string;
}
