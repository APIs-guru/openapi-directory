import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Command } from "./command";


export class SendCommandResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Command" })
  command?: Command;
}
