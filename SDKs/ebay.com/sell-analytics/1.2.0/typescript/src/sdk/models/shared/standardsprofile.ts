import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Cycle } from "./cycle";
import { Metric } from "./metric";


// StandardsProfile
/** 
 * A complex type that defines a seller profile.
**/
export class StandardsProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=cycle" })
  cycle?: Cycle;

  @Metadata({ data: "json, name=defaultProgram" })
  defaultProgram?: boolean;

  @Metadata({ data: "json, name=evaluationReason" })
  evaluationReason?: string;

  @Metadata({ data: "json, name=metrics", elemType: shared.Metric })
  metrics?: Metric[];

  @Metadata({ data: "json, name=program" })
  program?: string;

  @Metadata({ data: "json, name=standardsLevel" })
  standardsLevel?: string;
}
