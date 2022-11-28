import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigTod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=retries" })
  retries?: number;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: string;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: number;
}
