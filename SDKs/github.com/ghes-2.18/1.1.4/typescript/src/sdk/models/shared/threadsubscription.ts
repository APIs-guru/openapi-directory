import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ThreadSubscription
/** 
 * Thread Subscription
**/
export class ThreadSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=ignored" })
  ignored: boolean;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: string;

  @SpeakeasyMetadata({ data: "json, name=repository_url" })
  repositoryUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=subscribed" })
  subscribed: boolean;

  @SpeakeasyMetadata({ data: "json, name=thread_url" })
  threadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
