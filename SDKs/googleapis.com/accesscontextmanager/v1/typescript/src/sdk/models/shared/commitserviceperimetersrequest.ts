import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CommitServicePerimetersRequest
/** 
 * A request to commit dry-run specs in all Service Perimeters belonging to an Access Policy.
**/
export class CommitServicePerimetersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;
}
