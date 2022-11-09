import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Translation extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=locale" })
  locale: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
