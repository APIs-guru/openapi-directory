import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SystemTemplateSummary
/** 
 * An object that contains information about a system.
**/
export class SystemTemplateSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=revisionNumber" })
  revisionNumber?: number;
}
