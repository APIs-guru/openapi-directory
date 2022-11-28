import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentsProgramOnboardingSteps } from "./paymentsprogramonboardingsteps";
/**
 * Contains the payments program onboarding response
**/
export declare class PaymentsProgramOnboardingResponse extends SpeakeasyBase {
    onboardingStatus?: string;
    steps?: PaymentsProgramOnboardingSteps[];
}
