import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopExecutionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=stopDate" })
  stopDate: Date;
}
