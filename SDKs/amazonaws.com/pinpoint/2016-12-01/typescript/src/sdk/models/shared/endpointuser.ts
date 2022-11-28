import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EndpointUser
/** 
 * Specifies data for one or more attributes that describe the user who's associated with an endpoint.
**/
export class EndpointUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserAttributes" })
  userAttributes?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: string;
}
