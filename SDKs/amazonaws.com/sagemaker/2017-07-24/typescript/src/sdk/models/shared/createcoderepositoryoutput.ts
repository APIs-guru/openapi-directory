import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateCodeRepositoryOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeRepositoryArn" })
  codeRepositoryArn: string;
}
