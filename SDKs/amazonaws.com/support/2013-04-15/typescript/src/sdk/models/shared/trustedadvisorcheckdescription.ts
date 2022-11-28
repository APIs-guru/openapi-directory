import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrustedAdvisorCheckDescription
/** 
 * The description and metadata for a Trusted Advisor check.
**/
export class TrustedAdvisorCheckDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
