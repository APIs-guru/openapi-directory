import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Route
/** 
 * The public route that is mapped to the container group. You can use this route to access your container group from the Internet.
**/
export class Route extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=host" })
  host?: string;
}
