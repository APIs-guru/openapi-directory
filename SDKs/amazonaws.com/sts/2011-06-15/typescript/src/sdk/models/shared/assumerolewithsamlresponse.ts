import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssumedRoleUser } from "./assumedroleuser";
import { Credentials } from "./credentials";



// AssumeRoleWithSamlResponse
/** 
 * Contains the response to a successful <a>AssumeRoleWithSAML</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests. 
**/
export class AssumeRoleWithSamlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assumedRoleUser?: AssumedRoleUser;

  @SpeakeasyMetadata()
  audience?: string;

  @SpeakeasyMetadata()
  credentials?: Credentials;

  @SpeakeasyMetadata()
  issuer?: string;

  @SpeakeasyMetadata()
  nameQualifier?: string;

  @SpeakeasyMetadata()
  packedPolicySize?: number;

  @SpeakeasyMetadata()
  sourceIdentity?: string;

  @SpeakeasyMetadata()
  subject?: string;

  @SpeakeasyMetadata()
  subjectType?: string;
}
