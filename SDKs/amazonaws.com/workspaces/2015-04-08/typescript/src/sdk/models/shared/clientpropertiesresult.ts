import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientProperties } from "./clientproperties";



// ClientPropertiesResult
/** 
 * Information about the Amazon WorkSpaces client.
**/
export class ClientPropertiesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientProperties" })
  clientProperties?: ClientProperties;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;
}
