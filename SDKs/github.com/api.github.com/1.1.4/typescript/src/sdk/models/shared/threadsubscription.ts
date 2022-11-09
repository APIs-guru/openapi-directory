import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ThreadSubscription
/** 
 * Thread Subscription
**/
export class ThreadSubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=ignored" })
  ignored: boolean;

  @Metadata({ data: "json, name=reason" })
  reason: string;

  @Metadata({ data: "json, name=repository_url" })
  repositoryUrl?: string;

  @Metadata({ data: "json, name=subscribed" })
  subscribed: boolean;

  @Metadata({ data: "json, name=thread_url" })
  threadUrl?: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
