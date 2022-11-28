import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Apk } from "./apk";



// ApksListResponse
/** 
 * Response listing all APKs.
**/
export class ApksListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apks", elemType: Apk })
  apks?: Apk[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
