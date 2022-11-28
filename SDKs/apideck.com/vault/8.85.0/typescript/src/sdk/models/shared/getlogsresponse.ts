import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Log } from "./log";
import { Links } from "./links";
import { Meta } from "./meta";



export class GetLogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Log })
  data: Log[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Meta;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;
}
