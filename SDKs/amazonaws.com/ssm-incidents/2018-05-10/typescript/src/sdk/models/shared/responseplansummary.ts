import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResponsePlanSummary
/** 
 * Details of the response plan that are used when creating an incident.
**/
export class ResponsePlanSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
