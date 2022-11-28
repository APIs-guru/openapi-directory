import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AccountTokenByCodeRequestScopesEnum {
    Catalog = "Catalog",
    Commerce = "Commerce",
    Settings = "Settings",
    Playback = "Playback"
}


export class AccountTokenByCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes: AccountTokenByCodeRequestScopesEnum[];
}
