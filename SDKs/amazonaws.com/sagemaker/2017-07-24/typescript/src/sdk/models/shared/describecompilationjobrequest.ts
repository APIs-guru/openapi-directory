import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeCompilationJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompilationJobName" })
  compilationJobName: string;
}
