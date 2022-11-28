import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataLocationResource
/** 
 * A structure for a data location object where permissions are granted or revoked. 
**/
export class DataLocationResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
