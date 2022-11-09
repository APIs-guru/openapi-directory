import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreReceiveHookEnvironmentDownload extends SpeakeasyBase {
  @Metadata({ data: "json, name=downloaded_at" })
  downloadedAt?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class PreReceiveHookEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=default_environment" })
  defaultEnvironment?: boolean;

  @Metadata({ data: "json, name=download" })
  download?: PreReceiveHookEnvironmentDownload;

  @Metadata({ data: "json, name=hooks_count" })
  hooksCount?: number;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=image_url" })
  imageUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class PreReceiveHookScriptRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=full_name" })
  fullName?: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class PreReceiveHook extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_downstream_configuration" })
  allowDownstreamConfiguration?: boolean;

  @Metadata({ data: "json, name=enforcement" })
  enforcement?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: PreReceiveHookEnvironment;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=script" })
  script?: string;

  @Metadata({ data: "json, name=script_repository" })
  scriptRepository?: PreReceiveHookScriptRepository;
}
