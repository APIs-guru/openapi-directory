import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Owner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iconfarm" })
  iconfarm?: string;

  @SpeakeasyMetadata({ data: "json, name=iconserver" })
  iconserver?: string;

  @SpeakeasyMetadata({ data: "json, name=is_ad_free" })
  isAdFree?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ispro" })
  ispro?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=noindexfollow" })
  noindexfollow?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nsid" })
  nsid?: string;

  @SpeakeasyMetadata({ data: "json, name=path_alias" })
  pathAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=realname" })
  realname?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
