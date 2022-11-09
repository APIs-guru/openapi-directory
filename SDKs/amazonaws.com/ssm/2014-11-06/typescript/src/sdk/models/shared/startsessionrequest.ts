import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartSessionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentName" })
  documentName?: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string[]>;

  @Metadata({ data: "json, name=Target" })
  target: string;
}
