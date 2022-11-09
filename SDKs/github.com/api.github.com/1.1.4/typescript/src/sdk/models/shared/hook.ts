import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HookResponse } from "./hookresponse";


export class HookConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_type" })
  contentType?: string;

  @Metadata({ data: "json, name=digest" })
  digest?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=insecure_ssl" })
  insecureSsl?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=room" })
  room?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=subdomain" })
  subdomain?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// Hook
/** 
 * Webhooks for repositories.
**/
export class Hook extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active: boolean;

  @Metadata({ data: "json, name=config" })
  config: HookConfig;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=events" })
  events: string[];

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=last_response" })
  lastResponse: HookResponse;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=ping_url" })
  pingUrl: string;

  @Metadata({ data: "json, name=test_url" })
  testUrl: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;
}
