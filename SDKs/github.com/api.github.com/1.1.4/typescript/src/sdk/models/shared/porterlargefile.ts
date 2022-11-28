import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PorterLargeFile
/** 
 * Porter Large File
**/
export class PorterLargeFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=oid" })
  oid: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=ref_name" })
  refName: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;
}
