import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomDataIdentifiers } from "./customdataidentifiers";
import { SensitiveDataItem } from "./sensitivedataitem";
import { ClassificationResultStatus } from "./classificationresultstatus";



// ClassificationResult
/** 
 * Provides the details of a sensitive data finding, including the types, number of occurrences, and locations of the sensitive data that was detected.
**/
export class ClassificationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalOccurrences" })
  additionalOccurrences?: boolean;

  @SpeakeasyMetadata({ data: "json, name=customDataIdentifiers" })
  customDataIdentifiers?: CustomDataIdentifiers;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=sensitiveData", elemType: SensitiveDataItem })
  sensitiveData?: SensitiveDataItem[];

  @SpeakeasyMetadata({ data: "json, name=sizeClassified" })
  sizeClassified?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ClassificationResultStatus;
}
