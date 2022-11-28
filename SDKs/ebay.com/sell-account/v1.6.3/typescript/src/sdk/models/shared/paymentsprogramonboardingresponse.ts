import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentsProgramOnboardingSteps } from "./paymentsprogramonboardingsteps";



// PaymentsProgramOnboardingResponse
/** 
 * Contains the payments program onboarding response
**/
export class PaymentsProgramOnboardingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=onboardingStatus" })
  onboardingStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=steps", elemType: PaymentsProgramOnboardingSteps })
  steps?: PaymentsProgramOnboardingSteps[];
}
