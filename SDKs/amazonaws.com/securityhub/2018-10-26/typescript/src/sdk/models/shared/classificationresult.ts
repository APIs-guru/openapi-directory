import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomDataIdentifiersResult } from "./customdataidentifiersresult";
import { SensitiveDataResult } from "./sensitivedataresult";
import { ClassificationStatus } from "./classificationstatus";



// ClassificationResult
/** 
 * Details about the sensitive data that was detected on the resource.
**/
export class ClassificationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalOccurrences" })
  additionalOccurrences?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CustomDataIdentifiers" })
  customDataIdentifiers?: CustomDataIdentifiersResult;

  @SpeakeasyMetadata({ data: "json, name=MimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=SensitiveData", elemType: SensitiveDataResult })
  sensitiveData?: SensitiveDataResult[];

  @SpeakeasyMetadata({ data: "json, name=SizeClassified" })
  sizeClassified?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ClassificationStatus;
}
