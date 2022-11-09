import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleTypeOptionEnum } from "./ruletypeoptionenum";
import { Tag } from "./tag";
import { TargetAddress } from "./targetaddress";
export declare class CreateResolverRuleRequest extends SpeakeasyBase {
    creatorRequestId: string;
    domainName: string;
    name?: string;
    resolverEndpointId?: string;
    ruleType: RuleTypeOptionEnum;
    tags?: Tag[];
    targetIps?: TargetAddress[];
}
