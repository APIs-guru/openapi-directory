import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PorterLargeFile
/** 
 * Porter Large File
**/
export class PorterLargeFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=oid" })
  oid: string;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=ref_name" })
  refName: string;

  @Metadata({ data: "json, name=size" })
  size: number;
}
