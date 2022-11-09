import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomDataIdentifiersResult } from "./customdataidentifiersresult";
import { SensitiveDataResult } from "./sensitivedataresult";
import { ClassificationStatus } from "./classificationstatus";


// ClassificationResult
/** 
 * Details about the sensitive data that was detected on the resource.
**/
export class ClassificationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalOccurrences" })
  additionalOccurrences?: boolean;

  @Metadata({ data: "json, name=CustomDataIdentifiers" })
  customDataIdentifiers?: CustomDataIdentifiersResult;

  @Metadata({ data: "json, name=MimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=SensitiveData", elemType: shared.SensitiveDataResult })
  sensitiveData?: SensitiveDataResult[];

  @Metadata({ data: "json, name=SizeClassified" })
  sizeClassified?: number;

  @Metadata({ data: "json, name=Status" })
  status?: ClassificationStatus;
}
