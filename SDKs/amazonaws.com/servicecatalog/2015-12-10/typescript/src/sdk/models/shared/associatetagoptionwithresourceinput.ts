import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateTagOptionWithResourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=TagOptionId" })
  tagOptionId: string;
}
