import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PaginationAuthScopeEnum {
    Catalog = "Catalog"
,    Commerce = "Commerce"
,    Settings = "Settings"
}

export enum PaginationAuthTypeEnum {
    UserAccount = "UserAccount"
,    UserProfile = "UserProfile"
}


export class PaginationAuth extends SpeakeasyBase {
  @Metadata({ data: "json, name=scope" })
  scope: PaginationAuthScopeEnum;

  @Metadata({ data: "json, name=type" })
  type: PaginationAuthTypeEnum;
}
