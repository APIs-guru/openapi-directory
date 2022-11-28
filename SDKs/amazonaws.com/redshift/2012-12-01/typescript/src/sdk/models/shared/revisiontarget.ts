import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RevisionTarget
/** 
 * Describes a <code>RevisionTarget</code>.
**/
export class RevisionTarget extends SpeakeasyBase {
  @SpeakeasyMetadata()
  databaseRevision?: string;

  @SpeakeasyMetadata()
  databaseRevisionReleaseDate?: Date;

  @SpeakeasyMetadata()
  description?: string;
}
