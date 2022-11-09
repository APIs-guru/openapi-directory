import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourcePolicy
/** 
 * A policy enabling one or more entities to put logs to a log group in this account.
**/
export class ResourcePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastUpdatedTime" })
  lastUpdatedTime?: number;

  @Metadata({ data: "json, name=policyDocument" })
  policyDocument?: string;

  @Metadata({ data: "json, name=policyName" })
  policyName?: string;
}
