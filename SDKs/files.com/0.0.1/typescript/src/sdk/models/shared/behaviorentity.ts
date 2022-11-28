import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BehaviorEntity
/** 
 * List Behaviors
**/
export class BehaviorEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachment_url" })
  attachmentUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=behavior" })
  behavior?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
