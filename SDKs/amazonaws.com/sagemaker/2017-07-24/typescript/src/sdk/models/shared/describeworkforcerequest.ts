import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeWorkforceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkforceName" })
  workforceName: string;
}
