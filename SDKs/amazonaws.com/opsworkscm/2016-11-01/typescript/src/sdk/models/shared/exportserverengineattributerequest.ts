import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EngineAttribute } from "./engineattribute";


export class ExportServerEngineAttributeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExportAttributeName" })
  exportAttributeName: string;

  @Metadata({ data: "json, name=InputAttributes", elemType: shared.EngineAttribute })
  inputAttributes?: EngineAttribute[];

  @Metadata({ data: "json, name=ServerName" })
  serverName: string;
}
