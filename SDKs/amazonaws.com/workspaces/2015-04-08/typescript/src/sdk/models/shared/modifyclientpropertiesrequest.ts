import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientProperties } from "./clientproperties";



export class ModifyClientPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientProperties" })
  clientProperties: ClientProperties;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
