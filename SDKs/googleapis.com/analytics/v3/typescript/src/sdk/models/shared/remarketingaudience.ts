import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IncludeConditions } from "./includeconditions";
import { LinkedForeignAccount } from "./linkedforeignaccount";
import { LinkedForeignAccountInput } from "./linkedforeignaccount";



// RemarketingAudienceAudienceDefinition
/** 
 * The simple audience definition that will cause a user to be added to an audience.
**/
export class RemarketingAudienceAudienceDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeConditions" })
  includeConditions?: IncludeConditions;
}


// RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions
/** 
 * Defines the conditions to exclude users from the audience.
**/
export class RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exclusionDuration" })
  exclusionDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=segment" })
  segment?: string;
}


// RemarketingAudienceStateBasedAudienceDefinition
/** 
 * A state based audience definition that will cause a user to be added or removed from an audience.
**/
export class RemarketingAudienceStateBasedAudienceDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludeConditions" })
  excludeConditions?: RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions;

  @SpeakeasyMetadata({ data: "json, name=includeConditions" })
  includeConditions?: IncludeConditions;
}


// RemarketingAudience
/** 
 * JSON template for an Analytics remarketing audience.
**/
export class RemarketingAudience extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=audienceDefinition" })
  audienceDefinition?: RemarketingAudienceAudienceDefinition;

  @SpeakeasyMetadata({ data: "json, name=audienceType" })
  audienceType?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=internalWebPropertyId" })
  internalWebPropertyId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=linkedAdAccounts", elemType: LinkedForeignAccount })
  linkedAdAccounts?: LinkedForeignAccount[];

  @SpeakeasyMetadata({ data: "json, name=linkedViews" })
  linkedViews?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=stateBasedAudienceDefinition" })
  stateBasedAudienceDefinition?: RemarketingAudienceStateBasedAudienceDefinition;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;

  @SpeakeasyMetadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}


// RemarketingAudienceInput
/** 
 * JSON template for an Analytics remarketing audience.
**/
export class RemarketingAudienceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=audienceDefinition" })
  audienceDefinition?: RemarketingAudienceAudienceDefinition;

  @SpeakeasyMetadata({ data: "json, name=audienceType" })
  audienceType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=linkedAdAccounts", elemType: LinkedForeignAccountInput })
  linkedAdAccounts?: LinkedForeignAccountInput[];

  @SpeakeasyMetadata({ data: "json, name=linkedViews" })
  linkedViews?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=stateBasedAudienceDefinition" })
  stateBasedAudienceDefinition?: RemarketingAudienceStateBasedAudienceDefinition;

  @SpeakeasyMetadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}
