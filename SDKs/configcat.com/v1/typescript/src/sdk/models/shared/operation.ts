import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Operation extends SpeakeasyBase {
  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=op" })
  op?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
