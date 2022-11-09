import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an AWS Lambda function configured as the destination.
**/
export declare class LambdaOutputUpdate extends SpeakeasyBase {
    resourceArnUpdate?: string;
    roleArnUpdate?: string;
}
