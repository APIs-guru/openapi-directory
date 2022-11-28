import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.
**/
export declare class LayerVersionContentOutput extends SpeakeasyBase {
    codeSha256?: string;
    codeSize?: number;
    location?: string;
    signingJobArn?: string;
    signingProfileVersionArn?: string;
}
