import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateCompilationJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompilationJobArn" })
  compilationJobArn: string;
}
