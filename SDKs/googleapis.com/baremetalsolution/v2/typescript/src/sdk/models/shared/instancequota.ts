import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceQuota
/** 
 * A resource budget.
**/
export class InstanceQuota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableMachineCount" })
  availableMachineCount?: number;

  @SpeakeasyMetadata({ data: "json, name=gcpService" })
  gcpService?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
