import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceQuota
/** 
 * A resource budget.
**/
export class InstanceQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableMachineCount" })
  availableMachineCount?: number;

  @Metadata({ data: "json, name=gcpService" })
  gcpService?: string;

  @Metadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
