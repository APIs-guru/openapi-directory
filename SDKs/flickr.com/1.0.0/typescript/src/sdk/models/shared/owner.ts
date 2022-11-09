import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Owner extends SpeakeasyBase {
  @Metadata({ data: "json, name=iconfarm" })
  iconfarm?: string;

  @Metadata({ data: "json, name=iconserver" })
  iconserver?: string;

  @Metadata({ data: "json, name=is_ad_free" })
  isAdFree?: boolean;

  @Metadata({ data: "json, name=ispro" })
  ispro?: boolean;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=noindexfollow" })
  noindexfollow?: boolean;

  @Metadata({ data: "json, name=nsid" })
  nsid?: string;

  @Metadata({ data: "json, name=path_alias" })
  pathAlias?: string;

  @Metadata({ data: "json, name=realname" })
  realname?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
