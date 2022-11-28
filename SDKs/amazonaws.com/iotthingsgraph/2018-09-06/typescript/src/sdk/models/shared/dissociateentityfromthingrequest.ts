import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";



export class DissociateEntityFromThingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityType" })
  entityType: EntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=thingName" })
  thingName: string;
}
