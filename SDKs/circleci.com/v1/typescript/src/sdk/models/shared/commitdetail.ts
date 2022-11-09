import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CommitDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=author_date" })
  authorDate?: Date;

  @Metadata({ data: "json, name=author_email" })
  authorEmail?: string;

  @Metadata({ data: "json, name=author_login" })
  authorLogin?: string;

  @Metadata({ data: "json, name=author_name" })
  authorName?: string;

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=commit" })
  commit?: string;

  @Metadata({ data: "json, name=commit_url" })
  commitUrl?: string;

  @Metadata({ data: "json, name=committer_date" })
  committerDate?: Date;

  @Metadata({ data: "json, name=committer_email" })
  committerEmail?: string;

  @Metadata({ data: "json, name=committer_login" })
  committerLogin?: string;

  @Metadata({ data: "json, name=committer_name" })
  committerName?: string;

  @Metadata({ data: "json, name=subject" })
  subject?: string;
}
