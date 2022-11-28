import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeReturnShippingLabelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
