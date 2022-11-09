import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UsageReport } from "./usagereport";


export class UsageReportsWarningsData extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class UsageReportsWarnings extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=data", elemType: shared.UsageReportsWarningsData })
  data?: UsageReportsWarningsData[];

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class UsageReports extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=usageReports", elemType: shared.UsageReport })
  usageReports?: UsageReport[];

  @Metadata({ data: "json, name=warnings", elemType: shared.UsageReportsWarnings })
  warnings?: UsageReportsWarnings[];
}
