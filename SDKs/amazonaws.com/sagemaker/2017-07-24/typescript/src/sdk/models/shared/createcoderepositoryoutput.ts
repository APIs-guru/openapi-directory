import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateCodeRepositoryOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeRepositoryArn" })
  codeRepositoryArn: string;
}
