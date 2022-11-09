import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateTagOptionWithResourceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=TagOptionId" })
  tagOptionId: string;
}
