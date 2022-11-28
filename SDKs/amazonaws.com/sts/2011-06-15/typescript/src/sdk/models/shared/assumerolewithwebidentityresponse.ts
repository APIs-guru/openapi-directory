import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssumedRoleUser } from "./assumedroleuser";
import { Credentials } from "./credentials";



// AssumeRoleWithWebIdentityResponse
/** 
 * Contains the response to a successful <a>AssumeRoleWithWebIdentity</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests. 
**/
export class AssumeRoleWithWebIdentityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assumedRoleUser?: AssumedRoleUser;

  @SpeakeasyMetadata()
  audience?: string;

  @SpeakeasyMetadata()
  credentials?: Credentials;

  @SpeakeasyMetadata()
  packedPolicySize?: number;

  @SpeakeasyMetadata()
  provider?: string;

  @SpeakeasyMetadata()
  sourceIdentity?: string;

  @SpeakeasyMetadata()
  subjectFromWebIdentityToken?: string;
}
