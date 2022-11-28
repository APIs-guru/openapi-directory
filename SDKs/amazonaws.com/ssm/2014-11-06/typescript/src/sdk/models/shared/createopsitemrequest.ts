import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsItemNotification } from "./opsitemnotification";
import { OpsItemDataValue } from "./opsitemdatavalue";
import { RelatedOpsItem } from "./relatedopsitem";
import { Tag } from "./tag";



export class CreateOpsItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActualEndTime" })
  actualEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ActualStartTime" })
  actualStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Notifications", elemType: OpsItemNotification })
  notifications?: OpsItemNotification[];

  @SpeakeasyMetadata({ data: "json, name=OperationalData", elemType: OpsItemDataValue })
  operationalData?: Map<string, OpsItemDataValue>;

  @SpeakeasyMetadata({ data: "json, name=OpsItemType" })
  opsItemType?: string;

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

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title: string;
}
