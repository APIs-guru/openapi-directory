import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityTypeEnum } from "./entitytypeenum";


export class DissociateEntityFromThingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityType" })
  entityType: EntityTypeEnum;

  @Metadata({ data: "json, name=thingName" })
  thingName: string;
}
