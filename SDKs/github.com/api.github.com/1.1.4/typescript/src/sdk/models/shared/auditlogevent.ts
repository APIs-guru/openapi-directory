import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuditLogEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=@timestamp" })
  atTimestamp?: number;

  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=active_was" })
  activeWas?: boolean;

  @Metadata({ data: "json, name=actor" })
  actor?: string;

  @Metadata({ data: "json, name=blocked_user" })
  blockedUser?: string;

  @Metadata({ data: "json, name=business" })
  business?: string;

  @Metadata({ data: "json, name=config" })
  config?: any[];

  @Metadata({ data: "json, name=config_was" })
  configWas?: any[];

  @Metadata({ data: "json, name=content_type" })
  contentType?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: number;

  @Metadata({ data: "json, name=deploy_key_fingerprint" })
  deployKeyFingerprint?: string;

  @Metadata({ data: "json, name=emoji" })
  emoji?: string;

  @Metadata({ data: "json, name=events" })
  events?: any[];

  @Metadata({ data: "json, name=events_were" })
  eventsWere?: any[];

  @Metadata({ data: "json, name=explanation" })
  explanation?: string;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=hook_id" })
  hookId?: number;

  @Metadata({ data: "json, name=limited_availability" })
  limitedAvailability?: boolean;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=old_user" })
  oldUser?: string;

  @Metadata({ data: "json, name=openssh_public_key" })
  opensshPublicKey?: string;

  @Metadata({ data: "json, name=org" })
  org?: string;

  @Metadata({ data: "json, name=previous_visibility" })
  previousVisibility?: string;

  @Metadata({ data: "json, name=read_only" })
  readOnly?: boolean;

  @Metadata({ data: "json, name=repo" })
  repo?: string;

  @Metadata({ data: "json, name=repository" })
  repository?: string;

  @Metadata({ data: "json, name=repository_public" })
  repositoryPublic?: boolean;

  @Metadata({ data: "json, name=target_login" })
  targetLogin?: string;

  @Metadata({ data: "json, name=team" })
  team?: string;

  @Metadata({ data: "json, name=transport_protocol" })
  transportProtocol?: number;

  @Metadata({ data: "json, name=transport_protocol_name" })
  transportProtocolName?: string;

  @Metadata({ data: "json, name=user" })
  user?: string;

  @Metadata({ data: "json, name=visibility" })
  visibility?: string;
}
