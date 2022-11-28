import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LensSummary
/** 
 * A lens summary of a lens.
**/
export class LensSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LensAlias" })
  lensAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=LensName" })
  lensName?: string;

  @SpeakeasyMetadata({ data: "json, name=LensVersion" })
  lensVersion?: string;
}
