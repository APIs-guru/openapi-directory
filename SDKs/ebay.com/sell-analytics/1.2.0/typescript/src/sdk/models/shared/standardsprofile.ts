import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cycle } from "./cycle";
import { Metric } from "./metric";



// StandardsProfile
/** 
 * A complex type that defines a seller profile.
**/
export class StandardsProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cycle" })
  cycle?: Cycle;

  @SpeakeasyMetadata({ data: "json, name=defaultProgram" })
  defaultProgram?: boolean;

  @SpeakeasyMetadata({ data: "json, name=evaluationReason" })
  evaluationReason?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: Metric })
  metrics?: Metric[];

  @SpeakeasyMetadata({ data: "json, name=program" })
  program?: string;

  @SpeakeasyMetadata({ data: "json, name=standardsLevel" })
  standardsLevel?: string;
}
