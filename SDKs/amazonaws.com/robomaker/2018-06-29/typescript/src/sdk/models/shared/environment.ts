import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Environment
/** 
 * The object that contains the Docker image URI for either your robot or simulation applications.
**/
export class Environment extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
