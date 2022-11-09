import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AllowedPublishers } from "./allowedpublishers";
import { CodeSigningPolicies } from "./codesigningpolicies";
/**
 * Details about a <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Code signing configuration</a>.
**/
export declare class CodeSigningConfig extends SpeakeasyBase {
    allowedPublishers: AllowedPublishers;
    codeSigningConfigArn: string;
    codeSigningConfigId: string;
    codeSigningPolicies: CodeSigningPolicies;
    description?: string;
    lastModified: string;
}
