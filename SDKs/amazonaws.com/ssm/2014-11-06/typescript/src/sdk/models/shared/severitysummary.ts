import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SeveritySummary
/** 
 * The number of managed instances found for each patch severity level defined in the request filter.
**/
export class SeveritySummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CriticalCount" })
  criticalCount?: number;

  @SpeakeasyMetadata({ data: "json, name=HighCount" })
  highCount?: number;

  @SpeakeasyMetadata({ data: "json, name=InformationalCount" })
  informationalCount?: number;

  @SpeakeasyMetadata({ data: "json, name=LowCount" })
  lowCount?: number;

  @SpeakeasyMetadata({ data: "json, name=MediumCount" })
  mediumCount?: number;

  @SpeakeasyMetadata({ data: "json, name=UnspecifiedCount" })
  unspecifiedCount?: number;
}
