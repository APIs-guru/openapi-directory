import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClientProperties } from "./clientproperties";


// ClientPropertiesResult
/** 
 * Information about the Amazon WorkSpaces client.
**/
export class ClientPropertiesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientProperties" })
  clientProperties?: ClientProperties;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;
}
