import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorldSummary
/** 
 * Information about a world.
**/
export class WorldSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=generationJob" })
  generationJob?: string;

  @Metadata({ data: "json, name=template" })
  template?: string;
}
