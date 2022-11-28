import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsItemNotification } from "./opsitemnotification";
import { OpsItemDataValue } from "./opsitemdatavalue";
import { RelatedOpsItem } from "./relatedopsitem";
import { OpsItemStatusEnum } from "./opsitemstatusenum";



export class UpdateOpsItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActualEndTime" })
  actualEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ActualStartTime" })
  actualStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Notifications", elemType: OpsItemNotification })
  notifications?: OpsItemNotification[];

  @SpeakeasyMetadata({ data: "json, name=OperationalData", elemType: OpsItemDataValue })
  operationalData?: Map<string, OpsItemDataValue>;

  @SpeakeasyMetadata({ data: "json, name=OperationalDataToDelete" })
  operationalDataToDelete?: string[];

  @SpeakeasyMetadata({ data: "json, name=OpsItemId" })
  opsItemId: string;

  @SpeakeasyMetadata({ data: "json, name=PlannedEndTime" })
  plannedEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=PlannedStartTime" })
  plannedStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=RelatedOpsItems", elemType: RelatedOpsItem })
  relatedOpsItems?: RelatedOpsItem[];

  @SpeakeasyMetadata({ data: "json, name=Severity" })
  severity?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: OpsItemStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;
}
