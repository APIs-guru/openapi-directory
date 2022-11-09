import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Consumer } from "./consumer";


export class GetConsumerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: Consumer;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}
