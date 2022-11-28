import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";



// ConsumedLicenseSummary
/** 
 * Details about license consumption.
**/
export class ConsumedLicenseSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsumedLicenses" })
  consumedLicenses?: number;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: ResourceTypeEnum;
}
