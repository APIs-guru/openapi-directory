import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;
}
