import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Server } from "./server";


export class StartMaintenanceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Server" })
  server?: Server;
}
