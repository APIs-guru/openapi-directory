import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrgPreReceiveHook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_downstream_configuration" })
  allowDownstreamConfiguration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=configuration_url" })
  configurationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=enforcement" })
  enforcement?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
