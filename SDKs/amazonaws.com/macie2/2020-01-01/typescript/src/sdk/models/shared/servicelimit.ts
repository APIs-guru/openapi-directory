import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UnitEnum } from "./unitenum";


// ServiceLimit
/** 
 * Specifies a current quota for an Amazon Macie account.
**/
export class ServiceLimit extends SpeakeasyBase {
  @Metadata({ data: "json, name=isServiceLimited" })
  isServiceLimited?: boolean;

  @Metadata({ data: "json, name=unit" })
  unit?: UnitEnum;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
