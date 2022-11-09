import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EngineAttribute } from "./engineattribute";


export class AssociateNodeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EngineAttributes", elemType: shared.EngineAttribute })
  engineAttributes: EngineAttribute[];

  @Metadata({ data: "json, name=NodeName" })
  nodeName: string;

  @Metadata({ data: "json, name=ServerName" })
  serverName: string;
}
