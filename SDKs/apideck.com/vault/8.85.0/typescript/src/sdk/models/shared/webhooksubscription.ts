import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WebhookSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=downstream_event_types" })
  downstreamEventTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=downstream_id" })
  downstreamId?: string;

  @SpeakeasyMetadata({ data: "json, name=execute_url" })
  executeUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=unify_event_types" })
  unifyEventTypes?: string[];
}
