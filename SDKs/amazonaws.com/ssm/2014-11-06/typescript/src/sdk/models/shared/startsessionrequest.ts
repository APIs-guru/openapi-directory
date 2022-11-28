import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentName" })
  documentName?: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=Target" })
  target: string;
}
