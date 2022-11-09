import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BehaviorEntity
/** 
 * List Behaviors
**/
export class BehaviorEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachment_url" })
  attachmentUrl?: string;

  @Metadata({ data: "json, name=behavior" })
  behavior?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
