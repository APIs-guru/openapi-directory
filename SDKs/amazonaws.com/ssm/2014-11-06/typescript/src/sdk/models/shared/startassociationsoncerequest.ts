import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartAssociationsOnceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationIds" })
  associationIds: string[];
}
