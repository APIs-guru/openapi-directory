import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Consumer } from "./consumer";


export class RegisterStreamConsumerOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Consumer" })
  consumer: Consumer;
}
