import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Server } from "./server";


export class RestoreServerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Server" })
  server?: Server;
}
