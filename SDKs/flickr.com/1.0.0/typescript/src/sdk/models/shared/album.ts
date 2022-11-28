import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Album extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=can_comment" })
  canComment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=count_comments" })
  countComments?: number;

  @SpeakeasyMetadata({ data: "json, name=count_views" })
  countViews?: number;

  @SpeakeasyMetadata({ data: "json, name=date_create" })
  dateCreate?: number;

  @SpeakeasyMetadata({ data: "json, name=date_update" })
  dateUpdate?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=farm" })
  farm?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=photos" })
  photos?: number;

  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos?: number;
}
