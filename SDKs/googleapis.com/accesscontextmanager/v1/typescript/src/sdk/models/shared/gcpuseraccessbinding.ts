import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GcpUserAccessBinding
/** 
 * Restricts access to Cloud Console and Google Cloud APIs for a set of users using Context-Aware Access.
**/
export class GcpUserAccessBinding extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessLevels" })
  accessLevels?: string[];

  @Metadata({ data: "json, name=groupKey" })
  groupKey?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
