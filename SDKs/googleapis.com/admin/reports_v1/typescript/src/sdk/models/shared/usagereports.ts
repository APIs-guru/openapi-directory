import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsageReport } from "./usagereport";



export class UsageReportsWarningsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class UsageReportsWarnings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=data", elemType: UsageReportsWarningsData })
  data?: UsageReportsWarningsData[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class UsageReports extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=usageReports", elemType: UsageReport })
  usageReports?: UsageReport[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: UsageReportsWarnings })
  warnings?: UsageReportsWarnings[];
}
