import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrustedAdvisorCheckDescription
/** 
 * The description and metadata for a Trusted Advisor check.
**/
export class TrustedAdvisorCheckDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: string[];

  @Metadata({ data: "json, name=name" })
  name: string;
}
