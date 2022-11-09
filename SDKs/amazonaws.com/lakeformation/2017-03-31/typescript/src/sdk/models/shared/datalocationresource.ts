import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataLocationResource
/** 
 * A structure for a data location object where permissions are granted or revoked. 
**/
export class DataLocationResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
