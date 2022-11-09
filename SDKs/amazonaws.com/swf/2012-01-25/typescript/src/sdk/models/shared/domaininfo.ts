import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegistrationStatusEnum } from "./registrationstatusenum";


// DomainInfo
/** 
 * Contains general information about a domain.
**/
export class DomainInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=status" })
  status: RegistrationStatusEnum;
}
