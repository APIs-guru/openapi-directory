import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuditLogEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@timestamp" })
  atTimestamp?: number;

  @SpeakeasyMetadata({ data: "json, name=_document_id" })
  documentId?: string;

  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=active_was" })
  activeWas?: boolean;

  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor?: string;

  @SpeakeasyMetadata({ data: "json, name=blocked_user" })
  blockedUser?: string;

  @SpeakeasyMetadata({ data: "json, name=business" })
  business?: string;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: any[];

  @SpeakeasyMetadata({ data: "json, name=config_was" })
  configWas?: any[];

  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: number;

  @SpeakeasyMetadata({ data: "json, name=deploy_key_fingerprint" })
  deployKeyFingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=emoji" })
  emoji?: string;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: any[];

  @SpeakeasyMetadata({ data: "json, name=events_were" })
  eventsWere?: any[];

  @SpeakeasyMetadata({ data: "json, name=explanation" })
  explanation?: string;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=hook_id" })
  hookId?: number;

  @SpeakeasyMetadata({ data: "json, name=limited_availability" })
  limitedAvailability?: boolean;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=old_user" })
  oldUser?: string;

  @SpeakeasyMetadata({ data: "json, name=openssh_public_key" })
  opensshPublicKey?: string;

  @SpeakeasyMetadata({ data: "json, name=org" })
  org?: string;

  @SpeakeasyMetadata({ data: "json, name=previous_visibility" })
  previousVisibility?: string;

  @SpeakeasyMetadata({ data: "json, name=read_only" })
  readOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;

  @SpeakeasyMetadata({ data: "json, name=repository_public" })
  repositoryPublic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=target_login" })
  targetLogin?: string;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "json, name=transport_protocol" })
  transportProtocol?: number;

  @SpeakeasyMetadata({ data: "json, name=transport_protocol_name" })
  transportProtocolName?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: string;
}
