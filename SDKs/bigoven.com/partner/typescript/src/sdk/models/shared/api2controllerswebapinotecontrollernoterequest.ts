import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Api2ControllersWebApiNoteControllerNoteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDate, form, name=CreationDate;" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Date, form, name=Date;" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=DateDT, form, name=DateDT;" })
  dateDt?: string;

  @SpeakeasyMetadata({ data: "json, name=GUID, form, name=GUID;" })
  guid?: string;

  @SpeakeasyMetadata({ data: "json, name=ID, form, name=ID;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Notes, form, name=Notes;" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=People, form, name=People;" })
  people?: string;

  @SpeakeasyMetadata({ data: "json, name=RecipeID, form, name=RecipeID;" })
  recipeId?: number;

  @SpeakeasyMetadata({ data: "json, name=UserID, form, name=UserID;" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=Variations, form, name=Variations;" })
  variations?: string;
}
