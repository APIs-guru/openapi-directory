import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserAuthData
/** 
 * User Authentication Data
**/
export class UserAuthData extends SpeakeasyBase {
  @Metadata({ data: "json, name=adConfigId" })
  adConfigId?: number;

  @Metadata({ data: "json, name=login" })
  login?: string;

  @Metadata({ data: "json, name=method" })
  method: string;

  @Metadata({ data: "json, name=mustChangePassword" })
  mustChangePassword?: boolean;

  @Metadata({ data: "json, name=oidConfigId" })
  oidConfigId?: number;

  @Metadata({ data: "json, name=password" })
  password?: string;
}
