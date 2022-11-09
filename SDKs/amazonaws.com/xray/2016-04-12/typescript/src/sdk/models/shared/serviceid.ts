import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceId
/** 
 * <p/>
**/
export class ServiceId extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Names" })
  names?: string[];

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
