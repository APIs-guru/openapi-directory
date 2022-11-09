import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Connection } from "./connection";


export class GetConnectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Connection })
  data: Connection[];

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}
