import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IncludeConditions } from "./includeconditions";
import { LinkedForeignAccount } from "./linkedforeignaccount";
import { IncludeConditions } from "./includeconditions";


// RemarketingAudienceAudienceDefinition
/** 
 * The simple audience definition that will cause a user to be added to an audience.
**/
export class RemarketingAudienceAudienceDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeConditions" })
  includeConditions?: IncludeConditions;
}


// RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions
/** 
 * Defines the conditions to exclude users from the audience.
**/
export class RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions extends SpeakeasyBase {
  @Metadata({ data: "json, name=exclusionDuration" })
  exclusionDuration?: string;

  @Metadata({ data: "json, name=segment" })
  segment?: string;
}


// RemarketingAudienceStateBasedAudienceDefinition
/** 
 * A state based audience definition that will cause a user to be added or removed from an audience.
**/
export class RemarketingAudienceStateBasedAudienceDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludeConditions" })
  excludeConditions?: RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions;

  @Metadata({ data: "json, name=includeConditions" })
  includeConditions?: IncludeConditions;
}


// RemarketingAudience
/** 
 * JSON template for an Analytics remarketing audience.
**/
export class RemarketingAudience extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=audienceDefinition" })
  audienceDefinition?: RemarketingAudienceAudienceDefinition;

  @Metadata({ data: "json, name=audienceType" })
  audienceType?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=internalWebPropertyId" })
  internalWebPropertyId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=linkedAdAccounts", elemType: shared.LinkedForeignAccount })
  linkedAdAccounts?: LinkedForeignAccount[];

  @Metadata({ data: "json, name=linkedViews" })
  linkedViews?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=stateBasedAudienceDefinition" })
  stateBasedAudienceDefinition?: RemarketingAudienceStateBasedAudienceDefinition;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}
