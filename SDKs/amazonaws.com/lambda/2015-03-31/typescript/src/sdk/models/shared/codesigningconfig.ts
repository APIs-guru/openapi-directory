import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AllowedPublishers } from "./allowedpublishers";
import { CodeSigningPolicies } from "./codesigningpolicies";



// CodeSigningConfig
/** 
 * Details about a <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Code signing configuration</a>. 
**/
export class CodeSigningConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowedPublishers" })
  allowedPublishers: AllowedPublishers;

  @SpeakeasyMetadata({ data: "json, name=CodeSigningConfigArn" })
  codeSigningConfigArn: string;

  @SpeakeasyMetadata({ data: "json, name=CodeSigningConfigId" })
  codeSigningConfigId: string;

  @SpeakeasyMetadata({ data: "json, name=CodeSigningPolicies" })
  codeSigningPolicies: CodeSigningPolicies;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified: string;
}
