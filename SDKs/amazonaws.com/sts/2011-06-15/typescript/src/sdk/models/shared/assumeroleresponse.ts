import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssumedRoleUser } from "./assumedroleuser";
import { Credentials } from "./credentials";



// AssumeRoleResponse
/** 
 * Contains the response to a successful <a>AssumeRole</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests. 
**/
export class AssumeRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assumedRoleUser?: AssumedRoleUser;

  @SpeakeasyMetadata()
  credentials?: Credentials;

  @SpeakeasyMetadata()
  packedPolicySize?: number;

  @SpeakeasyMetadata()
  sourceIdentity?: string;
}
