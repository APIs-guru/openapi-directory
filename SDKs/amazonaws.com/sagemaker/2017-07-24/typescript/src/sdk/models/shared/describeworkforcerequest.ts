import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeWorkforceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=WorkforceName" })
  workforceName: string;
}
