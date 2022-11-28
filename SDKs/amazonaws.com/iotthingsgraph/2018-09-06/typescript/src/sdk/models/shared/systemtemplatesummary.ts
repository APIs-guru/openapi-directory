import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SystemTemplateSummary
/** 
 * An object that contains information about a system.
**/
export class SystemTemplateSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionNumber" })
  revisionNumber?: number;
}
