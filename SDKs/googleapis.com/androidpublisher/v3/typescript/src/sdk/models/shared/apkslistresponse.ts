import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Apk } from "./apk";


// ApksListResponse
/** 
 * Response listing all APKs.
**/
export class ApksListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apks", elemType: shared.Apk })
  apks?: Apk[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
