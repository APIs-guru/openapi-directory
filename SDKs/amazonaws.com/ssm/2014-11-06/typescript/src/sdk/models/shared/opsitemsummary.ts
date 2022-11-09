import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OpsItemDataValue } from "./opsitemdatavalue";
import { OpsItemStatusEnum } from "./opsitemstatusenum";


// OpsItemSummary
/** 
 * A count of OpsItems.
**/
export class OpsItemSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActualEndTime" })
  actualEndTime?: Date;

  @Metadata({ data: "json, name=ActualStartTime" })
  actualStartTime?: Date;

  @Metadata({ data: "json, name=Category" })
  category?: string;

  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: string;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=OperationalData", elemType: shared.OpsItemDataValue })
  operationalData?: Map<string, OpsItemDataValue>;

  @Metadata({ data: "json, name=OpsItemId" })
  opsItemId?: string;

  @Metadata({ data: "json, name=OpsItemType" })
  opsItemType?: string;

  @Metadata({ data: "json, name=PlannedEndTime" })
  plannedEndTime?: Date;

  @Metadata({ data: "json, name=PlannedStartTime" })
  plannedStartTime?: Date;

  @Metadata({ data: "json, name=Priority" })
  priority?: number;

  @Metadata({ data: "json, name=Severity" })
  severity?: string;

  @Metadata({ data: "json, name=Source" })
  source?: string;

  @Metadata({ data: "json, name=Status" })
  status?: OpsItemStatusEnum;

  @Metadata({ data: "json, name=Title" })
  title?: string;
}
