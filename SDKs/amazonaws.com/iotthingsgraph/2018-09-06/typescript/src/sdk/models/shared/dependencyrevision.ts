import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DependencyRevision
/** 
 * An object that contains the ID and revision number of a workflow or system that is part of a deployment.
**/
export class DependencyRevision extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=revisionNumber" })
  revisionNumber?: number;
}
