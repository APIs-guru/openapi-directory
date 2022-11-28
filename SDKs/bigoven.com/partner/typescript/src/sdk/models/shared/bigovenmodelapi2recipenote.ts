import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BigOvenModelApi2RecipeNote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=DateDT" })
  dateDt?: Date;

  @SpeakeasyMetadata({ data: "json, name=GUID" })
  guid?: string;

  @SpeakeasyMetadata({ data: "json, name=ID" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=People" })
  people?: string;

  @SpeakeasyMetadata({ data: "json, name=RecipeID" })
  recipeId?: number;

  @SpeakeasyMetadata({ data: "json, name=UserID" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=Variations" })
  variations?: string;
}
