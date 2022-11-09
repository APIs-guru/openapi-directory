import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EndpointUser
/** 
 * Specifies data for one or more attributes that describe the user who's associated with an endpoint.
**/
export class EndpointUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserAttributes" })
  userAttributes?: Map<string, string[]>;

  @Metadata({ data: "json, name=UserId" })
  userId?: string;
}
