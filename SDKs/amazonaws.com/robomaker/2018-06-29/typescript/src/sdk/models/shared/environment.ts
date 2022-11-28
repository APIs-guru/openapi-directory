import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Environment
/** 
 * The object that contains the Docker image URI for either your robot or simulation applications.
**/
export class Environment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
