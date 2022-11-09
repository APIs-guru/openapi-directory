import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopCompilationJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompilationJobName" })
  compilationJobName: string;
}
