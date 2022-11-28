import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MinimalRepository } from "./minimalrepository";



export class ThreadSubject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latest_comment_url" })
  latestCommentUrl: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


// Thread
/** 
 * Thread
**/
export class Thread extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=last_read_at" })
  lastReadAt: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: string;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository: MinimalRepository;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject: ThreadSubject;

  @SpeakeasyMetadata({ data: "json, name=subscription_url" })
  subscriptionUrl: string;

  @SpeakeasyMetadata({ data: "json, name=unread" })
  unread: boolean;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
