import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Configuration values that override the container image Dockerfile settings. See <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container settings</a>.
**/
export declare class ImageConfig extends SpeakeasyBase {
    command?: string[];
    entryPoint?: string[];
    workingDirectory?: string;
}
