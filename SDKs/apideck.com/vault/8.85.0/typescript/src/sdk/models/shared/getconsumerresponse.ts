import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Consumer } from "./consumer";



export class GetConsumerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: Consumer;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;
}
