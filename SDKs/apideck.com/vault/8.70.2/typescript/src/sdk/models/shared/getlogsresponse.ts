import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Log } from "./log";
import { Links } from "./links";
import { Meta } from "./meta";


export class GetLogsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Log })
  data: Log[];

  @Metadata({ data: "json, name=links" })
  links?: Links;

  @Metadata({ data: "json, name=meta" })
  meta?: Meta;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}
