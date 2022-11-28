import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BorrowConfiguration } from "./borrowconfiguration";
import { ProvisionalConfiguration } from "./provisionalconfiguration";
import { RenewTypeEnum } from "./renewtypeenum";



// ConsumptionConfiguration
/** 
 * Details about a consumption configuration.
**/
export class ConsumptionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BorrowConfiguration" })
  borrowConfiguration?: BorrowConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ProvisionalConfiguration" })
  provisionalConfiguration?: ProvisionalConfiguration;

  @SpeakeasyMetadata({ data: "json, name=RenewType" })
  renewType?: RenewTypeEnum;
}
