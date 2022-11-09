import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsWafWebAclRule } from "./awswafwebaclrule";


// AwsWafWebAclDetails
/** 
 * Details about an WAF WebACL.
**/
export class AwsWafWebAclDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultAction" })
  defaultAction?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Rules", elemType: shared.AwsWafWebAclRule })
  rules?: AwsWafWebAclRule[];

  @Metadata({ data: "json, name=WebAclId" })
  webAclId?: string;
}
