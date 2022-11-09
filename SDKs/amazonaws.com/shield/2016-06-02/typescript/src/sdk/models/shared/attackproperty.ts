import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttackLayerEnum } from "./attacklayerenum";
import { AttackPropertyIdentifierEnum } from "./attackpropertyidentifierenum";
import { Contributor } from "./contributor";
import { UnitEnum } from "./unitenum";


// AttackProperty
/** 
 * Details of a Shield event. This is provided as part of an <a>AttackDetail</a>.
**/
export class AttackProperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttackLayer" })
  attackLayer?: AttackLayerEnum;

  @Metadata({ data: "json, name=AttackPropertyIdentifier" })
  attackPropertyIdentifier?: AttackPropertyIdentifierEnum;

  @Metadata({ data: "json, name=TopContributors", elemType: shared.Contributor })
  topContributors?: Contributor[];

  @Metadata({ data: "json, name=Total" })
  total?: number;

  @Metadata({ data: "json, name=Unit" })
  unit?: UnitEnum;
}
