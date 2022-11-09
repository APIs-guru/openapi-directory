import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=IncludeAdditionalDetails" })
  includeAdditionalDetails?: boolean;
}
