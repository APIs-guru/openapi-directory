import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReplicaRegionType
/** 
 * (Optional) Custom type consisting of a <code>Region</code> (required) and the <code>KmsKeyId</code> which can be an <code>ARN</code>, <code>Key ID</code>, or <code>Alias</code>.
**/
export class ReplicaRegionType extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=Region" })
  region?: string;
}
