import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;
}
