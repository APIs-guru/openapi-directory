import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateExportTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination: string;

  @Metadata({ data: "json, name=destinationPrefix" })
  destinationPrefix?: string;

  @Metadata({ data: "json, name=from" })
  from: number;

  @Metadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @Metadata({ data: "json, name=logStreamNamePrefix" })
  logStreamNamePrefix?: string;

  @Metadata({ data: "json, name=taskName" })
  taskName?: string;

  @Metadata({ data: "json, name=to" })
  to: number;
}
