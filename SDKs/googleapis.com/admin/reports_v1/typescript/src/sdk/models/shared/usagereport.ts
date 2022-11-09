import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// UsageReportEntity
/** 
 * Output only. Information about the type of the item.
**/
export class UsageReportEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=entityId" })
  entityId?: string;

  @Metadata({ data: "json, name=profileId" })
  profileId?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=userEmail" })
  userEmail?: string;
}


export class UsageReportParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @Metadata({ data: "json, name=datetimeValue" })
  datetimeValue?: Date;

  @Metadata({ data: "json, name=intValue" })
  intValue?: string;

  @Metadata({ data: "json, name=msgValue" })
  msgValue?: Map<string, any>[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}


// UsageReport
/** 
 * JSON template for a usage report.
**/
export class UsageReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=entity" })
  entity?: UsageReportEntity;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=parameters", elemType: shared.UsageReportParameters })
  parameters?: UsageReportParameters[];
}
