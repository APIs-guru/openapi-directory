import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrustedAdvisorCheckRefreshStatus
/** 
 * The refresh status of a Trusted Advisor check.
**/
export class TrustedAdvisorCheckRefreshStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkId" })
  checkId: string;

  @SpeakeasyMetadata({ data: "json, name=millisUntilNextRefreshable" })
  millisUntilNextRefreshable: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;
}
