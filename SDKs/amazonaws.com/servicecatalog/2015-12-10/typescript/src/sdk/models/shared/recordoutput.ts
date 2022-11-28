import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RecordOutput
/** 
 * The output for the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.
**/
export class RecordOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputKey" })
  outputKey?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputValue" })
  outputValue?: string;
}
