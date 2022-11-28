import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnitEnum } from "./unitenum";



// ServiceLimit
/** 
 * Specifies a current quota for an Amazon Macie account.
**/
export class ServiceLimit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isServiceLimited" })
  isServiceLimited?: boolean;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: UnitEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
