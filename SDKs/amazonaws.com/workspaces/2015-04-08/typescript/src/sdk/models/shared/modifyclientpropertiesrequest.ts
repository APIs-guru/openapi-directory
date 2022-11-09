import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClientProperties } from "./clientproperties";


export class ModifyClientPropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientProperties" })
  clientProperties: ClientProperties;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
