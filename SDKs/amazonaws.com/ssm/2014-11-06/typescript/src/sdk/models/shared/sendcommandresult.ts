import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Command } from "./command";



export class SendCommandResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Command" })
  command?: Command;
}
