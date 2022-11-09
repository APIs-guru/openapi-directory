import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Patch
/** 
 * Represents metadata about a patch.
**/
export class Patch extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdvisoryIds" })
  advisoryIds?: string[];

  @Metadata({ data: "json, name=Arch" })
  arch?: string;

  @Metadata({ data: "json, name=BugzillaIds" })
  bugzillaIds?: string[];

  @Metadata({ data: "json, name=CVEIds" })
  cveIds?: string[];

  @Metadata({ data: "json, name=Classification" })
  classification?: string;

  @Metadata({ data: "json, name=ContentUrl" })
  contentUrl?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Epoch" })
  epoch?: number;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=KbNumber" })
  kbNumber?: string;

  @Metadata({ data: "json, name=Language" })
  language?: string;

  @Metadata({ data: "json, name=MsrcNumber" })
  msrcNumber?: string;

  @Metadata({ data: "json, name=MsrcSeverity" })
  msrcSeverity?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Product" })
  product?: string;

  @Metadata({ data: "json, name=ProductFamily" })
  productFamily?: string;

  @Metadata({ data: "json, name=Release" })
  release?: string;

  @Metadata({ data: "json, name=ReleaseDate" })
  releaseDate?: Date;

  @Metadata({ data: "json, name=Repository" })
  repository?: string;

  @Metadata({ data: "json, name=Severity" })
  severity?: string;

  @Metadata({ data: "json, name=Title" })
  title?: string;

  @Metadata({ data: "json, name=Vendor" })
  vendor?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
