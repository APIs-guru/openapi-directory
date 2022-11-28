import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContextPhoto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=farm" })
  farm?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_faved" })
  isFaved?: boolean;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: number;

  @SpeakeasyMetadata({ data: "json, name=media" })
  media?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=safe" })
  safe?: boolean;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: string;

  @SpeakeasyMetadata({ data: "json, name=thumb" })
  thumb?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
