import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Communication } from "./communication";


// RecentCaseCommunications
/** 
 * The five most recent communications associated with the case.
**/
export class RecentCaseCommunications extends SpeakeasyBase {
  @Metadata({ data: "json, name=communications", elemType: shared.Communication })
  communications?: Communication[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
