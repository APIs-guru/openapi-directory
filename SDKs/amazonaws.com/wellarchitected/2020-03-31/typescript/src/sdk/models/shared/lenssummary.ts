import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LensSummary
/** 
 * A lens summary of a lens.
**/
export class LensSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LensAlias" })
  lensAlias?: string;

  @Metadata({ data: "json, name=LensName" })
  lensName?: string;

  @Metadata({ data: "json, name=LensVersion" })
  lensVersion?: string;
}
