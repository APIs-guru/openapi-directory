import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrisJob } from "./hrisjob";



export class GetHrisJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: HrisJob;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;
}
