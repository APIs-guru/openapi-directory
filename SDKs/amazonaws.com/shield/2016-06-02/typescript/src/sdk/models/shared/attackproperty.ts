import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttackLayerEnum } from "./attacklayerenum";
import { AttackPropertyIdentifierEnum } from "./attackpropertyidentifierenum";
import { Contributor } from "./contributor";
import { UnitEnum } from "./unitenum";



// AttackProperty
/** 
 * Details of a Shield event. This is provided as part of an <a>AttackDetail</a>.
**/
export class AttackProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttackLayer" })
  attackLayer?: AttackLayerEnum;

  @SpeakeasyMetadata({ data: "json, name=AttackPropertyIdentifier" })
  attackPropertyIdentifier?: AttackPropertyIdentifierEnum;

  @SpeakeasyMetadata({ data: "json, name=TopContributors", elemType: Contributor })
  topContributors?: Contributor[];

  @SpeakeasyMetadata({ data: "json, name=Total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=Unit" })
  unit?: UnitEnum;
}
