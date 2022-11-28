import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateCodeRepositoryOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeRepositoryArn" })
  codeRepositoryArn: string;
}
