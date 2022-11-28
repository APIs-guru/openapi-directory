import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReplicaRegionType
/** 
 * (Optional) Custom type consisting of a <code>Region</code> (required) and the <code>KmsKeyId</code> which can be an <code>ARN</code>, <code>Key ID</code>, or <code>Alias</code>.
**/
export class ReplicaRegionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=Region" })
  region?: string;
}
