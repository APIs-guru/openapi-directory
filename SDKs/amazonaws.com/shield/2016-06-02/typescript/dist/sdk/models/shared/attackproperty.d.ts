import { SpeakeasyBase } from "../../../internal/utils";
import { AttackLayerEnum } from "./attacklayerenum";
import { AttackPropertyIdentifierEnum } from "./attackpropertyidentifierenum";
import { Contributor } from "./contributor";
import { UnitEnum } from "./unitenum";
/**
 * Details of a Shield event. This is provided as part of an <a>AttackDetail</a>.
**/
export declare class AttackProperty extends SpeakeasyBase {
    attackLayer?: AttackLayerEnum;
    attackPropertyIdentifier?: AttackPropertyIdentifierEnum;
    topContributors?: Contributor[];
    total?: number;
    unit?: UnitEnum;
}
