import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BorrowConfiguration } from "./borrowconfiguration";
import { ProvisionalConfiguration } from "./provisionalconfiguration";
import { RenewTypeEnum } from "./renewtypeenum";


// ConsumptionConfiguration
/** 
 * Details about a consumption configuration.
**/
export class ConsumptionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=BorrowConfiguration" })
  borrowConfiguration?: BorrowConfiguration;

  @Metadata({ data: "json, name=ProvisionalConfiguration" })
  provisionalConfiguration?: ProvisionalConfiguration;

  @Metadata({ data: "json, name=RenewType" })
  renewType?: RenewTypeEnum;
}
