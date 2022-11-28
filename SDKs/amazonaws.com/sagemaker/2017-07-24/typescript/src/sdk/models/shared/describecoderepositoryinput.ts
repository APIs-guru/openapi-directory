import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCodeRepositoryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeRepositoryName" })
  codeRepositoryName: string;
}
