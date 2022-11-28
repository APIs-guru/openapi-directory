import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PaymentsProgramOnboardingSteps
/** 
 * The payments program onboarding steps, status, and link.
**/
export class PaymentsProgramOnboardingSteps extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=webUrl" })
  webUrl?: string;
}
