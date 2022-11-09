import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";


// ConsumedLicenseSummary
/** 
 * Details about license consumption.
**/
export class ConsumedLicenseSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsumedLicenses" })
  consumedLicenses?: number;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: ResourceTypeEnum;
}
