import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CommitDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author_date" })
  authorDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=author_email" })
  authorEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=author_login" })
  authorLogin?: string;

  @SpeakeasyMetadata({ data: "json, name=author_name" })
  authorName?: string;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=commit" })
  commit?: string;

  @SpeakeasyMetadata({ data: "json, name=commit_url" })
  commitUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=committer_date" })
  committerDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=committer_email" })
  committerEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=committer_login" })
  committerLogin?: string;

  @SpeakeasyMetadata({ data: "json, name=committer_name" })
  committerName?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;
}
