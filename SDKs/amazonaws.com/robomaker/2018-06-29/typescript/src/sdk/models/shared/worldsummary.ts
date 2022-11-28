import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorldSummary
/** 
 * Information about a world.
**/
export class WorldSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=generationJob" })
  generationJob?: string;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: string;
}
