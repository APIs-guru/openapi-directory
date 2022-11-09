import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AccessTokenTypeEnum {
    UserAccount = "UserAccount"
,    UserProfile = "UserProfile"
}


export class AccessToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountCreated" })
  accountCreated?: boolean;

  @Metadata({ data: "json, name=expirationDate" })
  expirationDate: Date;

  @Metadata({ data: "json, name=refreshable" })
  refreshable: boolean;

  @Metadata({ data: "json, name=type" })
  type: AccessTokenTypeEnum;

  @Metadata({ data: "json, name=value" })
  value: string;
}
