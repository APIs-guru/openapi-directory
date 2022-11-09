import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GlobalHook2Config extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_type" })
  contentType?: string;

  @Metadata({ data: "json, name=insecure_ssl" })
  insecureSsl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class GlobalHook2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=config" })
  config?: GlobalHook2Config;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=events" })
  events?: string[];

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ping_url" })
  pingUrl?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
