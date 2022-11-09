import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeStatementRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;
}
