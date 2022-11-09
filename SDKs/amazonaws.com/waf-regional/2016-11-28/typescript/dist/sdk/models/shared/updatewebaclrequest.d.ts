import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WafAction } from "./wafaction";
import { WebAclUpdate } from "./webaclupdate";
export declare class UpdateWebAclRequest extends SpeakeasyBase {
    changeToken: string;
    defaultAction?: WafAction;
    updates?: WebAclUpdate[];
    webAclId: string;
}
