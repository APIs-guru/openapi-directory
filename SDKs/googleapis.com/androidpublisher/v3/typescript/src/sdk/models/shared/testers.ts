import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Testers
/** 
 * The testers of an app. The resource for TestersService. Note: while it is possible in the Play Console UI to add testers via email lists, email lists are not supported by this resource.
**/
export class Testers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=googleGroups" })
  googleGroups?: string[];
}
