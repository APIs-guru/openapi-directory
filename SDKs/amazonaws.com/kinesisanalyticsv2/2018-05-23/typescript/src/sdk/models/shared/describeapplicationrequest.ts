import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=IncludeAdditionalDetails" })
  includeAdditionalDetails?: boolean;
}
