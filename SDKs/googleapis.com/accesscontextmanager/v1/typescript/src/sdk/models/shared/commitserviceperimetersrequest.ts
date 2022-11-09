import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CommitServicePerimetersRequest
/** 
 * A request to commit dry-run specs in all Service Perimeters belonging to an Access Policy.
**/
export class CommitServicePerimetersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;
}
