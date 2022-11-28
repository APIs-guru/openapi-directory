import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateExportTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "json, name=destinationPrefix" })
  destinationPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: number;

  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=logStreamNamePrefix" })
  logStreamNamePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=taskName" })
  taskName?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: number;
}
