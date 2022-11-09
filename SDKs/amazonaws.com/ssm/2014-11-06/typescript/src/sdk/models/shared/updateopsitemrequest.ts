import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OpsItemNotification } from "./opsitemnotification";
import { OpsItemDataValue } from "./opsitemdatavalue";
import { RelatedOpsItem } from "./relatedopsitem";
import { OpsItemStatusEnum } from "./opsitemstatusenum";


export class UpdateOpsItemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActualEndTime" })
  actualEndTime?: Date;

  @Metadata({ data: "json, name=ActualStartTime" })
  actualStartTime?: Date;

  @Metadata({ data: "json, name=Category" })
  category?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Notifications", elemType: shared.OpsItemNotification })
  notifications?: OpsItemNotification[];

  @Metadata({ data: "json, name=OperationalData", elemType: shared.OpsItemDataValue })
  operationalData?: Map<string, OpsItemDataValue>;

  @Metadata({ data: "json, name=OperationalDataToDelete" })
  operationalDataToDelete?: string[];

  @Metadata({ data: "json, name=OpsItemId" })
  opsItemId: string;

  @Metadata({ data: "json, name=PlannedEndTime" })
  plannedEndTime?: Date;

  @Metadata({ data: "json, name=PlannedStartTime" })
  plannedStartTime?: Date;

  @Metadata({ data: "json, name=Priority" })
  priority?: number;

  @Metadata({ data: "json, name=RelatedOpsItems", elemType: shared.RelatedOpsItem })
  relatedOpsItems?: RelatedOpsItem[];

  @Metadata({ data: "json, name=Severity" })
  severity?: string;

  @Metadata({ data: "json, name=Status" })
  status?: OpsItemStatusEnum;

  @Metadata({ data: "json, name=Title" })
  title?: string;
}
