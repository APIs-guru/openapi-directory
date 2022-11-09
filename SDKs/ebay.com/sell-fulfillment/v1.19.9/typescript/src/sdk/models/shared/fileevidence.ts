import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FileEvidence
/** 
 * This type is used to store the unique identifier of an evidence file. Evidence files are used by seller to contest a payment dispute.
**/
export class FileEvidence extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileId" })
  fileId?: string;
}
