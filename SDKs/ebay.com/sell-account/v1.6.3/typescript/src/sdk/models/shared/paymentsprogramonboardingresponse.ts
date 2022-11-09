import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaymentsProgramOnboardingSteps } from "./paymentsprogramonboardingsteps";


// PaymentsProgramOnboardingResponse
/** 
 * Contains the payments program onboarding response
**/
export class PaymentsProgramOnboardingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=onboardingStatus" })
  onboardingStatus?: string;

  @Metadata({ data: "json, name=steps", elemType: shared.PaymentsProgramOnboardingSteps })
  steps?: PaymentsProgramOnboardingSteps[];
}
