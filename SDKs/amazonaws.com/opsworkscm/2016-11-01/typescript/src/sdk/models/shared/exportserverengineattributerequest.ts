import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EngineAttribute } from "./engineattribute";



export class ExportServerEngineAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExportAttributeName" })
  exportAttributeName: string;

  @SpeakeasyMetadata({ data: "json, name=InputAttributes", elemType: EngineAttribute })
  inputAttributes?: EngineAttribute[];

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName: string;
}
