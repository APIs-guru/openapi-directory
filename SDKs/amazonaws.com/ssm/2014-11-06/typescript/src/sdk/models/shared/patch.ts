import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Patch
/** 
 * Represents metadata about a patch.
**/
export class Patch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdvisoryIds" })
  advisoryIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Arch" })
  arch?: string;

  @SpeakeasyMetadata({ data: "json, name=BugzillaIds" })
  bugzillaIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=CVEIds" })
  cveIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Classification" })
  classification?: string;

  @SpeakeasyMetadata({ data: "json, name=ContentUrl" })
  contentUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Epoch" })
  epoch?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=KbNumber" })
  kbNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=MsrcNumber" })
  msrcNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=MsrcSeverity" })
  msrcSeverity?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Product" })
  product?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductFamily" })
  productFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=Release" })
  release?: string;

  @SpeakeasyMetadata({ data: "json, name=ReleaseDate" })
  releaseDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Repository" })
  repository?: string;

  @SpeakeasyMetadata({ data: "json, name=Severity" })
  severity?: string;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=Vendor" })
  vendor?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
