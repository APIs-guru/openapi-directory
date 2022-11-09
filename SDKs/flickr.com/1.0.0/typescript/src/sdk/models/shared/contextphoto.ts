import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContextPhoto extends SpeakeasyBase {
  @Metadata({ data: "json, name=farm" })
  farm?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_faved" })
  isFaved?: boolean;

  @Metadata({ data: "json, name=license" })
  license?: number;

  @Metadata({ data: "json, name=media" })
  media?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=safe" })
  safe?: boolean;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=server" })
  server?: string;

  @Metadata({ data: "json, name=thumb" })
  thumb?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
