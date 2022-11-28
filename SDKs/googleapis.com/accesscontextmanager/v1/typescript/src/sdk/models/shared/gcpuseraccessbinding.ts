import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GcpUserAccessBinding
/** 
 * Restricts access to Cloud Console and Google Cloud APIs for a set of users using Context-Aware Access.
**/
export class GcpUserAccessBinding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessLevels" })
  accessLevels?: string[];

  @SpeakeasyMetadata({ data: "json, name=groupKey" })
  groupKey?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
