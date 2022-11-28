import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEc2SecurityGroupPrefixListId
/** 
 * A prefix list ID.
**/
export class AwsEc2SecurityGroupPrefixListId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PrefixListId" })
  prefixListId?: string;
}
