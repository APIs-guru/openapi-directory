import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateCodeRepositoryOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeRepositoryArn" })
  codeRepositoryArn: string;
}
