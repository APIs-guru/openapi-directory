import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RepositoryPreReceiveHook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configuration_url" })
  configurationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=enforcement" })
  enforcement?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
