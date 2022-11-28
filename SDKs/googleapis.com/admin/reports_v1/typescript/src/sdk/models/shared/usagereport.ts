import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UsageReportEntity
/** 
 * Output only. Information about the type of the item.
**/
export class UsageReportEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=entityId" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=profileId" })
  profileId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=userEmail" })
  userEmail?: string;
}


export class UsageReportParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=datetimeValue" })
  datetimeValue?: Date;

  @SpeakeasyMetadata({ data: "json, name=intValue" })
  intValue?: string;

  @SpeakeasyMetadata({ data: "json, name=msgValue" })
  msgValue?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}


// UsageReport
/** 
 * JSON template for a usage report.
**/
export class UsageReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=entity" })
  entity?: UsageReportEntity;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: UsageReportParameters })
  parameters?: UsageReportParameters[];
}
