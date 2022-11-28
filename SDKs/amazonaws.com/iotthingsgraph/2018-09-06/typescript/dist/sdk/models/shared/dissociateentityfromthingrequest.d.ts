import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
export declare class DissociateEntityFromThingRequest extends SpeakeasyBase {
    entityType: EntityTypeEnum;
    thingName: string;
}
