import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeCodeRepositoryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeRepositoryName" })
  codeRepositoryName: string;
}
