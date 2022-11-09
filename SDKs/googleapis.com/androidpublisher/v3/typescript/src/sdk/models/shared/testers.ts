import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Testers
/** 
 * The testers of an app. The resource for TestersService. Note: while it is possible in the Play Console UI to add testers via email lists, email lists are not supported by this resource.
**/
export class Testers extends SpeakeasyBase {
  @Metadata({ data: "json, name=googleGroups" })
  googleGroups?: string[];
}
