import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Album extends SpeakeasyBase {
  @Metadata({ data: "json, name=can_comment" })
  canComment?: boolean;

  @Metadata({ data: "json, name=count_comments" })
  countComments?: number;

  @Metadata({ data: "json, name=count_views" })
  countViews?: number;

  @Metadata({ data: "json, name=date_create" })
  dateCreate?: number;

  @Metadata({ data: "json, name=date_update" })
  dateUpdate?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=farm" })
  farm?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=photos" })
  photos?: number;

  @Metadata({ data: "json, name=primary" })
  primary?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=server" })
  server?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=videos" })
  videos?: number;
}
