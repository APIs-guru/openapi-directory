import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomDataIdentifiers } from "./customdataidentifiers";
import { SensitiveDataItem } from "./sensitivedataitem";
import { ClassificationResultStatus } from "./classificationresultstatus";


// ClassificationResult
/** 
 * Provides the details of a sensitive data finding, including the types, number of occurrences, and locations of the sensitive data that was detected.
**/
export class ClassificationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalOccurrences" })
  additionalOccurrences?: boolean;

  @Metadata({ data: "json, name=customDataIdentifiers" })
  customDataIdentifiers?: CustomDataIdentifiers;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=sensitiveData", elemType: shared.SensitiveDataItem })
  sensitiveData?: SensitiveDataItem[];

  @Metadata({ data: "json, name=sizeClassified" })
  sizeClassified?: number;

  @Metadata({ data: "json, name=status" })
  status?: ClassificationResultStatus;
}
