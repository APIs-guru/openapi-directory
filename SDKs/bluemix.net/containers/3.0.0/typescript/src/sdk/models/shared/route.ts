import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Route
/** 
 * The public route that is mapped to the container group. You can use this route to access your container group from the Internet.
**/
export class Route extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;
}
