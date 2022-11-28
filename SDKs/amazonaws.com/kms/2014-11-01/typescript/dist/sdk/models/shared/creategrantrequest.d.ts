import { SpeakeasyBase } from "../../../internal/utils";
import { GrantConstraints } from "./grantconstraints";
import { GrantOperationEnum } from "./grantoperationenum";
export declare class CreateGrantRequest extends SpeakeasyBase {
    constraints?: GrantConstraints;
    grantTokens?: string[];
    granteePrincipal: string;
    keyId: string;
    name?: string;
    operations: GrantOperationEnum[];
    retiringPrincipal?: string;
}
