import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FlowTemplateSummary
/** 
 * An object that contains summary information about a workflow.
**/
export class FlowTemplateSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionNumber" })
  revisionNumber?: number;
}
