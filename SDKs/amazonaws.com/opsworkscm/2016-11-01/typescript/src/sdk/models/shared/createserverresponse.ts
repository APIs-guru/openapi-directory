import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Server } from "./server";



export class CreateServerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Server" })
  server?: Server;
}
