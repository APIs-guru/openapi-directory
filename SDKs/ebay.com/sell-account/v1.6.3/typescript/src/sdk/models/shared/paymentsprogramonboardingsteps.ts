import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PaymentsProgramOnboardingSteps
/** 
 * The payments program onboarding steps, status, and link.
**/
export class PaymentsProgramOnboardingSteps extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=webUrl" })
  webUrl?: string;
}
