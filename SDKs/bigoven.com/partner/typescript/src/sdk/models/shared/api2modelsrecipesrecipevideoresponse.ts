import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Api2ModelsRecipesRecipeVideoResponse
/** 
 * DTO used to return the details of a recipe video
**/
export class Api2ModelsRecipesRecipeVideoResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=InsertedOn" })
  insertedOn?: Date;

  @Metadata({ data: "json, name=IsPrimaryVideo" })
  isPrimaryVideo?: boolean;

  @Metadata({ data: "json, name=MediaId" })
  mediaId?: string;

  @Metadata({ data: "json, name=VidId" })
  vidId?: number;
}
