import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopExecutionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stopDate" })
  stopDate: Date;
}
