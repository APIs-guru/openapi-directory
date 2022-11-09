import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrustedAdvisorCheckRefreshStatus
/** 
 * The refresh status of a Trusted Advisor check.
**/
export class TrustedAdvisorCheckRefreshStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkId" })
  checkId: string;

  @Metadata({ data: "json, name=millisUntilNextRefreshable" })
  millisUntilNextRefreshable: number;

  @Metadata({ data: "json, name=status" })
  status: string;
}
