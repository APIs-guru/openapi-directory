import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EngineAttribute } from "./engineattribute";



export class StartMaintenanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EngineAttributes", elemType: EngineAttribute })
  engineAttributes?: EngineAttribute[];

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName: string;
}
