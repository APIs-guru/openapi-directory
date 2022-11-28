import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCompilationJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompilationJobName" })
  compilationJobName: string;
}
