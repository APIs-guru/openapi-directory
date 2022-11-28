import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EngineAttribute } from "./engineattribute";



export class ExportServerEngineAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EngineAttribute" })
  engineAttribute?: EngineAttribute;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName?: string;
}
