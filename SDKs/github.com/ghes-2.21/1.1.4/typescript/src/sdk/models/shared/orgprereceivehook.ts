import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrgPreReceiveHook extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_downstream_configuration" })
  allowDownstreamConfiguration?: boolean;

  @Metadata({ data: "json, name=configuration_url" })
  configurationUrl?: string;

  @Metadata({ data: "json, name=enforcement" })
  enforcement?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
