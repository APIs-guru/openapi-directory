import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserAuthDataUpdateRequest
/** 
 * User Authentication Data Update Request
**/
export class UserAuthDataUpdateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=adConfigId" })
  adConfigId?: number;

  @Metadata({ data: "json, name=login" })
  login?: string;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=oidConfigId" })
  oidConfigId?: number;
}
