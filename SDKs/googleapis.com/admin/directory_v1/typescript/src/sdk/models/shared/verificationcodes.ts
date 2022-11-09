import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VerificationCode } from "./verificationcode";


// VerificationCodes
/** 
 * JSON response template for List verification codes operation in Directory API.
**/
export class VerificationCodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=items", elemType: shared.VerificationCode })
  items?: VerificationCode[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
