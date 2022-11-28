import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetCallerIdentityResponse
/** 
 * Contains the response to a successful <a>GetCallerIdentity</a> request, including information about the entity making the request.
**/
export class GetCallerIdentityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  account?: string;

  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  userId?: string;
}
