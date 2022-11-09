import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RequestEntity
/** 
 * List Requests
**/
export class RequestEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=automation_id" })
  automationId?: string;

  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=user_display_name" })
  userDisplayName?: string;
}
