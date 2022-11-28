import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PaginatedPipelineKnownHosts
/** 
 * A paged list of known hosts.
**/
export class PaginatedPipelineKnownHosts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pagelen" })
  pagelen?: number;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: Map<string, any>[];
}
