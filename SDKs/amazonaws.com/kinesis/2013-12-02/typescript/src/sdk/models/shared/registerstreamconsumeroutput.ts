import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Consumer } from "./consumer";



export class RegisterStreamConsumerOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Consumer" })
  consumer: Consumer;
}
