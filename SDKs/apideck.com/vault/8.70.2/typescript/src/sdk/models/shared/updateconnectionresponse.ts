import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Connection } from "./connection";


export class UpdateConnectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: Connection;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}
