import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeApplicationVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId: number;
}
