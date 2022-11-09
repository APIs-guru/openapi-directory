import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.
**/
export declare class Layer extends SpeakeasyBase {
    arn?: string;
    codeSize?: number;
    signingJobArn?: string;
    signingProfileVersionArn?: string;
}
