import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MinimalRepository } from "./minimalrepository";


export class ThreadSubject extends SpeakeasyBase {
  @Metadata({ data: "json, name=latest_comment_url" })
  latestCommentUrl: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


// Thread
/** 
 * Thread
**/
export class Thread extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=last_read_at" })
  lastReadAt: string;

  @Metadata({ data: "json, name=reason" })
  reason: string;

  @Metadata({ data: "json, name=repository" })
  repository: MinimalRepository;

  @Metadata({ data: "json, name=subject" })
  subject: ThreadSubject;

  @Metadata({ data: "json, name=subscription_url" })
  subscriptionUrl: string;

  @Metadata({ data: "json, name=unread" })
  unread: boolean;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
