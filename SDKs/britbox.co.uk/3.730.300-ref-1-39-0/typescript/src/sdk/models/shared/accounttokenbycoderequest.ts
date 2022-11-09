import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AccountTokenByCodeRequestScopesEnum {
    Catalog = "Catalog"
,    Commerce = "Commerce"
,    Settings = "Settings"
,    Playback = "Playback"
}


export class AccountTokenByCodeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=scopes" })
  scopes: AccountTokenByCodeRequestScopesEnum[];
}
