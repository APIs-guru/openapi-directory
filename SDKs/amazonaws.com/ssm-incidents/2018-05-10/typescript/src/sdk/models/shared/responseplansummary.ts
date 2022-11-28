import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResponsePlanSummary
/** 
 * Details of the response plan that are used when creating an incident.
**/
export class ResponsePlanSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
