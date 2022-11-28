import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopCompilationJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompilationJobName" })
  compilationJobName: string;
}
