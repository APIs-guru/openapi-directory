import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateCompilationJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompilationJobArn" })
  compilationJobArn: string;
}
