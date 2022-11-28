import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFlowTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=revisionNumber" })
  revisionNumber?: number;
}
