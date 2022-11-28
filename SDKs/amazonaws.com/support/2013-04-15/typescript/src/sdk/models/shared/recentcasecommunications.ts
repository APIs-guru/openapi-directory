import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Communication } from "./communication";



// RecentCaseCommunications
/** 
 * The five most recent communications associated with the case.
**/
export class RecentCaseCommunications extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=communications", elemType: Communication })
  communications?: Communication[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
