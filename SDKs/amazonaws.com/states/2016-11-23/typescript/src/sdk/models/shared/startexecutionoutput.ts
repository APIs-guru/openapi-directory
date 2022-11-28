import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartExecutionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionArn" })
  executionArn: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate: Date;
}
