import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the source and type of temporary security credentials that were issued to an entity.
**/
export declare class SessionIssuer extends SpeakeasyBase {
    accountId?: string;
    arn?: string;
    principalId?: string;
    type?: string;
    userName?: string;
}
