import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RepositorySubscription
/** 
 * Repository invitations let you manage who you collaborate with.
**/
export class RepositorySubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=ignored" })
  ignored: boolean;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: string;

  @SpeakeasyMetadata({ data: "json, name=repository_url" })
  repositoryUrl: string;

  @SpeakeasyMetadata({ data: "json, name=subscribed" })
  subscribed: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
