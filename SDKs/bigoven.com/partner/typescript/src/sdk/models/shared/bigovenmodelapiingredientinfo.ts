import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BigOvenModelApiIngredientInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Department" })
  department?: string;

  @Metadata({ data: "json, name=MasterIngredientID" })
  masterIngredientId?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=UsuallyOnHand" })
  usuallyOnHand?: boolean;
}
