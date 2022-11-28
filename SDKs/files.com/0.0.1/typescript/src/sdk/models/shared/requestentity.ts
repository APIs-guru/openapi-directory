import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RequestEntity
/** 
 * List Requests
**/
export class RequestEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automation_id" })
  automationId?: string;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=user_display_name" })
  userDisplayName?: string;
}
