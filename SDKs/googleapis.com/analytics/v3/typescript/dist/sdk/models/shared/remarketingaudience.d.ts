import { SpeakeasyBase } from "../../../internal/utils";
import { IncludeConditions } from "./includeconditions";
import { LinkedForeignAccount } from "./linkedforeignaccount";
import { LinkedForeignAccountInput } from "./linkedforeignaccount";
/**
 * The simple audience definition that will cause a user to be added to an audience.
**/
export declare class RemarketingAudienceAudienceDefinition extends SpeakeasyBase {
    includeConditions?: IncludeConditions;
}
/**
 * Defines the conditions to exclude users from the audience.
**/
export declare class RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions extends SpeakeasyBase {
    exclusionDuration?: string;
    segment?: string;
}
/**
 * A state based audience definition that will cause a user to be added or removed from an audience.
**/
export declare class RemarketingAudienceStateBasedAudienceDefinition extends SpeakeasyBase {
    excludeConditions?: RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions;
    includeConditions?: IncludeConditions;
}
/**
 * JSON template for an Analytics remarketing audience.
**/
export declare class RemarketingAudience extends SpeakeasyBase {
    accountId?: string;
    audienceDefinition?: RemarketingAudienceAudienceDefinition;
    audienceType?: string;
    created?: Date;
    description?: string;
    id?: string;
    internalWebPropertyId?: string;
    kind?: string;
    linkedAdAccounts?: LinkedForeignAccount[];
    linkedViews?: string[];
    name?: string;
    stateBasedAudienceDefinition?: RemarketingAudienceStateBasedAudienceDefinition;
    updated?: Date;
    webPropertyId?: string;
}
/**
 * JSON template for an Analytics remarketing audience.
**/
export declare class RemarketingAudienceInput extends SpeakeasyBase {
    accountId?: string;
    audienceDefinition?: RemarketingAudienceAudienceDefinition;
    audienceType?: string;
    id?: string;
    kind?: string;
    linkedAdAccounts?: LinkedForeignAccountInput[];
    linkedViews?: string[];
    name?: string;
    stateBasedAudienceDefinition?: RemarketingAudienceStateBasedAudienceDefinition;
    webPropertyId?: string;
}
