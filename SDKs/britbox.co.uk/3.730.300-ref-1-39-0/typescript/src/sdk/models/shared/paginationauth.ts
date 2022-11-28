import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PaginationAuthScopeEnum {
    Catalog = "Catalog",
    Commerce = "Commerce",
    Settings = "Settings"
}

export enum PaginationAuthTypeEnum {
    UserAccount = "UserAccount",
    UserProfile = "UserProfile"
}


export class PaginationAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope: PaginationAuthScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PaginationAuthTypeEnum;
}
