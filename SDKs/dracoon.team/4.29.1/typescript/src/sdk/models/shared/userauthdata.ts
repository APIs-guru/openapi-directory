import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserAuthData
/** 
 * User Authentication Data
**/
export class UserAuthData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adConfigId" })
  adConfigId?: number;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: string;

  @SpeakeasyMetadata({ data: "json, name=mustChangePassword" })
  mustChangePassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=oidConfigId" })
  oidConfigId?: number;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;
}
