import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsItemDataValue } from "./opsitemdatavalue";
import { OpsItemStatusEnum } from "./opsitemstatusenum";



// OpsItemSummary
/** 
 * A count of OpsItems.
**/
export class OpsItemSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActualEndTime" })
  actualEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ActualStartTime" })
  actualStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=OperationalData", elemType: OpsItemDataValue })
  operationalData?: Map<string, OpsItemDataValue>;

  @SpeakeasyMetadata({ data: "json, name=OpsItemId" })
  opsItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=OpsItemType" })
  opsItemType?: string;

  @SpeakeasyMetadata({ data: "json, name=PlannedEndTime" })
  plannedEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=PlannedStartTime" })
  plannedStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=Severity" })
  severity?: string;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: OpsItemStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;
}
