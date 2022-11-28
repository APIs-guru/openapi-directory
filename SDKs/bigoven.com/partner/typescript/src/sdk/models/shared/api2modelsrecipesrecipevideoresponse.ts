import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Api2ModelsRecipesRecipeVideoResponse
/** 
 * DTO used to return the details of a recipe video
**/
export class Api2ModelsRecipesRecipeVideoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InsertedOn" })
  insertedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=IsPrimaryVideo" })
  isPrimaryVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MediaId" })
  mediaId?: string;

  @SpeakeasyMetadata({ data: "json, name=VidId" })
  vidId?: number;
}
