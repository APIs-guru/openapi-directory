import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AllowedPublishers } from "./allowedpublishers";
import { CodeSigningPolicies } from "./codesigningpolicies";


// CodeSigningConfig
/** 
 * Details about a <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Code signing configuration</a>. 
**/
export class CodeSigningConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowedPublishers" })
  allowedPublishers: AllowedPublishers;

  @Metadata({ data: "json, name=CodeSigningConfigArn" })
  codeSigningConfigArn: string;

  @Metadata({ data: "json, name=CodeSigningConfigId" })
  codeSigningConfigId: string;

  @Metadata({ data: "json, name=CodeSigningPolicies" })
  codeSigningPolicies: CodeSigningPolicies;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LastModified" })
  lastModified: string;
}
