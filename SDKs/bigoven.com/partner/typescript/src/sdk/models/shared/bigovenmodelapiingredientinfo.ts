import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BigOvenModelApiIngredientInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Department" })
  department?: string;

  @SpeakeasyMetadata({ data: "json, name=MasterIngredientID" })
  masterIngredientId?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=UsuallyOnHand" })
  usuallyOnHand?: boolean;
}
