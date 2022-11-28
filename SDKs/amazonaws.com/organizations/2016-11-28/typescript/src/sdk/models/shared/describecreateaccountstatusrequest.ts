import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCreateAccountStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateAccountRequestId" })
  createAccountRequestId: string;
}
