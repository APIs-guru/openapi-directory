import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The output for the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.
**/
export declare class RecordOutput extends SpeakeasyBase {
    description?: string;
    outputKey?: string;
    outputValue?: string;
}
