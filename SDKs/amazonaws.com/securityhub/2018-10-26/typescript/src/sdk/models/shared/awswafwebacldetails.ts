import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsWafWebAclRule } from "./awswafwebaclrule";



// AwsWafWebAclDetails
/** 
 * Details about an WAF WebACL.
**/
export class AwsWafWebAclDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultAction" })
  defaultAction?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Rules", elemType: AwsWafWebAclRule })
  rules?: AwsWafWebAclRule[];

  @SpeakeasyMetadata({ data: "json, name=WebAclId" })
  webAclId?: string;
}
