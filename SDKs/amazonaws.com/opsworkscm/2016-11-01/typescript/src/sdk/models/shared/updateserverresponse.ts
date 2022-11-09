import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Server } from "./server";


export class UpdateServerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Server" })
  server?: Server;
}
