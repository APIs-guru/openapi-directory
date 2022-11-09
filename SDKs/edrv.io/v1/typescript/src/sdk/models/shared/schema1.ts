import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Schema1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=public" })
  public?: boolean;
}
