import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Instance } from "./instance";


// InstanceSummary
/** 
 * The details about the instance.
**/
export class InstanceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=instance" })
  instance?: Instance;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;
}
