import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FlowTemplateSummary
/** 
 * An object that contains summary information about a workflow.
**/
export class FlowTemplateSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=revisionNumber" })
  revisionNumber?: number;
}
