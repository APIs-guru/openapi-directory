import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about an alias.
**/
export declare class AliasListEntry extends SpeakeasyBase {
    aliasArn?: string;
    aliasName?: string;
    creationDate?: Date;
    lastUpdatedDate?: Date;
    targetKeyId?: string;
}
