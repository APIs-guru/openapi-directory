import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Translation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
