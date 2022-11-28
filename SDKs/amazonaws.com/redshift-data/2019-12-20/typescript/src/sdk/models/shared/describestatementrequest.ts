import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeStatementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;
}
