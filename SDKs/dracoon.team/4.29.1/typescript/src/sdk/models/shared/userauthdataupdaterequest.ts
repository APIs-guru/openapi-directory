import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserAuthDataUpdateRequest
/** 
 * User Authentication Data Update Request
**/
export class UserAuthDataUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adConfigId" })
  adConfigId?: number;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=oidConfigId" })
  oidConfigId?: number;
}
