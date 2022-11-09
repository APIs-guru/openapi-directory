import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartAssociationsOnceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationIds" })
  associationIds: string[];
}
