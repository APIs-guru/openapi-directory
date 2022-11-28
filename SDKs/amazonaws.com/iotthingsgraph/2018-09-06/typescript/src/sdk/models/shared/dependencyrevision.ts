import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DependencyRevision
/** 
 * An object that contains the ID and revision number of a workflow or system that is part of a deployment.
**/
export class DependencyRevision extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionNumber" })
  revisionNumber?: number;
}
