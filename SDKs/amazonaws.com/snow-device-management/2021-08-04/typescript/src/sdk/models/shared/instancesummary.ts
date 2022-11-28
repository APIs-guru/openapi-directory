import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";



// InstanceSummary
/** 
 * The details about the instance.
**/
export class InstanceSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: Instance;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;
}
