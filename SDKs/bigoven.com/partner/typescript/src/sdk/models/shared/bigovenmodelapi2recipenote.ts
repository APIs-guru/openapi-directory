import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BigOvenModelApi2RecipeNote extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=Date" })
  date?: string;

  @Metadata({ data: "json, name=DateDT" })
  dateDt?: Date;

  @Metadata({ data: "json, name=GUID" })
  guid?: string;

  @Metadata({ data: "json, name=ID" })
  id?: number;

  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=People" })
  people?: string;

  @Metadata({ data: "json, name=RecipeID" })
  recipeId?: number;

  @Metadata({ data: "json, name=UserID" })
  userId?: number;

  @Metadata({ data: "json, name=Variations" })
  variations?: string;
}
