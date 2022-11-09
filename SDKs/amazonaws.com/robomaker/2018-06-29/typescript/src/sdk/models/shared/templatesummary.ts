import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TemplateSummary
/** 
 * Summary information for a template.
**/
export class TemplateSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
