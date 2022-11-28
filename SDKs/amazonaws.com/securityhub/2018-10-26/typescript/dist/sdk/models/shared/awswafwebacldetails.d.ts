import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafWebAclRule } from "./awswafwebaclrule";
/**
 * Details about an WAF WebACL.
**/
export declare class AwsWafWebAclDetails extends SpeakeasyBase {
    defaultAction?: string;
    name?: string;
    rules?: AwsWafWebAclRule[];
    webAclId?: string;
}
