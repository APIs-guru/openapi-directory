import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourcePolicy
/** 
 * A policy enabling one or more entities to put logs to a log group in this account.
**/
export class ResourcePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastUpdatedTime" })
  lastUpdatedTime?: number;

  @SpeakeasyMetadata({ data: "json, name=policyDocument" })
  policyDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=policyName" })
  policyName?: string;
}
