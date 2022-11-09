import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeApplicationVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId: number;
}
