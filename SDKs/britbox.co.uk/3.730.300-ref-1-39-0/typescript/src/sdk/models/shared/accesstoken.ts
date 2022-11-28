import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AccessTokenTypeEnum {
    UserAccount = "UserAccount",
    UserProfile = "UserProfile"
}


export class AccessToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountCreated" })
  accountCreated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=refreshable" })
  refreshable: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: AccessTokenTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
