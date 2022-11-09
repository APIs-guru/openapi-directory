import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Api2ControllersWebApiNoteControllerNoteRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDate, form, name=CreationDate;" })
  creationDate?: Date;

  @Metadata({ data: "json, name=Date, form, name=Date;" })
  date?: Date;

  @Metadata({ data: "json, name=DateDT, form, name=DateDT;" })
  dateDt?: string;

  @Metadata({ data: "json, name=GUID, form, name=GUID;" })
  guid?: string;

  @Metadata({ data: "json, name=ID, form, name=ID;" })
  id?: number;

  @Metadata({ data: "json, name=Notes, form, name=Notes;" })
  notes?: string;

  @Metadata({ data: "json, name=People, form, name=People;" })
  people?: string;

  @Metadata({ data: "json, name=RecipeID, form, name=RecipeID;" })
  recipeId?: number;

  @Metadata({ data: "json, name=UserID, form, name=UserID;" })
  userId?: number;

  @Metadata({ data: "json, name=Variations, form, name=Variations;" })
  variations?: string;
}
