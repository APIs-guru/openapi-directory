import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EngineAttribute } from "./engineattribute";


export class ExportServerEngineAttributeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EngineAttribute" })
  engineAttribute?: EngineAttribute;

  @Metadata({ data: "json, name=ServerName" })
  serverName?: string;
}
